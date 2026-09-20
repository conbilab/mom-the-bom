import { list, put } from "@vercel/blob";

const PRODUCTS = new Set([
  "산야초 건성 두피용 샴푸",
  "육미지황 지성 두피용 샴푸"
]);
const CHANNELS = new Set(["", "gift", "online", "offline", "other"]);
const PUBLIC_FIELDS = ["id", "product", "name", "rating", "channel", "message", "createdAt"];
const FORBIDDEN_CONTENT = [
  /https?:\/\//iu,
  /www\./iu,
  /[\w.+-]+@[\w.-]+\.[a-z]{2,}/iu,
  /(?:01[016789]|0\d{1,2})[-.\s]?\d{3,4}[-.\s]?\d{4}/u,
  /탈모|발모|치료|완치|예방|질환|항암|아토피|비듬|가려움/iu,
  /시발|씨발|병신|개새끼|좆/iu
];

const json = (data, init = {}) => Response.json(data, {
  ...init,
  headers: {
    "Cache-Control": "no-store",
    "Content-Type": "application/json; charset=utf-8",
    ...(init.headers || {})
  }
});

const clean = (value) => String(value || "").replace(/\s+/gu, " ").trim();

const isStoredReview = (review) => review
  && typeof review.id === "string"
  && PRODUCTS.has(review.product)
  && typeof review.name === "string"
  && review.name.length >= 2
  && review.name.length <= 24
  && Number.isInteger(review.rating)
  && review.rating >= 1
  && review.rating <= 5
  && CHANNELS.has(review.channel)
  && typeof review.message === "string"
  && review.message.length >= 20
  && review.message.length <= 500
  && typeof review.createdAt === "string"
  && Number.isFinite(Date.parse(review.createdAt));

const publicReview = (review) => Object.fromEntries(
  PUBLIC_FIELDS.map((field) => [field, review[field]])
);

const readReviews = async () => {
  const { blobs } = await list({ prefix: "reviews/", limit: 100 });
  const reviews = await Promise.all(blobs.map(async (blob) => {
    const response = await fetch(blob.url, { cache: "no-store" });
    if (!response.ok) return null;
    return response.json().catch(() => null);
  }));
  return reviews
    .filter(isStoredReview)
    .map(publicReview)
    .sort((a, b) => Date.parse(b.createdAt) - Date.parse(a.createdAt))
    .slice(0, 48);
};

export async function GET() {
  try {
    const reviews = await readReviews();
    return json({ reviews });
  } catch (error) {
    console.error("Unable to load reviews", error);
    return json({ error: "후기를 불러오지 못했습니다." }, { status: 503 });
  }
}

export async function POST(request) {
  const contentLength = Number.parseInt(request.headers.get("content-length") || "0", 10);
  if (contentLength > 8192) {
    return json({ error: "후기 내용이 너무 깁니다." }, { status: 413 });
  }
  const origin = request.headers.get("origin");
  if (origin && new URL(origin).host !== new URL(request.url).host) {
    return json({ error: "허용되지 않은 요청입니다." }, { status: 403 });
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return json({ error: "올바른 후기 형식이 아닙니다." }, { status: 400 });
  }

  if (!body || typeof body !== "object" || Array.isArray(body)) {
    return json({ error: "올바른 후기 형식이 아닙니다." }, { status: 400 });
  }

  if (clean(body.website)) return json({ ok: true }, { status: 201 });
  const startedAt = Number(body.startedAt);
  const writingTime = Date.now() - startedAt;
  if (!Number.isFinite(startedAt) || writingTime < 3000 || writingTime > 86400000) {
    return json({ error: "페이지를 새로고침한 뒤 천천히 후기를 작성해 주세요." }, { status: 400 });
  }

  const review = {
    id: crypto.randomUUID(),
    product: clean(body.product),
    name: clean(body.name),
    rating: Number.parseInt(body.rating, 10),
    channel: clean(body.channel),
    message: clean(body.message),
    createdAt: new Date().toISOString()
  };

  if (!PRODUCTS.has(review.product)) {
    return json({ error: "사용한 제품을 선택해 주세요." }, { status: 400 });
  }
  if (review.name.length < 2 || review.name.length > 24) {
    return json({ error: "닉네임은 2~24자로 입력해 주세요." }, { status: 400 });
  }
  if (!Number.isInteger(review.rating) || review.rating < 1 || review.rating > 5) {
    return json({ error: "평점을 선택해 주세요." }, { status: 400 });
  }
  if (!CHANNELS.has(review.channel)) {
    return json({ error: "올바른 사용 경로가 아닙니다." }, { status: 400 });
  }
  if (review.message.length < 20 || review.message.length > 500) {
    return json({ error: "후기는 20~500자로 입력해 주세요." }, { status: 400 });
  }
  if (body.publicUsePermission !== true) {
    return json({ error: "공개 게시 동의가 필요합니다." }, { status: 400 });
  }
  if (FORBIDDEN_CONTENT.some((pattern) => pattern.test(`${review.name} ${review.message}`))) {
    return json({ error: "연락처, 링크, 질환·치료 표현 또는 부적절한 단어는 공개 후기에 포함할 수 없습니다." }, { status: 400 });
  }

  try {
    const newestFirst = String(9999999999999 - Date.now()).padStart(13, "0");
    await put(`reviews/${newestFirst}-${review.id}.json`, JSON.stringify(review), {
      access: "public",
      addRandomSuffix: false,
      contentType: "application/json",
      cacheControlMaxAge: 60
    });
    return json({ review: publicReview(review) }, { status: 201 });
  } catch (error) {
    console.error("Unable to save review", error);
    return json({ error: "후기를 저장하지 못했습니다. 잠시 후 다시 시도해 주세요." }, { status: 503 });
  }
}

export function OPTIONS() {
  return new Response(null, { status: 204, headers: { Allow: "GET, POST, OPTIONS" } });
}
