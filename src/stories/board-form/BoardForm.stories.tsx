import { ComponentMeta, ComponentStory } from '@storybook/react';
import { BoardForm } from '../../components/board-form';

export default {
    title: 'components/BoardForm/example',
    component: BoardForm,
} as ComponentMeta<typeof BoardForm>;

const Template: ComponentStory<typeof BoardForm> = (args) => (
    <BoardForm {...args} />
);

export const BoardFormExample = Template.bind({});
