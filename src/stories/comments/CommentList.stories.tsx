import { ComponentMeta, ComponentStory } from '@storybook/react';
import CommentList from '../../components/comments/CommentList';
import { commentsMock } from '../../mocks/comments';

export default {
    title: 'components/comments/CommentList',
    component: CommentList,
} as ComponentMeta<typeof CommentList>;

const Template: ComponentStory<typeof CommentList> = (args) => <CommentList {...args} />;

export const Example = Template.bind({});
Example.args = {
    comments: commentsMock,
};