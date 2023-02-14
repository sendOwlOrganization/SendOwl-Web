import Input from '@components/input/Input';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
    title: 'components/input/Input',
    component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
    placeholder: '작성해보세요 :)',
};

export const WithButton = Template.bind({});
WithButton.args = {
    placeholder: '버튼이 있어요',
    endAdornment: <button>hi :)</button>,
};
