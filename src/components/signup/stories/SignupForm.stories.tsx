import SignupForm from '@components/signup/SignupForm';
import { ComponentMeta, ComponentStory } from '@storybook/react';


export default {
    title: 'components/signup/SignupForm',
    component: SignupForm,
    parameters: {
        layout: 'fullscreen',
    },
} as ComponentMeta<typeof SignupForm>;

const Template: ComponentStory<typeof SignupForm> = (args) => (
    <>
        <SignupForm {...args} />
    </>
);

export const Example = Template.bind({});
Example.args = {};