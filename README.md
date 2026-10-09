# Malbit 공식 홈페이지 — GitHub Pages (베이지 테마)

독립 개발 중인 말빛(Malbit) 소개 홈페이지. HTML / CSS / JavaScript만 사용하며 **빌드·Node·유료 호스팅 없이** GitHub Pages에 게시할 수 있습니다.

## 파일

- `index.html` — 사이트 페이지 및 말빛 스타일 작업 공간 미리보기
- `styles.css` — 베이지 테마, 반응형 레이아웃, 컴포넌트 스타일
- `script.js` — 한국어/영어 전환 및 장식용 음성 파형 생성
- `favicon.svg` — 별 모티프 파비콘
- `.nojekyll` — 정적 파일 그대로 배포

### 화면 미리보기

`index.html`을 브라우저에서 열거나 로컬 웹서버를 실행하세요.

```powershell
python -m http.server 8000
```

그다음 `http://localhost:8000`을 엽니다.

## GitHub Pages 배포

1. GitHub에서 **Public** 저장소 `malbit-site`를 만듭니다. 반드시 **말빛 애플리케이션 소스와 분리**합니다.
2. 이 폴더의 **내용물 전체** (`index.html`, `styles.css`, `script.js`, `favicon.svg`, `.nojekyll`, `README.md`)를 저장소 최상위(root)에 업로드합니다. ZIP 자체를 업로드하지 마세요.
3. 저장소 **Settings → Pages → Build and deployment**에서 `Deploy from a branch` / `main` / `/(root)`를 선택하고 저장합니다.
4. GitHub Pages 주소(`https://<GitHub-username>.github.io/malbit-site/`)가 열리는지 확인합니다.

## `malbit.kr` 연결 — 순서 중요

**중요:** 가비아 DNS에 GitHub A 레코드를 추가하기 **전에** GitHub Pages에서 Custom domain을 등록하세요. (도메인 탈취 위험 완화)

1. GitHub 저장소 **Settings → Pages → Custom domain**에 `malbit.kr` 입력 후 **Save**. (branch 배포에서 GitHub가 `CNAME` 파일 자동 생성)
2. 가비아 DNS 관리툴에서 `malbit.kr`의 기존 MX/TXT 레코드는 **삭제하지 않고**, 다음 항목을 **추가**합니다.

| 타입 | 호스트 | 값/위치 |
|---|---|---|
| A | `@` | `185.199.108.153` |
| A | `@` | `185.199.109.153` |
| A | `@` | `185.199.110.153` |
| A | `@` | `185.199.111.153` |
| CNAME | `www` | `<GitHub-username>.github.io.` |

호스트 `www`는 `www.malbit.kr`을 뜻합니다. `<GitHub-username>`은 본인의 실제 GitHub 계정명으로 바꾸세요. 위 IP는 GitHub 공식 문서에 나오는 Pages 주소(2026-10 확인)입니다. TTL은 기본값으로 둬도 됩니다. 기존 웹사이트 호스트 레코드가 있다면 추가 전 충돌을 점검하세요.

3. GitHub Pages에서 **DNS check** 완료를 기다립니다. (최대 24시간 이상 걸릴 수 있음)
4. **Enforce HTTPS** 활성화가 가능해지면 체크합니다.
5. 아래 주소를 각각 확인합니다.

   - `https://malbit.kr/`
   - `https://www.malbit.kr/` (기본 도메인으로 리디렉션될 수 있음)
   - `contact@malbit.kr`로 메일 수신 유지 여부

### 현재 메일 DNS — 절대 삭제하지 않기

| 타입 | 호스트 | 값 | Priority |
|---|---|---|---|
| MX | `@` | `mx1.improvmx.com.` | 10 |
| MX | `@` | `mx2.improvmx.com.` | 20 |
| TXT | `@` | `v=spf1 include:spf.improvmx.com ~all` | — |

> 기존 MX/TXT는 ImprovMX를 통한 `contact@malbit.kr` 메일 수신에 필요합니다. 홈페이지 연결용 A/CNAME 추가와는 독립적으로 유지해야 합니다.

## 정확성 및 공개 정보

- 배경의 말빛 UI는 실제 제품 흐름을 반영해 HTML/CSS로 재구성한 **인터페이스 예시**이며 제품 캡처가 아닙니다.
- Windows / Android 및 각 기능은 **개발 중**입니다. 실제 출시·사용 가능 여부, 가격, 보안 인증, 고객 실적 등을 주장하지 않습니다.
- 개인정보나 서버 키, API 인증값을 저장소에 올리지 마세요.
- 웹사이트는 정적이며 메일 발송 서버나 문의 수집 폼을 제공하지 않습니다. 문의 버튼은 `mailto:contact@malbit.kr`를 엽니다.

## GitHub 공식 문서

- https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site
- https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site
