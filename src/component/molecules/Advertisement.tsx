import { Box, useTheme } from '@mui/material';
import Image from 'next/image';
import ad from '../../../public/images/ad.png';

const Advertisement = () => {
    const theme = useTheme();

    return (
        <>
            <Box
                sx={{
                    margin: '10px 0px 20px 0px',
                    border: `1px solid ${theme.palette.grey[200]}`,
                    width: 783,
                    height: 227,
                }}
                borderRadius={'50%'}>
                <Image src={ad} alt={'ad'} />
            </Box>
        </>
    );
};

export default Advertisement;
