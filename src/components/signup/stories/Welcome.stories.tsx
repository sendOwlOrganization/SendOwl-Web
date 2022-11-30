import Welcome from '@components/signup/Welcome';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
    title: 'components/signup/Welcome',
    component: Welcome,
} as ComponentMeta<typeof Welcome>;

const Template: ComponentStory<typeof Welcome> = (args) => <Welcome {...args} />;

export const Example = Template.bind({});
Example.args = {
    nickname: '차분한 INFJ',
};