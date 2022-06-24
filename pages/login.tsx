import { Button, Typography } from '@mui/material';
import { signOut, useSession } from 'next-auth/react';
import LoginForm from '../src/components/login/LoginForm';
import SocialLoginButtons from '../src/components/login/SocialLoginButtons';

interface LoginPageProps {
}


const LoginPage = ({}: LoginPageProps) => {
    const session = useSession();

    return (
        <>
            <Typography component={'pre'}>{JSON.stringify(session, null, 2)}</Typography>
            <Button onClick={() => signOut()}>로그아웃</Button>
            <LoginForm />
            <SocialLoginButtons />
        </>
    );
};


export default LoginPage;