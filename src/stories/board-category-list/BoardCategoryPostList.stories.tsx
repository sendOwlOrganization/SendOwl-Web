import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ComponentProps } from 'react';
import BoardCategoryPostList from '../../components/board-category-list/BoardCategoryPostList';

export default {
    title: 'components/BoardCategoryList/BoardCategoryPostList',
    component: BoardCategoryPostList,

} as ComponentMeta<typeof BoardCategoryPostList>;

const Template: ComponentStory<typeof BoardCategoryPostList> = (args) => <BoardCategoryPostList {...args} />;

function createData(
    category: string,
    name: string,
    like: number,
    comment: number,
): ComponentProps<typeof BoardCategoryPostList>['boards'][number] {
    return {
        id: Math.ceil(Math.random() * 100000),
        category,
        title: name,
        likeCount: like,
        commentCount: comment,
    };
}

// TODO: delete
const rows = [
    createData('이직.커리어', '경찰준비중입니다..', 10, 2),
    createData('잡담', '블랙기업', 8, 2),
    createData('이직.커리어', '중소기업 어디다니세요', 3000, 1000),
    createData('이직.커리어', '고민입니다', 1, 3),
    createData('이직.커리어', '개발자', 4, 6),
];

export const 게시글_리스트 = Template.bind({});
게시글_리스트.args = {
    boards: rows,
};