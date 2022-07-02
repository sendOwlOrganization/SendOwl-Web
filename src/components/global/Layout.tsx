import { Box, Grid } from '@mui/material';
import { PropsWithChildren } from 'react';
import Header from './Header';
import SideBar from './Sidebar';

interface GlobalLayoutProps {}

const Layout = ({ children }: PropsWithChildren<GlobalLayoutProps>) => {
    return (
        <>
            <Grid display={'flex'}>
                <SideBar />
                <Header />
            </Grid>

            <Grid marginLeft={'250px'} marginTop={'18px'} width={'1300px'}>
                <Grid display={'flex'}>
                    <Box
                        sx={{
                            width: 1000,
                            height: 200,
                            backgroundColor: 'primary.light',
                            textAlign: 'center',
                            marginTop: '100px',
                        }}
                        borderRadius={'20px'}>
                        <span>광고</span>
                    </Box>
                    <Box
                        sx={{
                            width: 270,
                            marginLeft: '1100px',
                            height: 500,
                            backgroundColor: 'primary.light',
                            textAlign: 'center',
                            marginTop: '100px',
                            display: 'flex-end',
                            position: 'fixed',
                        }}
                        borderRadius={'20px'}>
                        <span>실시간 차트</span>
                    </Box>
                </Grid>
                <Grid width={'1000px'}>{children}</Grid>
            </Grid>
        </>
    );
};

export default Layout;
