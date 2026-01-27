# 블로그 포스트 작성 가이드

## 📁 폴더 구조

```
content/blog/
  ├── 2025-01-15-post-title/
  │   ├── index.md          # 필수: 포스트 내용
  │   ├── cover.jpg         # 선택: 썸네일 이미지
  │   └── image1.png        # 선택: 포스트 내 사용할 이미지
  └── 2025-01-20-another-post/
      ├── index.md
      └── cover.png
```

## 🚀 포스트 생성 방법

### 1단계: 폴더 생성

`content/blog/` 아래에 날짜 기반 폴더명으로 새 폴더를 생성합니다.

**폴더명 규칙:**
- 형식: `YYYY-MM-DD-post-title`
- 예시: `2025-01-15-react-hooks-guide`, `2025-01-20-nextjs-tips`
- 날짜는 포스트 작성일과 동일하게 설정
- 영문 소문자, 숫자, 하이픈(-)만 사용
- 폴더명이 URL slug로 사용됩니다

### 2단계: index.md 파일 생성

폴더 내에 `index.md` 파일을 생성하고 아래 템플릿을 사용하세요.

### 3단계: 이미지 추가 (선택)

- 썸네일: `cover.jpg` 또는 `cover.png`로 저장하면 자동 감지
- 포스트 이미지: 아무 이름으로 저장하고 MD에서 참조

## 📝 Front Matter 설정

각 포스트의 `index.md` 파일 상단에 YAML 형식의 메타데이터를 작성합니다.

### 필수 필드

```yaml
title: "포스트 제목"        # 필수
date: "2025-01-15"          # 필수 (YYYY-MM-DD 형식)
```

### 선택 필드

```yaml
description: "포스트 설명"   # 리스트에 표시되는 설명
tags:                        # 태그 배열
  - "React"
  - "Next.js"
  - "TypeScript"
series: "React 시리즈"       # 시리즈 이름 (같은 이름으로 묶임)
thumbnail: "cover.jpg"       # 썸네일 직접 지정 (선택)
isVelogPost: false           # Velog 포스트 여부 (기본: false)
velogUrl: "https://..."      # Velog 링크 (isVelogPost가 true일 때)
velogDate: "2024-12-01"      # Velog 작성일
```

## 🎨 썸네일 이미지

썸네일은 자동으로 감지됩니다 (우선순위 순):

1. **frontMatter 지정**: `thumbnail: "my-image.jpg"`로 직접 지정
2. **cover 파일**: 폴더 내 `cover.*` 파일 (cover.jpg, cover.png 등)
3. **첫 번째 이미지**: cover 파일이 없으면 폴더 내 첫 번째 이미지 파일 자동 사용

**권장**: 썸네일로 사용할 이미지를 `cover.jpg` 또는 `cover.png`로 저장

## 📸 이미지 사용

### 포스트 폴더 내 이미지 (상대 경로)

```markdown
![이미지 설명](./image.png)
![이미지 설명](image.png)        # ./ 생략 가능
```

### 이미지 크기 지정

```markdown
![설명|width:500](./image.png)    # 500px
![설명|50%](./image.png)          # 50% 너비
![설명|width:800](./image.png)    # 800px
```

### Public 폴더 이미지

```markdown
![설명](/images/projects/project1.svg)
```

**참고**: 이미지는 자동으로 중앙 정렬됩니다.

## 📚 시리즈 기능

같은 주제의 여러 포스트를 시리즈로 묶을 수 있습니다.

**사용 방법:**
1. 각 포스트의 `frontMatter`에 `series` 필드 추가
2. 같은 시리즈 이름을 사용하면 자동으로 그룹화

**예시:**
```yaml
# 포스트 1
series: "React 완전정복"

# 포스트 2
series: "React 완전정복"

# 포스트 3
series: "Next.js 마스터하기"
```

시리즈 모드에서 "React 완전정복" 시리즈에 포스트 1, 2가 함께 표시됩니다.

## 📋 MD 파일 템플릿

아래 템플릿을 복사해서 사용하세요:

```markdown
---
title: "포스트 제목"
date: "2025-01-15"
description: "포스트에 대한 간단한 설명입니다. 리스트 페이지에 표시됩니다."
tags:
  - "React"
  - "Next.js"
series: "시리즈 이름"  # 선택사항
isVelogPost: false
---

# 포스트 제목

포스트 내용을 작성합니다.

## 섹션 제목

내용...

### 하위 섹션

내용...

## 이미지 사용

![이미지 설명](./cover.jpg)

## 코드 블록

\`\`\`typescript
const example = () => {
  console.log("Hello, World!");
};
\`\`\`

## 리스트

- 항목 1
- 항목 2
- 항목 3

## 링크

[링크 텍스트](https://example.com)

## 인용구

> 인용구 내용입니다.
```

## ⚠️ 주의사항

1. **폴더명과 date 필드 일치**: 폴더명의 날짜와 `date` 필드가 일치하는 것을 권장
2. **Velog 포스트**: `isVelogPost: true`로 설정하면 블로그 리스트에 표시되지 않음
3. **시리즈**: 시리즈가 없는 포스트는 시리즈 모드에서 표시되지 않음
4. **이미지 경로**: 포스트 폴더 내 이미지는 상대 경로(`./` 또는 파일명)로 참조
