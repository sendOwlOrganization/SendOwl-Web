import { Grid, useTheme } from '@mui/material';
import { Search } from '../search';
import HeaderMenu from './HeaderMenu';
import Image from 'next/image';
import SideBar from './Sidebar';

const MainHeader = () => {
    const theme = useTheme();

    return (
        <>
            <Grid
                sx={{ display: { lg: 'flex' }, backgroundColor: 'white' }}
                width={'1050px'}
                marginLeft={'200px'}
                position={'fixed'}>
                <HeaderMenu />
            </Grid>
        </>
    );
};

export default MainHeader;
