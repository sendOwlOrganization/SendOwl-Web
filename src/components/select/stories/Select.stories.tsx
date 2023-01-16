import Select from '@components/select/Select';
import { useArgs } from '@storybook/addons';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
    title: 'components/select/Select',
    component: Select,
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => {
    const [{ value }, updateArgs] = useArgs();
    return <Select {...args} value={value} onChange={(value) => updateArgs({ value })} />;
};

export const Example = (Template as any).bind({});
Example.args = {
    value: '전체 게시글',
    items: ['전체 게시글', '인기 게시글', 'MBTI', '투표', '밈/짤', '내가 쓴 게시물', '저장한 게시물'],
    getLabel: (v: string) => v,
    getKey: (v: string) => v,
};
