import { ComponentMeta, ComponentStory } from '@storybook/react';
import BoardFooter from '../../components/board/BoardFooter';

export default {
    title: 'components/Board/sub-components',
    component: BoardFooter,
} as ComponentMeta<typeof BoardFooter>;

const Template: ComponentStory<typeof BoardFooter> = (args) => <BoardFooter {...args}/>;

export const Footer = Template.bind({});
Footer.args = {
    like: 42,
};