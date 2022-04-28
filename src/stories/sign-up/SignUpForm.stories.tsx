import { ComponentMeta, ComponentStory } from '@storybook/react';
import SignUpForm from '../../components/sign-up/SignUpForm';

export default {
    title: 'components/SignUp/SignUpForm',
    component: SignUpForm,
} as ComponentMeta<typeof SignUpForm>;

const Template: ComponentStory<typeof SignUpForm> = (args) => <SignUpForm {...args} />;

export const Form = Template.bind({});