import MbtiBanner from '@components/icons/AngleRightBigIcon';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import {MLAB_PALETTE} from "@styles/sendOwlTheme";
import Mbti from "@components/mbti-banner/Mbti";

export default {
    title: 'components/mbti-banner/Mbti',
    component: MbtiBanner,
} as ComponentMeta<typeof Mbti>;

const Template: ComponentStory<typeof Mbti> = (args) => (
    <Mbti {...args} />
);

export const mbti = Template.bind({});
mbti.args = {
    data: [
        {
            id: "ENTP",
            label: "ENTP",
            value: 760,
        },
        {
            id: "rest",
            label: "rest",
            value: 240,
        },
    ],
};