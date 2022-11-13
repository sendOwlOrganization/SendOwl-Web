import Welcome from '@components/welcome/Welcome';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
    title: 'components/welcome/Welcome',
    component: Welcome,
} as ComponentMeta<typeof Welcome>;

const Template: ComponentStory<typeof Welcome> = (args) => (
    <Welcome {...args} />
);

export const Example = Template.bind({});