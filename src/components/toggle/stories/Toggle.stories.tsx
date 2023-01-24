import Toggle from '@components/toggle/Toggle';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { MlabColorType } from '@styles/mlabTheme';
import { useState } from 'react';

export default {
    title: 'components/toggle/Toggle',
    component: Toggle,
} as ComponentMeta<typeof Toggle>;

const Controlled = ({ color }: { color?: MlabColorType }) => {
    const [on, setOn] = useState<boolean>(true);
    return <Toggle on={on} color={color} onClick={() => setOn((on) => !on)} />;
};

const Template: ComponentStory<typeof Toggle> = (args) => <Toggle {...args} />;

const ControlledTemplate: ComponentStory<typeof Toggle> = (args) => <Controlled {...args} />;

export const Example = Template.bind({});
Example.args = {
    on: true,
};

export const ControlledExample = ControlledTemplate.bind({});
ControlledExample.args = {
    color: 'blue',
};
