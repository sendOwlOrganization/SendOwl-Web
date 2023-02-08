import CloseIcon from '@components/icons/CloseIcon';
import EmptyLayout from '@components/layout/EmptyLayout';
import SocialLoginButtons from '@components/login/SocialLoginButtons';
import Header from '@components/signup/Header';
import Welcome from '@components/welcome/Welcome';
import { styled } from '@mui/material';
import NextLink from 'next/link';

interface LoginPageProps {}

const Container = styled('div')`
    display: grid;
    min-height: calc(100vh - 2rem);
    align-items: center;
    justify-content: center;
    grid-template-rows: auto 1fr auto;
    grid-template-columns: 100%;
    margin: 1rem;
    background-color: ${({ theme }) =>
        theme.palette.mode === 'dark' ? theme.palette.common.black : theme.palette.common.white};
    border-radius: 16px;
`;

const LoginPage = ({}: LoginPageProps) => {
    return (
        <Container>
            <Header sx={{ padding: '1.5rem' }}>
                <NextLink href={'/'}>
                    <a>
                        <CloseIcon scale={0.75} color={'gray'} colorKey={200} disableHoverBackground clickable />
                    </a>
                </NextLink>
            </Header>
            <Welcome />
            <SocialLoginButtons />
        </Container>
    );
};

LoginPage.getLayout = EmptyLayout;

export default LoginPage;
