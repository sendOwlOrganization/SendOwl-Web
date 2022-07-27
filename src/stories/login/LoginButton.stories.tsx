import LoginButton from '@components/molecules/LoginButton';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
    title: 'components/Login/LoginButton',
    component: LoginButton,
} as ComponentMeta<typeof LoginButton>;

const Template: ComponentStory<typeof LoginButton> = (args) => <LoginButton {...args} />;

export const Button = Template.bind({});