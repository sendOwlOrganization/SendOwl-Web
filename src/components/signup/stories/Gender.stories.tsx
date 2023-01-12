import Gender from '@components/signup/Gender';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { useState } from 'react';

export default {
    title: 'components/signup/Gender',
    component: Gender,
    parameters: {
        layout: 'fullscreen',
    },
} as ComponentMeta<typeof Gender>;

const Template: ComponentStory<typeof Gender> = (args) => {
    const [gender, setGender] = useState<string>('');
    return <Gender {...args} gender={gender} setGender={setGender} />;
};

export const Example = Template.bind({});
Example.args = {};
