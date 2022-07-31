import { ComponentMeta, ComponentStory } from '@storybook/react';
import BoardHeader from '../../component/molecules/BoardHeader';

export default {
    title: 'components/Board/sub-components',
    component: BoardHeader,
} as ComponentMeta<typeof BoardHeader>;

const Template: ComponentStory<typeof BoardHeader> = (args) => <BoardHeader {...args} />;

export const Header = Template.bind({});
Header.args = {
    title: '제목 입니다',
    date: '2022-04-22',
    author: '부엉이',
    pageView: 4591,
    commentCount: 201,
};