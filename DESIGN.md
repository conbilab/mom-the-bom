# 몸 더봄 홈페이지 디자인 시스템

## 1. Brief

- 브랜드: `몸 더봄` (`MOM THE BOM`)
- 의미: 인간의 몸을 더 자세히 바라보고, 매일의 선택을 통해 웰빙과 웰니스를 돕는 브랜드.
- 홈페이지 역할: 국내 유통사와 해외 파트너가 첫 화면에서 브랜드의 수준과 확장성을 판단할 수 있는 이미지 중심 브랜드 사이트.
- 1차 전환: 파트너십 제안.
- 2차 전환: 브랜드 철학과 첫 제품 이해.
- 현재 제품: 모앤봄 산야초 샴푸. 몸 더봄 철학을 보여주는 첫 번째 생활 제품으로 다룬다.

## 2. Research Log

### 볼트 브랜드 자료

- `00_모앤봄_실행인덱스.md`: 기능성 탈모샴푸 정면 경쟁보다 매일 쓰는 제품을 좋은 것으로 바꾸는 생활 케어에 집중한다.
- `2026-모앤봄-진정성스토리-포장-두피서비스-빌드업.md`: 20년 넘게 현장에서 민감한 고민을 들은 경험, 과장보다 매일 닿는 기준, 제품 이후에도 이어지는 돌봄이 브랜드의 원천이다.
- `2026-모앤봄-경쟁사분석-전략보고서.md`: 경쟁사의 강한 증거 배치 문법은 배우되, 몸 더봄은 산야초, 생활 루틴, 조용한 증거, 선물의 언어로 차별화한다.
- `모앤봄_상세페이지_광고_표시광고_컴플라이언스_가이드.md`: 피부 자극지수 0.00은 인체피부 일차자극 시험의 결과로만 정확히 표현한다. 탈모, 발모, 질환, 치료 효과로 확장하지 않는다.

### 학습 자료

- 작은 브랜드 리서치: 박웅현의 `잘 말해진 진실`과 `Only One`, 이제석의 한 컷 직관, 노희영의 팔리는 한 끗을 결합한다.
- UI/UX 디자인 학습: 한 화면에 하나의 핵심 행동, 44px 이상 터치 영역, 4/8px 리듬, 명확한 포커스, 반응형 우선.
- UI UX DB 제안: 프리미엄 블랙과 골드 계열은 채택. Liquid Glass는 대비와 성능 위험 때문에 제외.

### 실제 화면 리서치

- Lazyweb `Grove Collaborative`: 제품을 큰 이미지로 먼저 보여주고, 제품군과 브랜드 근거가 바로 이어지는 구조를 참고한다.
- Lazyweb `Prose`: 제품의 재료감과 여백이 설명보다 먼저 브랜드를 말하는 방식을 참고한다.
- Apple reference: 화면 장식보다 사진과 소재가 주인공이 되는 dark/light chapter rhythm을 채택한다.
- Layer A: `soft-skill.md`의 Soft Structuralism. 과한 글래스, 오브, 카드 중첩은 제외한다.
- Layer B: `apple.md`. 제품 중심 이미지, 조용한 UI, 넓은 여백, 흑백 장면 전환을 적용한다.

## 3. Direction

### Concept Spine

`Living Standard`: 몸을 고쳐야 할 문제로 보지 않고, 더 잘 바라보며 매일의 기준을 세우는 살아 있는 시스템.

### Hero

- Giant image-first hero.
- 제품이 보이되 제품 상세페이지처럼 시작하지 않는다.
- 밝은 건축적 욕실과 아침 루틴을 통해 몸, 생활, 제품을 한 장면에 묶는다.
- 핵심 문장: `몸을 더 바라볼수록, 삶은 더 좋아집니다.`
- 첫 화면 아래에 다음 백색 섹션이 살짝 보여야 한다.

### Section Rhythm

1. Hero: 밝은 전체 화면 이미지, 왼쪽 아래 문장.
2. Manifesto: 백색 여백과 짧은 선언.
3. Four observations: 네 개의 생활 영역을 선형 목록으로 전개.
4. First proof: 어두운 물과 제품 이미지.
5. Evidence: 조용한 수치와 정확한 주석.
6. Origin story: 사람의 배려가 보이는 아침 장면.
7. Partners: 짙은 소나무색 위에 파트너 가치.
8. Contact: 넓은 백색 문의 영역과 푸터.

## 4. Personas

- 국내 유통 담당자: 첫 10초 안에 브랜드의 차별성, 제품성, 협업 준비도를 판단한다.
- 해외 바이어: 한국적이되 전통 장식에 갇히지 않은 현대 웰니스 브랜드를 찾는다. 영어 전환과 제품 근거를 요구한다.
- 35~49세 생활 큐레이터: 가족에게 관리하라고 말하기보다 매일 쓰는 좋은 것을 건네고 싶다.

## 5. Tokens

### Color

| Token | Value | Role |
|---|---:|---|
| `--ink` | `#101712` | 주 텍스트, 어두운 장면 |
| `--pine` | `#123b2d` | 브랜드 앵커 |
| `--paper` | `#f4f4ef` | 주 배경 |
| `--porcelain` | `#ffffff` | 밝은 표면 |
| `--mist` | `#e7ebe7` | 보조 표면 |
| `--stone` | `#626b66` | 보조 텍스트 |
| `--amber` | `#b87923` | 제품 액체와 연결되는 제한적 강조 |
| `--line` | `#d5dad5` | 구분선 |
| `--focus` | `#d79b3f` | 키보드 포커스 |

