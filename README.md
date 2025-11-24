# 오태준 포트폴리오

프론트엔드 개발자 오태준의 기술과 프로젝트를 소개하는 포트폴리오 웹사이트입니다.

**🌐 Live Site:** [https://www.taejun0-portfolio.site/](https://www.taejun0-portfolio.site/)

## 📋 목차

- [프로젝트 소개](#프로젝트-소개)
- [주요 기능](#주요-기능)
- [기술 스택](#기술-스택)
- [프로젝트 구조](#프로젝트-구조)
- [시작하기](#시작하기)
- [스크립트](#스크립트)
- [주요 특징](#주요-특징)
- [성능 최적화](#성능-최적화)

## 🎯 프로젝트 소개

이 포트폴리오는 React, TypeScript, Next.js를 기반으로 구축된 정적 웹사이트로, 프론트엔드 개발자로서의 저를 소개하는 페이지입니다.

**디자인 컨셉:**

> "흑과 백이 아닌 회색의 명도차일 뿐이다."
>
> 어린 시절부터 제가 가지고 있던 하나의 신념입니다. 갈등 상황 속에서도 다양한 의견과 스펙트럼이 있음을 알고 이를 존중합니다.

회색 톤의 테마로 깔끔하고 집중도 있는 UI를 구현하였으며, Emotion과 Framer Motion을 활용한 슬라이드 기반 인터페이스를 구성하였습니다.

## ✨ 주요 기능

### 메인 페이지

- **슬라이드 형식의 섹션 구성**: 자연스러운 스크롤 기반 네비게이션
- **인터랙티브 애니메이션**: Framer Motion을 활용한 부드러운 전환 효과
- **타이핑 효과**: Typewriter Effect를 활용한 동적 텍스트 표현
- **Sticky Avatar**: 스크롤에 따라 고정되는 아바타 컴포넌트

### 프로젝트 페이지

- **프로젝트 상세 소개**: 각 프로젝트의 기술 스택, 역할, 도전 과제 등 상세 정보 제공
- **필터링 기능**: 카테고리별 프로젝트 필터링
- **동적 라우팅**: 프로젝트별 상세 페이지 지원

### 스킬 페이지

- **기술 스택 시각화**: 보유 기술을 카테고리별로 분류하여 표시
- **필터링 기능**: 기술 카테고리별 필터링

### 블로그 연동

- **Velog API 연동**: RSS Parser를 활용한 최신 블로그 포스트 표시
- **실시간 업데이트**: 최신 글을 자동으로 가져와 표시

### 연락처

- **이메일 연동**: EmailJS를 활용한 이메일 전송 기능

## 🛠 기술 스택

### Core

- **React 18.2.0** - UI 라이브러리
- **TypeScript 5.8.3** - 타입 안정성
- **Next.js 15.3.4** - React 프레임워크 (App Router)

### 스타일링

- **@emotion/react** - CSS-in-JS 스타일링
- **@emotion/styled** - 스타일드 컴포넌트

### 애니메이션 & UI

- **framer-motion 12.23.0** - 애니메이션 라이브러리
- **swiper 11.2.10** - 슬라이더 컴포넌트
- **react-icons 4** - 아이콘 라이브러리
- **typewriter-effect 2.22.0** - 타이핑 효과

### 상태 관리 & 데이터 페칭

- **@tanstack/react-query 5.81.5** - 서버 상태 관리
- **@tanstack/react-query-devtools 5.81.5** - React Query 개발 도구

### 기타

- **@emailjs/browser 4.4.1** - 이메일 전송
- **rss-parser 3.13.0** - RSS 피드 파싱

### 개발 도구

- **Jest 30.0.3** - 테스트 프레임워크
- **@testing-library/react 16.3.0** - React 컴포넌트 테스트
- **TypeScript** - 타입 체킹

### 배포

- **Vercel** - 호스팅 및 배포

## 📁 프로젝트 구조

```
2025_PortFolioPage/
├── app/                          # Next.js App Router
│   ├── (default)/               # 메인 페이지 그룹
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── (detail)/                # 상세 페이지 그룹
│   │   ├── about/
│   │   ├── projects/
│   │   └── skills/
│   ├── api/                     # API 라우트
│   │   ├── projects/
│   │   └── velog/
│   ├── layout.tsx               # 루트 레이아웃
│   └── providers.tsx            # 전역 프로바이더
├── src/
│   ├── components/              # 공통 컴포넌트
│   │   ├── footer/
│   │   ├── header/
│   │   └── scrollprogressbar/
│   ├── features/                # 기능별 페이지
│   │   ├── mainpage/           # 메인 페이지
│   │   ├── aboutpage/          # 소개 페이지
│   │   ├── projectspage/       # 프로젝트 페이지
│   │   └── skillspage/         # 스킬 페이지
│   ├── hooks/                   # 커스텀 훅
│   │   ├── useActiveSection.ts
│   │   └── useSectionObserver.ts
│   ├── lib/                     # 유틸리티 및 데이터
│   │   ├── projectData.ts
│   │   └── projects.ts
│   ├── constants/               # 상수
│   │   └── routeConstants.ts
│   ├── styles/                  # 전역 스타일
│   │   ├── GlobalStyle.tsx
│   │   └── theme.ts
│   └── utils/                   # 유틸리티 함수
│       └── fetchVelog.ts
├── public/                      # 정적 파일
│   ├── images/
│   ├── fonts/
│   └── resume_otj.pdf
├── scripts/                     # 빌드 스크립트
└── package.json
```

## 🚀 시작하기

### 필수 요구사항

- **Node.js** 18.x 이상
- **Yarn** 4.9.2 (또는 npm)

### 설치

```bash
# 저장소 클론
git clone https://github.com/taejun0/PortfolioPage.git

# 프로젝트 디렉토리로 이동
cd 2025_PortFolioPage

# 의존성 설치
yarn install
```

### 환경 변수 설정

프로젝트 루트에 `.env.local` 파일을 생성하고 필요한 환경 변수를 설정하세요:

```env
# EmailJS 설정 (선택사항)
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

## 📜 스크립트

```bash
# 개발 서버 실행
yarn dev

# 프로덕션 빌드
yarn build

# 프로덕션 서버 실행
yarn start

# 린트 검사
yarn lint

# 타입 체크
yarn type-check

# 테스트 실행
yarn test
```

## 🎨 주요 특징

### 1. 성능 최적화

- **동적 임포트**: 페이지별 코드 스플리팅으로 초기 로딩 시간 단축
- **이미지 최적화**: WebP 포맷 사용 및 Next.js Image 컴포넌트 활용
- **SEO 최적화**: 메타 태그 및 Open Graph 설정

### 2. 반응형 디자인

- 모바일, 태블릿, 데스크톱 환경에 최적화된 UI
- 터치 제스처 지원

### 3. 접근성

- 시맨틱 HTML 마크업
- 키보드 네비게이션 지원
- 적절한 ARIA 레이블

### 4. 타입 안정성

- TypeScript를 통한 타입 안정성 확보
- 엄격한 타입 체크 설정

## 🔧 성능 최적화

이 프로젝트는 다음과 같은 성능 최적화 기법을 적용했습니다:

1. **코드 스플리팅**: 페이지별 동적 임포트로 번들 크기 최적화
2. **이미지 최적화**: WebP 포맷 변환 및 Next.js Image 컴포넌트 활용
3. **SEO 개선**: 메타 태그, Open Graph, 구조화된 데이터 추가
4. **라우팅 최적화**: App Router의 서버 컴포넌트 활용
5. **번들 최적화**: 불필요한 의존성 제거 및 트리 쉐이킹

## 📝 라이선스

이 프로젝트는 개인 포트폴리오 목적으로 제작되었습니다.

## 📧 연락처

- **이메일**: [이메일 주소]
- **GitHub**: [https://github.com/taejun0](https://github.com/taejun0)
- **Velog**: [Velog 주소]
- **포트폴리오**: [https://www.taejun0-portfolio.site/](https://www.taejun0-portfolio.site/)

---

**Made with ❤️ by 오태준**
