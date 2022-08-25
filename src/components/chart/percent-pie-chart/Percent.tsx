import { Typography } from '@mui/material';
import { MlabColorType } from '@styles/mlabTheme';
import useCountUp from '@tools/useCountUp';
import * as React from 'react';

interface PercentProps {
    value: number;
    total: number;
    color?: MlabColorType;
}

const Percent = ({ value, total, color = 'lightPink' }: PercentProps) => {
    const percent = useCountUp(Math.round(value / total * 100), 0, 1500);
    return (
        <Typography variant={'h3'} display={'inline-flex'}
                    alignItems={'end'}
                    fontWeight={'bold'}
                    color={theme => theme.palette[color][600]}>
            {percent.toString().padStart(2, '0')}
            <Typography variant={'body2'} component={'span'}
                        color={theme => theme.palette.gray[600]}
                        lineHeight={1.65}>
                %
            </Typography>
        </Typography>
    );
};

export default Percent;