import { Box, useTheme } from '@mui/material';
import Image, { StaticImageData } from 'next/image';

interface GradientInfo {
    width: number;
    height: number;
    text?: string;
    border: string;
}

const BoxGradient = ({ width, height, text, border }: GradientInfo) => {
    const theme = useTheme();

    return (
        <>
            <Box
                borderRadius={border}
                border='transparent'
                margin={'20px 20px 10px 0'}
                sx={{
                    backgroundImage:
                        'linear-gradient(#B488F8, #83D9A6, #3FC4EA, #FDBD5F)',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
                width={width}
                height={height}>
                <Box
                    sx={{
                        border: '1px solid lightgrey',
                        outline: '2px solid white',
                        backgroundColor: 'white',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                    borderRadius={border}
                    width={width - 10}
                    height={height - 10}
                    fontSize={'12px'}>
                    {text}
                </Box>
            </Box>
        </>
    );
};

export default BoxGradient;
