import BalanceGameWidgetChoice from '@components/widgets/balance-game-widget/BalanceGameWidgetChoice';
import { Card, Stack, styled } from '@mui/material';
import { useState } from 'react';
import BalanceGameWidgetTitle from './BalanceGameWidgetTitle';

interface Choice {
    id: number;
    text: string;
    voteCount: number;
}

interface BalanceGameWidgetProps {
    voteId: number;
    title: string;
    choices: [Choice, Choice];
}


const BalanceGameWidgetContent = styled(Stack)`
  padding: 1rem 1rem 0.75rem 1rem;
`;

// FIXME: change with API call later
const wait = (timeToDelay: number) => new Promise((resolve) => setTimeout(resolve, timeToDelay));

const fakeApiCall = async () => {
    await wait(100);
};


const BalanceGameWidget = ({ voteId, title, choices }: BalanceGameWidgetProps) => {
    const [focused, setFocused] = useState<number>(0);
    const [first, second] = choices;
    const firstVote = first.voteCount + (focused === 1 ? 1 : 0);
    const secondVote = second.voteCount + (focused === 2 ? 1 : 0);
    const totalVote = firstVote + secondVote;

    const onClick = (button: number) => async () => {
        try {
            await fakeApiCall();
            setFocused(button);
        } catch (e) {
        } finally {
        }
    };

    const [isFirst, isSecond, showResult] = [focused === 1, focused === 2, !!focused];

    return (
        <Card elevation={0}>
            <BalanceGameWidgetTitle title={title} />
            <BalanceGameWidgetContent direction={'row'} spacing={1}>
                <BalanceGameWidgetChoice selected={isFirst}
                                         showResult={showResult}
                                         onClick={onClick(1)}
                                         vote={firstVote}
                                         totalVote={totalVote}
                                         text={first.text} />
                <BalanceGameWidgetChoice selected={isSecond}
                                         showResult={showResult}
                                         onClick={onClick(2)}
                                         vote={secondVote}
                                         totalVote={totalVote}
                                         text={second.text} />
            </BalanceGameWidgetContent>
        </Card>
    );
};

export default BalanceGameWidget;