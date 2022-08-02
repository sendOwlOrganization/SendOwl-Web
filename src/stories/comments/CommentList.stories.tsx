import CommentList from '@components/molecules/CommentList';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
    title: 'components/comments/CommentList',
    component: CommentList,
} as ComponentMeta<typeof CommentList>;

const Template: ComponentStory<typeof CommentList> = (args) => <CommentList {...args} />;

export const Example = Template.bind({});
Example.args = {
    comments: [
        {
            id: 1,
            user: '테스트',
            content: '테스트가 좋아',
            regDate: '2022-04-01T13:52:00',
            modDate: '2022-04-01T13:52:00',
            active: true,
            like: 1231,
            childComments: [
                {
                    id: 11,
                    user: '테스트',
                    content: '대댓글 테스트',
                    regDate: '2022-04-03T13:52:00',
                    modDate: '2022-04-03T13:52:00',
                    active: true,
                    like: 22,
                },
                {
                    id: 12,
                    user: '테스트',
                    content: '',
                    regDate: '2022-04-08T13:52:00',
                    modDate: '2022-04-08T13:52:00',
                    active: false,
                    like: 32,
                },
            ],
        },
        {
            id: 2,
            user: '부엉',
            content: '',
            regDate: '2022-05-01T13:52:00',
            modDate: '2022-05-01T13:52:00',
            active: false,
            like: 2,
            childComments: [],
        },
        {
            id: 3,
            user: '안녕',
            content: '감사합니다',
            regDate: '2022-05-02T13:52:00',
            modDate: '2022-05-02T13:52:00',
            active: true,
            like: 5,
            childComments: [],
        },
        {
            id: 4,
            user: '굿',
            content: '짱입니다👍',
            regDate: '2022-05-05T13:52:00',
            modDate: '2022-05-05T13:52:00',
            active: true,
            like: 2,
            childComments: [],
        },
    ],

};