import { Typography } from '@mui/material';
import useCountUp from '@tools/useCountUp';

interface MemberRatioProps {
    count: number;
    total: number;
}

const MemberRatio = ({ count, total }: MemberRatioProps) => {
    const animatedCount = useCountUp(count, 0, 500);
    return (
        <Typography variant={'body2'} lineHeight={1.65} color={(theme) => theme.palette.gray[500]}>
            <Typography variant={'body2'} component={'span'} fontWeight={'bold'} color={'inherit'}>
                {animatedCount.toLocaleString()}
            </Typography>
            {` / ${total.toLocaleString()}`}
        </Typography>
    );
};

export default MemberRatio;
