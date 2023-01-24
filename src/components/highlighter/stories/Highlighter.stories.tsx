import Highlighter from '@components/highlighter/Highlighter';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { highlight } from '@tools/string';

export default {
    title: 'components/highlighter/Highlighter',
    component: Highlighter,
} as ComponentMeta<typeof Highlighter>;

const Template: ComponentStory<typeof Highlighter> = (args) => <Highlighter {...args} />;

export const Example = Template.bind({});
Example.args = {
    highlights: highlight('ENTJ 특징', 'en'),
};
