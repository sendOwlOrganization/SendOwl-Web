import { ComponentMeta, ComponentStory } from '@storybook/react';
import BoardContent from '../../component/organisms/board/BoardContent';

export default {
    title: 'components/Board/sub-components',
    component: BoardContent,
} as ComponentMeta<typeof BoardContent>;

const Template: ComponentStory<typeof BoardContent> = (args) => <BoardContent {...args} />;

export const Content = Template.bind({});
Content.args = {
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
};