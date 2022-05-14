import { Container } from '@mui/material';
import { PropsWithChildren } from 'react';
import Header from './Header';

interface GlobalLayoutProps {
}

const Layout = ({ children }: PropsWithChildren<GlobalLayoutProps>) => {
    return (
        <Container sx={{ minWidth: '400px' }} fixed>
            <Header />
            {children}
        </Container>
    );
};

export default Layout;
