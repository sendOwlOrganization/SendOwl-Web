import CommentField from '@components/molecules/CommentField';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
    title: 'components/comments/CommentField',
    component: CommentField,
} as ComponentMeta<typeof CommentField>;

const Template: ComponentStory<typeof CommentField> = (args) => <CommentField {...args} />;

export const Example = Template.bind({});
Example.args = {
    boardId: 1,
};