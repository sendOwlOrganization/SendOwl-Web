import RectangleButton from '@components/buttons/RectangleButton';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
    title: 'components/buttons/RectangleButton',
    component: RectangleButton,
} as ComponentMeta<typeof RectangleButton>;

const Template: ComponentStory<typeof RectangleButton> = (args) => <RectangleButton {...args} />;

export const Example = Template.bind({});
Example.args = {
    children: '버튼',
    disabled: false,
};
