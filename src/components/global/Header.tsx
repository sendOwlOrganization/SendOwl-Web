import { Grid, useTheme, styled, Box } from '@mui/material';
import { Search } from '../search';
import Image from 'next/image';
import logo from '../../../public/images/logo.png';
import UserProfile from '../../component/atoms/UserProfile';

const MainHeader = () => {
    const theme = useTheme();

    return (
        <>
            <Grid
                display={'flex'}
                height={70}
                justifyContent={'space-between'}
                alignItems={'center'}
                marginTop={'30px'}>
                <Grid
                    sx={{
                        display: 'flex',
                        marginLeft: '60px',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                    alignItems={'baseline'}>
                    <Image src={logo} alt='logo' width={55} height={55} />
                </Grid>
                <Search />
                <UserProfile size={65} />
            </Grid>
        </>
    );
};

export default MainHeader;
