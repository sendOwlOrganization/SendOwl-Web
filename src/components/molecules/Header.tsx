import UserProfile from '@atoms/UserProfile';
import MainSearchBar from '@molecules/MainSearchBar';
import { Grid } from '@mui/material';
import Image from 'next/image';

interface Size {
    size: number;
}
const MainHeader = ({size}: Size) => {
    return (
        <>
            <Grid
                display={'flex'}
                height={size}
                justifyContent={'space-between'}
                alignItems={'center'}
                margin={'20px 20px 0 20px'}
                paddingBottom={'10px'}
            >
                <Grid
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                    alignItems={'baseline'}>
                    <Image
                        src='/images/logo.png'
                        alt='logo'
                        width={size-10}
                        height={size-10}
                    />
                </Grid>
                <UserProfile size={65} />
                <MainSearchBar sx={{display: { lg: 'block', xs: 'none'}}} width={783}/>
                <UserProfile size={size} textView={'none'}/>
            </Grid>
            <MainSearchBar sx={{display: { lg: 'none', xs: 'block'}}} width={355}/>
        </>
    );
};

export default MainHeader;
