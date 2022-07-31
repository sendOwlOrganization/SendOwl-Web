import LoginLayout from '@molecules/LoginLayout';
import { Box, Button, Typography } from '@mui/material';
import LoginContainer from '@organisms/login/LoginContainer';
import { signOut, useSession } from 'next-auth/react';

interface LoginPageProps {
}


const LoginPage = ({}: LoginPageProps) => {
    const session = useSession();

    return (
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
    );
};

LoginPage.getLayout = LoginLayout;

export default LoginPage;