import { Grid, styled, GridProps, useTheme } from '@mui/material';
import { PropsWithChildren } from 'react';
import Header from './Header';

interface GlobalLayoutProps {}

const Layout = ({ children }: PropsWithChildren<GlobalLayoutProps>) => {
    return (
        <>
            <Grid>
                <Header />
                {children}
            </Grid>
        </>
    );
};

export default Layout;
