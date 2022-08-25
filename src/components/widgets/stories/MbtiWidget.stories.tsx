import MbtiWidget from '@components/widgets/mbti-widget';
import { MBTI_LIST } from '@mocks/mbti';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
    title: 'components/widgets/MbtiWidget',
    component: MbtiWidget,
} as ComponentMeta<typeof MbtiWidget>;

const Template: ComponentStory<typeof MbtiWidget> = (args) => (
    <div style={{ maxWidth: '18rem' }}>
        <MbtiWidget {...args} />
    </div>
);

const dataMock = [
    2393, 1323, 13306, 2946,
    2933, 5069, 2095, 986,
    8430, 1204, 965, 5022,
    6012, 1920, 3032, 4020,
];
const mbtiMock = MBTI_LIST.map((mbti, i) => ({
    id: mbti,
    label: mbti,
    value: dataMock[i],
}));

export const Example = Template.bind({});
Example.args = {
    data: mbtiMock,
    user: {
        mbti: 'ENTJ-A',
    },
};