import LoginLayout from '@molecules/LoginLayout';
import { Box, Button, Typography } from '@mui/material';
import LoginContainer from '@organisms/login/LoginContainer';
import { GetServerSideProps } from 'next';
import { getToken } from 'next-auth/jwt';
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

export const getServerSideProps: GetServerSideProps<LoginPageProps> = async ({ req, res }) => {
    const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET })
    console.log(token)
    return {
        props: {}
    }
}

export default LoginPage;