import { Grid } from '@mui/material';
import { PropsWithChildren } from 'react';
import Header from '../../components/global/Header';

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
