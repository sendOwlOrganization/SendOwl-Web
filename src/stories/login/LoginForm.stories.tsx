import LoginForm from '@components/molecules/LoginForm';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
    title: 'components/Login/LoginForm',
    component: LoginForm,
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />;

export const Form = Template.bind({});