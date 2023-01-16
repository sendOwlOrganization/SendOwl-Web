import BalanceGameWidget from '@components/widgets/balance-game-widget';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
    title: 'components/widgets/BalanceGame',
    component: BalanceGameWidget,
} as ComponentMeta<typeof BalanceGameWidget>;

const Template: ComponentStory<typeof BalanceGameWidget> = (args) => (
    <div style={{ maxWidth: '18rem' }}>
        <BalanceGameWidget {...args} />
    </div>
);

export const 이번주_밸런스_게임 = Template.bind({});
이번주_밸런스_게임.args = {
    voteId: 1,
    title: '이번주 밸런스 게임',
    choices: [
        {
            id: 1,
            text: '일 잘하는데\n성격이 나쁜사람',
            voteCount: 5000,
        },
        {
            id: 2,
            text: '일 못하는데\n성격이 좋은사람',
            voteCount: 6000,
        },
    ],
};

export const 밸런스_게임_질문 = Template.bind({});
밸런스_게임_질문.args = {
    voteId: 1,
    title: '밸런스게임 질문?',
    choices: [
        {
            id: 1,
            text: '일 잘하는데\n성격이 나쁜사람',
            voteCount: 5000,
        },
        {
            id: 2,
            text: '일 못하는데\n성격이 좋은사람',
            voteCount: 6000,
        },
    ],
};
