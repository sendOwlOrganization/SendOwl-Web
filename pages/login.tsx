import { Box, Button, css, Grid, styled, Typography } from '@mui/material';
import { signOut, useSession } from 'next-auth/react';
import { PropsWithChildren } from 'react';
import LoginContainer from '../src/components/login/LoginContainer';

interface LoginPageProps {
}

const StyledImg = styled('img')(({ theme }) => css`
  width: 100%;
  object-fit: scale-down;
  height: 100vh;
  pointer-events: none;

  ${theme.breakpoints.between('xs', 'md')} {
    height: 25vh;
  }
`);


const LoginPage = ({}: LoginPageProps) => {
    const session = useSession();

    return (
        <Box mt={1} mb={1}>
            <Grid container alignItems={'center'} justifyContent={'center'}>
                <Grid item xs={12} sm={12} md={5}>
                    <StyledImg
                        src={'https://www.jobaba.net/file/image.do?filePath=6oDTW4G6buSBG55/UOZx1+BAa9iPvr9UELTjz5GYKvM8tgetS5cZHHLCcD2FcQAn'}
                        alt={'test'} />

                </Grid>
                <Grid xs={12} sm={12} md={7}>

                    <Box display={'flex'} flexDirection={'column'} justifyContent={'center'}>
                        {
                            session.data?.user
                                ? (
                                    <>
                                        <Typography component={'pre'}>
                                            {JSON.stringify(session, null, 2)}
                                        </Typography>
                                        <Button onClick={() => signOut()}>로그아웃</Button>
                                    </>
                                )
                                : <LoginContainer />
                        }
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

LoginPage.getLayout = ({ children }: PropsWithChildren<{}>) => {
    return (
        <Box padding={{ xs: 1, sm: 1 }}>
            {children}
        </Box>
    );
};

export default LoginPage;