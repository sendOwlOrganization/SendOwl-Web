import AngleRightBigIcon from '@components/icons/AngleRightBigIcon';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
    title: 'components/icons/AngleRight',
    component: AngleRightBigIcon,
} as ComponentMeta<typeof AngleRightBigIcon>;

const Template: ComponentStory<typeof AngleRightBigIcon> = (args) => (
    <AngleRightBigIcon {...args} />
);

export const Default = Template.bind({});
Default.args = {
    color: 'default',
};

export const Grey = Template.bind({});
Grey.args = {
    color: 'grey',
};