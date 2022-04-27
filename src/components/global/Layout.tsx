import { Container } from '@mui/material';
import { ReactNode } from 'react';
import Header from './Header';
import { Main } from '../main';

interface GlobalLayoutProps {
    children: ReactNode;
}

const Layout = ({ children }: GlobalLayoutProps) => {
    return (
        <Container fixed>
            <Header />
            <Main />
        </Container>
    );
};

export default Layout;
