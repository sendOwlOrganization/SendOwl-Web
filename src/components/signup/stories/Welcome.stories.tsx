import Welcome from '@components/signup/Welcome';
import { MBTI_LIST } from '@mocks/mbti';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
    title: 'components/signup/Welcome',
    component: Welcome,
    parameters: {
        layout: 'fullscreen',
    },
    argTypes: {
        mbti: {
            options: MBTI_LIST,
            control: {
                type: 'select',
            },
        },
    },
} as ComponentMeta<typeof Welcome>;

const Template: ComponentStory<typeof Welcome> = (args) => <Welcome {...args} />;

export const Example = Template.bind({});
Example.args = {
    nickname: '차분한 INFJ',
    mbti: 'INFJ',
};
