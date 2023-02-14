import HintBalloon from '@components/hint/HintBalloon';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
    title: 'components/hint/HintBalloon',
    component: HintBalloon,
} as ComponentMeta<typeof HintBalloon>;

const Template: ComponentStory<typeof HintBalloon> = (args) => <HintBalloon {...args} />;

export const Default = Template.bind({});
Default.args = {
    label: '🎉 3초만에 시작하기',
    open: true,
    align: 'left',
    location: 'up',
};
