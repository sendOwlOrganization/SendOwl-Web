import { css, styled } from '@mui/material';
import BalanceGameWidgetCheckIcon from './BalanceGameWidgetCheckIcon';
import BalanceGameWidgetChoiceText from './BalanceGameWidgetChoiceText';
import BalanceGameWidgetResultText from './BalanceGameWidgetResultText';

const SelectButton = styled('button', {
    shouldForwardProp: (name) => name !== 'focused',
})<{ focused: boolean }>(
    ({ theme, focused }) => css`
        background-color: ${focused ? theme.palette.purple[600] : theme.palette.gray[200]};
        color: ${focused ? theme.palette.common.white : theme.palette.gray[900]};
        font-weight: bold;
        width: 100%;
        height: 9.5rem;
        padding: 1rem;
        border-radius: 16px;
        border: none;
        transition: all 100ms ${theme.transitions.easing.easeInOut};

        :hover {
            background-color: ${focused ? theme.palette.purple[700] : theme.palette.gray[300]};
            cursor: pointer;
        }

        :active {
            background-color: ${focused ? theme.palette.purple[800] : theme.palette.gray[400]};
        }
    `
);

interface BalanceGameWidgetChoiceProps {
    selected: boolean;
    showResult: boolean;
    onClick: () => void;
    vote: number;
    totalVote: number;
    text: string;
}

const BalanceGameWidgetChoice = (props: BalanceGameWidgetChoiceProps) => {
    const { showResult, selected, onClick, vote, totalVote, text } = props;
    return (
        <SelectButton focused={selected} onClick={onClick}>
            <BalanceGameWidgetCheckIcon appear={selected} />
            <BalanceGameWidgetChoiceText>{text}</BalanceGameWidgetChoiceText>
            <BalanceGameWidgetResultText
                selected={selected}
                personCount={vote}
                show={showResult}
                percent={(vote / totalVote) * 100}
            />
        </SelectButton>
    );
};

export default BalanceGameWidgetChoice;
