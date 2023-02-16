import Comments from '@components/comments/Comments';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
    title: 'components/comments/Comments',
    component: Comments,
} as ComponentMeta<typeof Comments>;

const Template: ComponentStory<typeof Comments> = (args) => <Comments {...args} />;

export const Default = Template.bind({});
Default.args = {
    comments: [
        {
            'id': 16,
            'user': {
                'id': 14,
                'nickName': 'asdf',
                'mbti': 'ENFJ',
            },
            'children': [
                {
                    'id': 17,
                    'user': {
                        'id': 14,
                        'nickName': 'asdf',
                        'mbti': 'ENFJ',
                    },
                    'content': '대댓글6',
                    'regDate': '2022-10-06T11:20:01.319775',
                    'modDate': '2022-10-06T11:20:01.319775',
                    'commentLikeCount': 23,
                },
            ],
            'content': 'string',
            'regDate': '2022-10-06T11:19:42.391717',
            'modDate': '2022-10-06T11:19:42.391717',
            'commentLikeCount': 1,
        },
        {
            'id': 12,
            'user': {
                'id': 14,
                'nickName': 'asdf',
                'mbti': 'ENFJ',
            },
            'children': [
                {
                    'id': 13,
                    'user': {
                        'id': 14,
                        'nickName': 'asdf',
                        'mbti': 'ENFJ',
                    },
                    'content': '바꿔보자!2',
                    'regDate': '2022-10-06T11:06:38.328814',
                    'modDate': '2022-10-06T11:19:20.004988',
                    'commentLikeCount': 999,
                },
            ],
            'content': '댓글2',
            'regDate': '2022-10-06T11:06:13.084944',
            'modDate': '2022-10-06T11:06:13.084944',
            'commentLikeCount': 0,
        },
    ],
};