### Typography

- Display: `KoPub Batang`, `Batang`, `AppleMyungjo`, `Georgia`, serif. 선언과 브랜드 철학에 사용하며 운영체제의 로컬 서체로 안정적으로 폴백한다.
- Text: `Pretendard`, `SUIT`, `Malgun Gothic`, `Arial`, sans-serif. 내비게이션, 본문, 폼, 데이터에 사용하며 외부 폰트 요청 없이 렌더링한다.
- 크기: 12 / 14 / 16 / 18 / 24 / 32 / 48 / 64 / 80px.
- 모든 letter-spacing은 `0`.
- 본문 line-height는 1.65, 긴 문장 너비는 70ch 이하.

### Spacing

- Base unit: 4px.
- Component: 8 / 12 / 16 / 24 / 32px.
- Section: 64 / 96 / 128 / 160px.
- Desktop container: 1280px, 좌우 최소 32px.
- Mobile gutter: 20px.

### Radius and Depth

- 버튼과 입력: 4px.
- 이미지 프레임: 0 또는 4px.
- 표면 분리는 색과 1px hairline으로 처리한다.
- box shadow는 내비게이션과 포커스된 오버레이 외에는 사용하지 않는다.

## 6. Components and States

### Brand Mark

- 한글 `몸 더봄`과 영문 `MOM THE BOM`을 세로로 조합한다.
- 모든 화면에서 텍스트 로고로 선명하게 유지한다.

### Navigation

- 투명 오버레이에서 스크롤 후 잉크색 바탕으로 전환.
- 데스크톱: 브랜드, 4개 링크, 언어 전환, 파트너 CTA.
- 모바일: 메뉴 버튼이 오른쪽 drawer를 연다. Escape, 바깥 클릭, 링크 선택으로 닫힌다.

### CTA

- Primary: pine 또는 porcelain fill, 최소 높이 48px.
- Secondary: underline text link.
- States: default, hover, pressed scale 0.98, focus ring, disabled.
- beui.dev `button`의 press feedback을 CSS로 축약 적용한다.

### Observation Row

- 번호, 영역명, 한 문장, 세부 문장을 선형으로 배치한다.
- 클릭과 키보드로 열고 닫는다. hover만으로 정보를 숨기지 않는다.

### Evidence Block

- `0.00` 하나만 크게 보여준다. 가짜 KPI 배열을 만들지 않는다.
- 같은 화면 안에 시험 범위와 한계를 반드시 표시한다.

### Partner Inquiry

- 회사, 이름, 이메일, 관심 시장, 제안 내용을 받는다.
- 모든 필드는 visible label을 가진다.
- 현재 시안에서는 브라우저에 임시 저장하고, 수신 시스템 미연결 상태를 성공 메시지에 정확히 알린다.
- States: empty, focus, invalid, saved.

## 7. Motion and Interaction

- Enter: opacity 0 + translateY(24px)에서 700ms로 등장.
- Button: 220ms color transition, pressed scale 0.98.
- Drawer: 420ms `cubic-bezier(0.32, 0.72, 0, 1)` transform, backdrop 240ms opacity.
- Navigation: 260ms background and color transition.
- 모든 공간 이동은 transform과 opacity만 사용한다.
- `prefers-reduced-motion: reduce`에서는 transform reveal과 smooth scroll을 제거한다.
- beui.dev `drawer`에서 Escape, scroll lock, backdrop dismiss, reduced-motion fade를 채택한다.

## 8. Content and Compliance

- 모브랜드는 웰니스 철학을 말하고, 제품은 그 철학의 첫 사례로만 배치한다.
- `탈모 치료`, `발모`, `모근 강화`, `두피질환 개선`, `100% 무자극`, `병원 추천`을 쓰지 않는다.
- `피부 자극지수 0.00`은 시험명, 기관, 기간, 대상자, 개인차와 시험 한계를 함께 표시한다.
- 해외 파트너 영역은 아직 보유하지 않은 국가, 인증, 매출, 유통망을 만들지 않는다.

## 9. Asset Direction

- `hero-morning.webp`: 메인 히어로. 밝은 건축 공간과 제품, 사람의 실루엣.
- `product-water.webp`: 첫 제품 챕터. 젖은 검은 돌과 물, 제품.
- `care-morning.webp`: 배려의 생활 장면. 가족을 위한 작은 선택.
- `product-pair.webp`: 제품 근접 상세.
- 생성 이미지는 기존 제품 사진을 참고해 만든 콘셉트 자산이며, 실제 촬영본 확보 시 같은 구도로 교체한다.

## 10. Anti-Patterns

- 베이지 일색의 한방 브랜드.
- 녹색 잎과 원료를 과도하게 쌓은 자연주의 상세페이지.
- 동일한 카드 3개를 반복하는 기능 소개.
- 의료 권위나 질환 불안을 이용한 설득.
- 허위 수치, 가짜 파트너 로고, 가짜 수출 실적.
- 보라색 그라디언트, 글로우, 장식 오브, 중첩 카드, 과도한 pill.
