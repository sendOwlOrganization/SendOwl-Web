import { Box, Grid, useTheme } from '@mui/material';
import Image from 'next/image';

const Mbti = () => {
    const theme = useTheme();

    return (
        <>
            <Box
                position={'fixed'}
                width={180}
                height={300}
                margin={'40px 0px 20px 800px'}
                sx={{
                    borderRadius: '20px',
                    border: `1px solid ${theme.palette.grey[200]}`,
                }}
                textAlign={'center'}>
                <Grid
                    display={'flex'}
                    justifyContent={'center'}
                    alignItems={'center'}
                    marginTop={5}>
                    <Image
                        alt='main-graph'
                        src='/images/mainGraph.png'
                        width={'150'}
                        height={'150'}
                    />
                </Grid>
                <Grid marginTop={5}>MBTI 순위</Grid>
            </Box>
            <Box
                position={'fixed'}
                width={180}
                height={300}
                margin={'370px 0px 0px 800px'}
                sx={{
                    borderRadius: '20px',
                    border: `1px solid ${theme.palette.grey[200]}`,
                }}
                textAlign={'center'}>
                <Grid
                    display={'flex'}
                    justifyContent={'center'}
                    alignItems={'center'}
                    marginTop={5}>
                    <Image
                        alt='main-graph2'
                        src='/images/mainGraph2.png'
                        width={'150'}
                        height={'150'}
                    />
                </Grid>
                <Grid marginTop={5}>단어별 인기 순위</Grid>
            </Box>
        </>
    );
};

export default Mbti;
