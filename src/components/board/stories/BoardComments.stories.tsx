import BoardComments from '@components/board/board-comments/BoardComments';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
    title: 'components/board/BoardComments',
    component: BoardComments,
} as ComponentMeta<typeof BoardComments>;

const Template: ComponentStory<typeof BoardComments> = (args) => <BoardComments {...args} />;

const commentMock = [
    {
        'id': 1,
        'user': {
            'id': 1,
            'nickName': '실제적인 ESTJ',
            'mbti': 'ESTJ',
        },
        'content': 'test suc!!!!',
        'regDate': new Date('2022-05-09T05:06:39.360423'),
        'modDate': new Date('2022-05-16T12:03:45.787714'),
    },
    {
        'id': 2,
        'user': {
            'id': 1,
            'nickName': '실제적인 ESTJ',
            'mbti': 'ESTJ',
        },
        'content': 'NEST comment',
        'regDate': new Date('2022-05-16T12:03:49.938271'),
        'modDate': new Date('2022-05-16T12:03:49.938271'),
    },
    {
        'id': 3,
        'user': {
            'id': 1,
            'nickName': '실제적인 ESTJ',
            'mbti': 'ESTJ',
        },
        'content': 'NEST comment',
        'regDate': new Date('2022-05-16T12:08:22.348648'),
        'modDate': new Date('2022-05-16T12:08:22.348648'),
    },
    {
        'id': 4,
        'user': {
            'id': 1,
            'nickName': '실제적인 ESTJ',
            'mbti': 'ESTJ',
        },
        'content': 'NEST comment',
        'regDate': new Date('2022-05-16T12:41:20.843368'),
        'modDate': new Date('2022-05-16T12:41:20.843368'),
    },
];

export const Example = Template.bind({});
Example.args = {
    comments: commentMock,
};
