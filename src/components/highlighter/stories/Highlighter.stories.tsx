import Highlighter from '@components/highlighter/Highlighter';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
    title: 'components/highlighter/Highlighter',
    component: Highlighter,
} as ComponentMeta<typeof Highlighter>;

const Template: ComponentStory<typeof Highlighter> = (args) => (
    <Highlighter {...args} />
);

export const Example = Template.bind({});
Example.args = {
    text: 'ENTJ 특징',
    query: 'en',
};