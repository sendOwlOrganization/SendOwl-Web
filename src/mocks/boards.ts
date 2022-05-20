import { ComponentProps } from 'react';
import BoardCategoryPostList from '../components/board-category-list/BoardCategoryPostList';
import { User, userMocks } from './users';

export interface BoardPost {
    id: number;
    title: string;
    content: string;
    date: string;
    user: User;
    like: number;
    comments: number;
    view: number;
}

export const postMocks: BoardPost[] = [
    {
        id: 1,
        title: '안녕하세요',
        content: `# GFM 플러그인 << 타이틀

테스트용 마크다운 입니다. << 일반 텍스트

## 자동 링크 생성 << 서브 타이틀

www.example.com, https://example.com, and contact@example.com.

## Strikethrough

~one~ or ~~two~~ tildes.

\`someCode\`

\`\`\`
console.log('hello, world!');
\`\`\`

## 표

| a | b  |  c |  d  |
| - | :- | -: | :-: |

## Tasklist

* [ ] to do
* [x] done`,
        date: '2022-04-18T15:22:47',
        user: userMocks[0],
        like: 42,
        comments: 123,
        view: 4673,
    },
];


function createData(
    category: string,
    name: string,
    like: number,
    comment: number,
): ComponentProps<typeof BoardCategoryPostList>['boards'][number] {
    return {
        id: Math.ceil(Math.random() * 100000),
        category,
        title: name,
        likeCount: like,
        commentCount: comment,
    };
}


export const boardsMock = [
    createData('이직.커리어', '경찰준비중입니다..', 10, 2),
    createData('잡담', '블랙기업', 8, 2),
    createData('이직.커리어', '중소기업 어디다니세요', 3000, 1000),
    createData('이직.커리어', '고민입니다', 1, 3),
    createData('이직.커리어', '개발자', 4, 6),
];
