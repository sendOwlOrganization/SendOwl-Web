import { Typography } from '@components/mlab-ds';
import { MlabColorType } from '@styles/mlabTheme';
import useCountUp from '@tools/useCountUp';
import * as React from 'react';

interface PercentProps {
    value: number;
    total: number;
    color?: MlabColorType;
}

const Percent = ({ value, total, color = 'lightPink' }: PercentProps) => {
    const percent = useCountUp(Math.round((value / total) * 100), 0, 1500);
    return (
        <Typography variant={'header3'} color={(palette) => palette[color][600]}>
            {percent.toString().padStart(2, '0')}
            <Typography variant={'body2'} as={'span'} color={(palette) => palette.gray[600]}>
                %
            </Typography>
        </Typography>
    );
};

export default Percent;
