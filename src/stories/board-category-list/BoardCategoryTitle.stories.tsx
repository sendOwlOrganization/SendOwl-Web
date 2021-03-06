import BoardCategoryTitle from '@molecules/BoardCategoryTitle';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
    title: 'components/BoardCategoryList/BoardCategoryTitle',
    component: BoardCategoryTitle,
    argTypes: {
        title: {
            description: '카테고리 타이틀 입니다',
        },
    },
} as ComponentMeta<typeof BoardCategoryTitle>;

const Template: ComponentStory<typeof BoardCategoryTitle> = (args) => <BoardCategoryTitle {...args} />;

export const 카테고리_타이틀 = Template.bind({});
카테고리_타이틀.args = {
    title: '토픽 베스트',
};