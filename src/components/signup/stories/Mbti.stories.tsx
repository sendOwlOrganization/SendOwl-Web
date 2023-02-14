import Mbti from '@components/signup/Mbti';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { useState } from 'react';

export default {
    title: 'components/signup/Mbti',
    component: Mbti,
    parameters: {
        layout: 'fullscreen',
    },
} as ComponentMeta<typeof Mbti>;

const Template: ComponentStory<typeof Mbti> = (args) => {
    const [mbti, setMbti] = useState<string>('');
    return <Mbti {...args} mbti={mbti} setMbti={setMbti} />;
};

export const Example = Template.bind({});
Example.args = {};
