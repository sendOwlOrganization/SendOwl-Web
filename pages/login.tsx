import { BuiltInProviderType } from 'next-auth/providers';
import { ClientSafeProvider, getProviders } from 'next-auth/react';
import LoginGoogleButton from '../src/components/login/LoginGoogleButton';

interface LoginPageProps {
    providers: Record<BuiltInProviderType, ClientSafeProvider>;
}


const LoginPage = ({ providers }: LoginPageProps) => {
    return (
        <>
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