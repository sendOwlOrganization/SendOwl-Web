import { ComponentMeta, ComponentStory } from '@storybook/react';
import BoardCategoryPostList from '../../component/molecules/BoardCategoryPostList';
import { boardsMock } from '../../mocks/boards';

export default {
    title: 'components/BoardCategoryList/BoardCategoryPostList',
    component: BoardCategoryPostList,

} as ComponentMeta<typeof BoardCategoryPostList>;

const Template: ComponentStory<typeof BoardCategoryPostList> = (args) => <BoardCategoryPostList {...args} />;


export const 게시글_리스트 = Template.bind({});
게시글_리스트.args = {
    boards: boardsMock,
};