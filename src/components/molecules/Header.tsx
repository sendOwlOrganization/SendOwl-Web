import UserProfile from '@atoms/UserProfile';
import MainSearchBar from '@molecules/MainSearchBar';
import { Grid } from '@mui/material';
import Image from 'next/image';

const MainHeader = () => {
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
                    <Image
                        src='/images/logo.png'
                        alt='logo'
                        width={55}
                        height={55}
                    />
                </Grid>
                <MainSearchBar />
                <UserProfile size={65} />
            </Grid>
        </>
    );
};

export default MainHeader;
