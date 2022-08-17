import { Typography } from '@mui/material';

interface PercentProps {
    number: number;
}

const Percent = ({ number }: PercentProps) => {
    return (
        <>
            <Typography variant={'subtitle3'}>
                {Math.round(number)}
                <Typography variant={'body2'} fontWeight={'bold'} component={'span'}>%</Typography>
            </Typography>
        </>
    );
};

export default Percent;