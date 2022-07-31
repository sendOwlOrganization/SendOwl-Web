import SignUpForm from '@organisms/sign-up/SignUpForm';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
    title: 'components/SignUp/SignUpForm',
    component: SignUpForm,
} as ComponentMeta<typeof SignUpForm>;

const Template: ComponentStory<typeof SignUpForm> = (args) => <SignUpForm {...args} />;

export const Form = Template.bind({});