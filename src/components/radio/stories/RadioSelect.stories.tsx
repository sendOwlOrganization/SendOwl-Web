import RadioSelect from '@components/radio/RadioSelect';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { useState } from 'react';

export default {
    title: 'components/radio/RadioSelect',
    component: RadioSelect,
} as ComponentMeta<typeof RadioSelect>;

const Template: ComponentStory<typeof RadioSelect> = (args) => {
    const [value, setValue] = useState<{ id: number; content: string }>();
    return (
        <RadioSelect
            value={value}
            onChange={setValue}
            areEqual={(a, b) => a?.id === b?.id}
            items={[
                { id: 1, content: '10' },
                { id: 2, content: '20' },
                { id: 3, content: '30' },
                { id: 4, content: '40' },
            ]}
            render={(v) => (
                <div>
                    {v.id}, {v.content}
                </div>
            )}
        />
    );
};

export const Example = Template.bind({});
Example.args = {};
