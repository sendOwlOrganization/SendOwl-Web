import PopularKeywordWidget from '@components/widgets/popular-keyword-widget';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
    title: 'components/widgets/PopularKeywordWidget',
    component: PopularKeywordWidget,
} as ComponentMeta<typeof PopularKeywordWidget>;

const Template: ComponentStory<typeof PopularKeywordWidget> = (args) => (
    <div style={{ maxWidth: '18rem' }}>
        <PopularKeywordWidget {...args} />
    </div>
);


export const Example = Template.bind({});
Example.args = {
    keywords: [
        '인기',
        '검색어',
        'MBTI',
        '밸런스 게임',
        '커뮤니티',
        '포켓몬',
        '테스트',
        '엠랩',
        '검사',
        '결과',
    ],
};