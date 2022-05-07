import { Stack } from '@mui/material';
import Link from 'next/link';

const Menu = () => {
    return (
        <>
            <Stack
                spacing={4}
                direction='row'
                sx={{
                    display: { lg: 'flex', xs: 'none', fontWeight: '600' },
                }}
                justifyContent='center'
                alignItems='center'
                padding={1}
                marginLeft={'30px'}
                fontSize={'17px'}>
                <Link href='/home'>
                    <a>홈</a>
                </Link>
                <Link href='/review'>
                    <a>기업리뷰</a>
                </Link>
                <Link href='/community'>
                    <a>자유 게시판</a>
                </Link>
            </Stack>

            <Stack
                spacing={4}
                direction='row'
                sx={{ display: { lg: 'none', xs: 'flex', fontWeight: '500' } }}
                alignItems='center'
                padding={2}>
                <Link href='/home'>
                    <a>홈</a>
                </Link>
                <Link href='/review'>
                    <a>기업리뷰</a>
                </Link>
                <Link href='/community'>
                    <a>자유 게시판</a>
                </Link>
            </Stack>
        </>
    );
};

export default Menu;
