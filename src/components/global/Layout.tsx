import { Container } from '@mui/material';
import { PropsWithChildren } from 'react';
import Header from './Header';

interface GlobalLayoutProps {
}

const Layout = ({ children }: PropsWithChildren<GlobalLayoutProps>) => {
    return (
        <Container fixed>
            <Header />
            {children}
        </Container>
    );
};

export default Layout;
