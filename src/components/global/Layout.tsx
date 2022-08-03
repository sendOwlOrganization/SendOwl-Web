import {Grid, styled, GridProps, useTheme, useMediaQuery} from '@mui/material';
import { PropsWithChildren } from 'react';
import Header from './Header';

interface GlobalLayoutProps {}

const Layout = ({ children }: PropsWithChildren<GlobalLayoutProps>) => {
    const isMobile = useMediaQuery("(max-width: 600px)");

    return (
        <>
            {isMobile ?
                <Grid>
                    <Header size={32}/>
                    {children}
                </Grid>
                :
                <Grid>
                    <Header size={65} />
                    {children}
                </Grid>
            }
        </>
    );
};

export default Layout;
