import { Box, BoxProps, styled, useTheme } from '@mui/material';
import Image, { StaticImageData } from 'next/image';
import {MLAB_PALETTE} from "../../../styles/sendOwlTheme";

interface GradientInfo {
    width: number;
    height: number;
    text?: string;
    border: string;
}

const BoxGradient = styled(Box)<BoxProps>(({ theme }) => ({
    border: 'transparent',
    margin: '18px 15px 10px 0',
    backgroundImage: `linear-gradient(${MLAB_PALETTE.violet}, ${MLAB_PALETTE.green}, ${MLAB_PALETTE.blue}, ${MLAB_PALETTE.orange})`,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
}));

export default BoxGradient;
