# MBTI Lab 웹

## About

`MBTI lab - 우리가 아는 MBTI의 모든 것` MBTI 커뮤니티 웹 사이트 프로젝트입니다.

[백엔드 리포지토리](https://github.com/sendOwlOrganization/SendOwl)

## Tech Stack

- [React.js](https://reactjs.org/)
- [MUI](https://mui.com)
- [Next.js](https://nextjs.org/)
- [Storybook](https://storybook.js.org/)
- [Typescript](https://www.typescriptlang.org/)
- [Editor.js](https://editorjs.io/)

## Design tools

`Figma`, `Zeplin`, `Octopus`

## Development

`.env`에 해당 키들을 넣어주세요

```shell
NEXT_PUBLIC_SENDOWL_API_URL=<BACKEND_API_URL>
NEXTAUTH_SECRET=<YOUR_NEXTAUTH_SECRET>

# 구글 소셜 로그인 clientId, clientSecret
GOOGLE_ID=<YOUR_GOOGLE_ID>
GOOGLE_SECRET=<YOUR_GOOGLE_SECRET>

# Chromatic 배포용 토큰
CHROMATIC_PROJECT_TOKEN=<YOUR_CHROMATIC_TOKEN>
```

### Storybook

`yarn storybook`

#### Chromatic으로 Storybook 배포하기

`yarn chromatic`

### Nextjs

`yarn dev`
