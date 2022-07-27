import { Box, BoxProps, styled, useTheme } from '@mui/material';
import Image, { StaticImageData } from 'next/image';

interface GradientInfo {
    width: number;
    height: number;
    text?: string;
    border: string;
}

const BoxGradient = styled(Box)<BoxProps>(({ theme }) => ({
    border: 'transparent',
    margin: '20px 20px 10px 0',
    backgroundImage: 'linear-gradient(#B488F8, #83D9A6, #3FC4EA, #FDBD5F)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
}));

export default BoxGradient;
