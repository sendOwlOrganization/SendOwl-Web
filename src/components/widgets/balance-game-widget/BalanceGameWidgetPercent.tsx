import { Typography } from '@mui/material';

interface PercentProps {
    number: number;
    focused: boolean;
}

const BalanceGameWidgetPercent = ({ number, focused }: PercentProps) => {
    return (
        <>
            <Typography variant={'subtitle3'} color={(theme) => (focused ? theme.palette.yellow[600] : 'inherit')}>
                {Math.round(number)}
                <Typography variant={'body2'} fontWeight={'bold'} component={'span'}>
                    %
                </Typography>
            </Typography>
        </>
    );
};

export default BalanceGameWidgetPercent;
