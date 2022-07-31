import CommentListItem from '@components/molecules/CommentListItem';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
    title: 'components/comments/CommentListItem',
    component: CommentListItem,
} as ComponentMeta<typeof CommentListItem>;

const Template: ComponentStory<typeof CommentListItem> = (args) => <CommentListItem {...args} />;

export const 일반_댓글 = Template.bind({});
일반_댓글.args = {
    id: 1,
    user: '부엉',
    content: '댓글 입니다.',
    regDate: '2022-05-01T13:52:00',
    modDate: '2022-05-01T13:52:00',
    active: true,
    like: 2,
    childComments: [
        {
            id: 2,
            user: 'Test',
            content: '대댓글 입니다.',
            regDate: '2022-05-01T13:52:00',
            modDate: '2022-05-01T13:52:00',
            active: true,
            like: 2,
        },
    ],
};