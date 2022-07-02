import { Box, Grid, GridProps, Stack, styled } from '@mui/material';
import Link from 'next/link';

const GNB = styled(Grid)<GridProps>(({ theme }) => ({
    color: theme.palette.text.primary,
    display: 'flex',
    padding: '10px',
    '&:hover': {
        color: theme.palette.primary.main,
        borderBottom: '3px solid rgba(125,178,255,1)',
    },
}));

const Menu = () => {
    return (
        <>
            <Stack
                spacing={10}
                direction='row'
                sx={{
                    display: { lg: 'flex', xs: 'none', fontWeight: '600' },
                }}
                justifyContent='center'
                alignItems='center'
                padding={1}
                marginLeft={'30px'}
                marginTop={'20px'}
                fontSize={'17px'}>
                <GNB>
                    <Link href='/total-board'>
                        <a>전체 게시판</a>
                    </Link>
                </GNB>
                <GNB>
                    <Link href='/board'>
                        <a>일반 게시판</a>
                    </Link>
                </GNB>
                <GNB>
                    <Link href='/mbti-board'>
                        <a>MBTI 게시판</a>
                    </Link>
                </GNB>
                <GNB>
                    <Link href='/faq'>
                        <a>FAQ</a>
                    </Link>
                </GNB>
            </Stack>

            <Stack
                spacing={4}
                direction='row'
                sx={{ display: { lg: 'none', xs: 'flex', fontWeight: '500' } }}
                alignItems='center'
                padding={3}>
                <Link href='/total-board'>
                    <a>전체 게시판</a>
                </Link>
                <Link href='/board'>
                    <a>일반 게시판</a>
                </Link>
                <Link href='/mbti-board'>
                    <a>MBTI 게시판</a>
                </Link>
                <Link href='/faq'>
                    <a>FAQ</a>
                </Link>
            </Stack>
        </>
    );
};

export default Menu;
