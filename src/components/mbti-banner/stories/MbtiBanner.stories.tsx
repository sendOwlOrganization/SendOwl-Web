import MbtiBanner from '@components/icons/AngleRightBigIcon';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
    title: 'components/icons/AngleRight',
    component: MbtiBanner,
} as ComponentMeta<typeof MbtiBanner>;

const Template: ComponentStory<typeof MbtiBanner> = (args) => (
    <MbtiBanner {...args} />
);

export const Default = Template.bind({});
Default.args = {
    color: 'default',
};

export const Grey = Template.bind({});
Grey.args = {
    color: 'grey',
};