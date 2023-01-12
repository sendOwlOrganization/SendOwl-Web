import Age from '@components/signup/Age';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { useState } from 'react';

export default {
    title: 'components/signup/Age',
    component: Age,
    parameters: {
        layout: 'fullscreen',
    },
} as ComponentMeta<typeof Age>;

const Template: ComponentStory<typeof Age> = (args) => {
    const [age, setAge] = useState<number>(10);
    return <Age {...args} age={age} setAge={setAge} />;
};

export const Example = Template.bind({});
Example.args = {};