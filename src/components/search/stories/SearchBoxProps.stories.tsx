import SearchBox from '@components/search/SearchBox';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
    title: 'components/search/SearchBox',
    component: SearchBox,
    parameters: {
        backgrounds: {
            default: 'black',
        },
    },
} as ComponentMeta<typeof SearchBox>;

const Template: ComponentStory<typeof SearchBox> = (args) => <SearchBox {...args} />;

export const Example = Template.bind({});
Example.args = {
    recentlySearched: ['최근', '검색어', '아래', '토글로', '끌 수 있음'],
    recommendations: ['유저와 같은', 'MBTI가', '많이 검색', '검색어(키워드)', '추천'],
    populars: [
        '인기 검색어',
        '인기 검색어',
        '인기 검색어',
        '인기 검색어',
        '인기 검색어',
        '인기 검색어',
        '인기 검색어',
        '인기 검색어',
        '인기 검색어',
        '인기 검색어',
    ],
};
Example.parameters = {};
