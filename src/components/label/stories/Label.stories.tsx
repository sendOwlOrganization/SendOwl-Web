import Label from '@components/label/Label';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
    title: 'components/label/Label',
    component: Label,
} as ComponentMeta<typeof Label>;

const Template: ComponentStory<typeof Label> = (args) => (
    <Label {...args} />
);

export const Default = Template.bind({});
Default.args = {
    color: 'default',
    variant: 'default',
    children: 'Default 라벨',
    onClick: undefined,
};

Default.parameters = {
    backgrounds: {
        default: 'white',
    },
};

export const DefaultFilled = Template.bind({});
DefaultFilled.args = {
    color: 'default',
    variant: 'filled',
    children: 'Filled 라벨',
    onClick: undefined,
};

export const Purple = Template.bind({});
Purple.args = {
    color: 'purple',
    variant: 'default',
    children: 'Purple Default 라벨',
    onClick: undefined,
};

export const PurpleFilled = Template.bind({});
PurpleFilled.args = {
    color: 'purple',
    variant: 'filled',
    children: 'Purple Filled 라벨',
    onClick: undefined,
};
