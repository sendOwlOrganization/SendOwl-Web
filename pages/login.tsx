import { Button, Typography } from '@mui/material';
import { BuiltInProviderType } from 'next-auth/providers';
import { ClientSafeProvider, getProviders, signOut, useSession } from 'next-auth/react';
import LoginGoogleButton from '../src/components/login/LoginGoogleButton';

interface LoginPageProps {
    providers: Record<BuiltInProviderType, ClientSafeProvider>;
}


const LoginPage = ({ providers }: LoginPageProps) => {
    const session = useSession();

    console.log(session);
    return (
        <>
            <Typography component={'pre'}>{JSON.stringify(session, null, 2)}</Typography>
            <Button onClick={() => signOut()}>로그아웃</Button>
            <LoginGoogleButton />
        </>
    );
};

export async function getServerSideProps() {
    return {
        props: {
            providers: await getProviders(),
        },
    };
}

export default LoginPage;