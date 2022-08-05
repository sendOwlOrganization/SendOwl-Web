import {Grid, useTheme, styled, Box} from '@mui/material';
import { Search } from '../search';
import Image from 'next/image';
import UserProfile from '../../component/atoms/UserProfile';

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
                <Search sx={{display: { lg: 'block', xs: 'none'}}} size={783}/>
                <UserProfile size={size} textView={'none'}/>
            </Grid>
            <Search sx={{display: { lg: 'none', xs: 'block'}}} size={355}/>
        </>
    );
};

export default MainHeader;
