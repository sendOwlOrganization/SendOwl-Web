import BalanceGameWidgetPercent from '@components/widgets/balance-game-widget/BalanceGameWidgetPercent';
import { Stack, Typography } from '@mui/material';
import { PropsWithChildren } from 'react';

interface BalanceGameWidgetResultTextProps {
    selected: boolean;
    personCount: number;
    show: boolean;
    percent: number;
}

const BalanceGameWidgetResultText = (props: PropsWithChildren<BalanceGameWidgetResultTextProps>) => {
    const { selected, personCount, show, percent } = props;
    return (
        <Stack height={'2.125rem'}
               direction={'row'}
               alignItems={'center'}
               justifyContent={'space-between'}>
            {
                show && (
                    <>
                        <Typography variant={'body2'}>
                            {personCount.toLocaleString()}명
                        </Typography>
                        <BalanceGameWidgetPercent number={percent} focused={selected} />
                    </>
                )
            }
        </Stack>
    );
};

export default BalanceGameWidgetResultText;