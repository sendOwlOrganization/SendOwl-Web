import {Box, createStyles, makeStyles, Theme, useMediaQuery, useTheme} from '@mui/material';
import Image from 'next/image';
import ad from '../../../public/images/ad.png';

interface Display {
    width: number;
    height: number;
    margin?: string;
}

const Advertisement = ({width, height, margin}: Display) => {
    const theme = useTheme();

    return (
        <>
            <Box
                sx={{
                    margin: margin,
                    border: `1px solid ${theme.palette.grey[200]}`,
                    width: width,
                    height: height
                }}
                borderRadius={'50%'}>
                <Image src={ad} alt={'ad'} width={width} height={height}/>
            </Box>

        </>
    );
};

export default Advertisement;
