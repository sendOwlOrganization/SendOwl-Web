import { Box, css, Grid, styled } from '@mui/material';
import { PropsWithChildren } from 'react';


const StyledImg = styled('img')(({ theme }) => css`
  width: 100%;
  object-fit: scale-down;
  height: 100vh;
  pointer-events: none;

  ${theme.breakpoints.between('xs', 'md')} {
    height: 25vh;
  }
`);


const LoginLayout = ({ children }: PropsWithChildren<{}>) => {

    return (
        <Box padding={{ xs: 1, sm: 1 }}>
            <Box mt={1} mb={1}>
                <Grid container alignItems={'center'} justifyContent={'center'}>
                    <Grid item xs={12} sm={12} md={5}>
                        <StyledImg
                            src={'https://www.jobaba.net/file/image.do?filePath=6oDTW4G6buSBG55/UOZx1+BAa9iPvr9UELTjz5GYKvM8tgetS5cZHHLCcD2FcQAn'}
                            alt={'test'} />

                    </Grid>
                    <Grid xs={12} sm={12} md={7}>
                        {children}
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
};

export default LoginLayout;