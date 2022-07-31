import { Board } from '@organisms/board';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
    title: 'components/Board/example',
    component: Board,
} as ComponentMeta<typeof Board>;

const Template: ComponentStory<typeof Board> = (args) => <Board {...args} />;

export const BoardExample = Template.bind({});
BoardExample.args = {
    post: {
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
        date: '2022-04-22',
        user: {
            id: 1,
            isActive: true,
            email: 'owl@sendowl.com',
            nickname: '부엉이',
        },
        like: 252,
        comments: 102,
        view: 1023,
    },
};