import Chip from '@components/chip/Chip';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
    title: 'components/chip/Chip',
    component: Chip,
    parameters: {
        backgrounds: {
            default: 'clear',
        },
    },
} as ComponentMeta<typeof Chip>;

const Template: ComponentStory<typeof Chip> = (args) => (
    <Chip {...args} />
);

export const Default = Template.bind({});
Default.args = {
    label: 'Default 칩',
    onClose: undefined,
};

export const WithClose = Template.bind({});
WithClose.args = {
    label: 'Close 버튼 칩',
    onClose: () => alert('x 클릭'),
};