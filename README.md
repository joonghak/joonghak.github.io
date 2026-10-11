# 이종학 포트폴리오

[포트폴리오 보기](https://joonghak.github.io/)

Astro로 만든 정적 포트폴리오입니다. 프로젝트 상세, 시연 영상, 발표자료 링크와 A4 인쇄 스타일을 제공합니다.

## 로컬 실행

Node.js 24를 사용합니다.

```sh
npm ci
npm run dev -- --background --host 127.0.0.1
```

미리보기: http://127.0.0.1:4321/

```sh
npm run astro -- dev status
npm run astro -- dev logs
npm run astro -- dev stop
```

## 내용 수정

- `src/data/portfolio.ts`: 프로필, 기술, 프로젝트 요약, 수상, 활동, 교육
- `src/pages/projects/`: 프로젝트 상세
- `src/styles/global.css`: 화면과 인쇄 스타일
- `public/media/`: 시연 영상과 미리보기
- `public/documents/`: 발표자료 PDF

## 배포

`main`에 커밋을 push하면 `.github/workflows/deploy.yml`이 Astro 사이트를 빌드하고 GitHub Pages에 배포합니다. 저장소의 **Settings → Pages → Source**는 **GitHub Actions**를 사용합니다.

배포 주소: https://joonghak.github.io/

```sh
npm run build
```

빌드 결과는 `dist/`에 생성됩니다. 서버 코드는 필요하지 않습니다.

## PDF

페이지의 **인쇄 / PDF** 버튼이나 브라우저 인쇄 기능을 사용합니다. 현재 열린 페이지를 A4 PDF로 저장하며, 내비게이션과 영상 컨트롤은 인쇄에서 숨깁니다.

## 글꼴

[Pretendard](https://github.com/orioncactus/pretendard) Variable 1.3.9를 로컬 파일로 제공합니다. 라이선스는 `public/fonts/OFL.txt`에 포함되어 있습니다.
