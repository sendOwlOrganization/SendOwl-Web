import { Button, Typography } from '@mui/material';
import { signOut, useSession } from 'next-auth/react';
import LoginContainer from '../src/components/login/LoginContainer';

interface LoginPageProps {
}


const LoginPage = ({}: LoginPageProps) => {
    const session = useSession();

    return (
        <>
            <Typography component={'pre'}>{JSON.stringify(session, null, 2)}</Typography>
            <Button onClick={() => signOut()}>로그아웃</Button>
            <LoginContainer />
        </>
    );
};


export default LoginPage;