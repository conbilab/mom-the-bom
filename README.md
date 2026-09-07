# 몸 더 봄

몸을 더 바라보고 삶을 더 잘 돌보는 한국 웰니스 브랜드 `몸 더 봄`의 공식 웹사이트입니다.

## Structure

- `index.html`: 브랜드 홈페이지
- `product.html`: 모앤봄 산야초 샴푸 상세 페이지
- `review.html`: 고객 후기 작성 페이지
- `styles.css`: 반응형 디자인 시스템
- `script.js`: 메뉴, 언어 전환, 아코디언, 문의·후기 폼 전송
- `assets/`: 운영용 WebP 이미지
- `DESIGN.md`: 브랜드 및 웹 디자인 기준
- `showcase.html`: 디자인 시스템 쇼케이스

## Local preview

```bash
python -m http.server 4173
```

문의와 후기는 FormSubmit을 통해 `momthebom@naver.com`으로 전송됩니다. 최초 제출 뒤 수신함에 도착하는 FormSubmit 활성화 메일을 한 번 승인해야 실제 메일 전달이 시작됩니다.

제품 후기 QR은 `https://www.momthebom.com/review`로 연결됩니다. 배포 도메인을 바꾸면 `assets/review-qr.png`도 새 주소로 다시 생성해야 합니다.
