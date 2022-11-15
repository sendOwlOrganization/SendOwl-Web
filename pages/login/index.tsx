import EmptyLayout from '@components/layout/EmptyLayout';
import SocialLoginButtons from '@components/login/SocialLoginButtons';
import Welcome from '@components/welcome/Welcome';
import { styled } from '@mui/material';
import { useSession } from 'next-auth/react';

interface LoginPageProps {
}

const Container = styled('div')`
  display: grid;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
  grid-template-rows: 1fr auto;
  grid-template-columns: 100%;
`;

const LoginPage = ({}: LoginPageProps) => {
    const session = useSession();

    return (
        <Container>
            <Welcome />
            <SocialLoginButtons />
        </Container>
    );
};

LoginPage.getLayout = EmptyLayout;

export default LoginPage;