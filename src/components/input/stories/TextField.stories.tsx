import TextField from '@components/input/TextField';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { useState } from 'react';

export default {
    title: 'components/input/TextField',
    component: TextField,
    parameters: {
        backgrounds: {
            default: 'gray100',
        },
    },
} as ComponentMeta<typeof TextField>;

const Template: ComponentStory<typeof TextField> = (args) => {
    const { defaultValue, ...rest } = args;
    const [value, setValue] = useState<string>(defaultValue?.toString() || '');
    return <TextField {...rest} value={value} onChange={e => setValue(e.target.value)} onClear={() => setValue('')} />;
};

export const Example = Template.bind({});
Example.args = {
    label: 'Coordinatae',
    disabled: false,
    defaultValue: 'Elevatuss accelerare in lotus cella!',
    helperText: 'Racanas sunt tuss de talis frondator.',
    required: true,
};