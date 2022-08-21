import SideCategoryList from '@components/navigations/SideCategoryList';
import { ComponentMeta, ComponentStory } from '@storybook/react';


export default {
    title: 'components/navigations/SideCategoryList',
    component: SideCategoryList,
} as ComponentMeta<typeof SideCategoryList>;

const Template: ComponentStory<typeof SideCategoryList> = (args) => (
    <div style={{ width: '288px' }}>
        <SideCategoryList {...args} />
    </div>
);

export const Example = Template.bind({});
Example.args = {
    all: 5934,
    mine: 321,
    saved: 965,
    mbti: 1932,
    vote: 2234,
    meme: 3190,
};