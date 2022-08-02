import { MainContent } from '@organisms/main';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
    title: 'components/Main/MainContent',
    component: MainContent,
} as ComponentMeta<typeof MainContent>;

const Template: ComponentStory<typeof MainContent> = (args) => (
    <MainContent {...args} />
);

export const MainExample = Template.bind({});

// TODO: refactor api fetch data
MainExample.args = {
    categorys: [
        {
            id: 1,
            name: '토픽 베스트',
        },
        {
            id: 2,
            name: '자유 게시판',
        },
        {
            id: 3,
            name: '익명 게시판',
        },
    ],
    boards: [
        {
            id: 1,
            category: '토픽 베스트',
            title: '안녕하세요',
            likeCount: 252,
            commentCount: 12,
        },
        {
            id: 1,
            category: '토픽 베스트',
            title: '반갑습니다',
            likeCount: 252,
            commentCount: 12,
        },
        {
            id: 2,
            category: '자유 게시판',
            title: '궁금한게 있습니다.',
            likeCount: 252,
            commentCount: 12,
        },
        {
            id: 2,
            category: '자유 게시판',
            title: '저기',
            likeCount: 252,
            commentCount: 12,
        },
        {
            id: 3,
            category: '익명 게시판',
            title: '익명입니다.',
            likeCount: 252,
            commentCount: 12,
        },
    ],
};
