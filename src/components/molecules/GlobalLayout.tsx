import { Grid } from '@mui/material';
import { PropsWithChildren } from 'react';
import Header from './Header';

interface GlobalLayoutProps {
}

const GlobalLayout = ({ children }: PropsWithChildren<GlobalLayoutProps>) => {
    return (
        <>
            <Grid>
                <Header />
                {children}
            </Grid>
        </>
    );
};

export default GlobalLayout;
