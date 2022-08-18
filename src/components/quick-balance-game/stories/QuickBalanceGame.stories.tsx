import QuickBalanceGame from '@components/quick-balance-game/QuickBalanceGame';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
    title: 'components/quick-balance-game/example',
    component: QuickBalanceGame,
} as ComponentMeta<typeof QuickBalanceGame>;

const Template: ComponentStory<typeof QuickBalanceGame> = (args) => (
    <div style={{ maxWidth: '18rem' }}>
        <QuickBalanceGame {...args} />
    </div>
);

export const Example = Template.bind({});
Example.args = {
    voteId: 1,
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