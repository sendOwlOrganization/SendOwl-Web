import {
    styled,
    Typography,
    useTheme,
    Stack,
    Divider,
    Grid,
    ButtonProps,
    Button,
} from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { Search } from '../search';

const Header = styled('header')`
    display: ${'flex'};
`;

const ColorBtn = styled(Button)<ButtonProps>(({ theme }) => ({
    color: theme.palette.getContrastText('#001064'),
    backgroundColor: '#001064',
    border: '1px solid #001064',
    fontWeight: 'bold',
    '&:hover': {
        backgroundColor: '#001064',
    },
}));

const OutlinedBtn = styled(Button)<ButtonProps>(({ theme }) => ({
    color: theme.palette.getContrastText('#efebe9'),
    backgroundColor: '#ffffff',
    border: '1px solid #bdb9b7',
    fontWeight: 'bold',
    '&:hover': {
        backgroundColor: '#ffffff',
        borderColor: '#efebe9',
    },
}));

const MainHeader = () => {
    const theme = useTheme();

    return (
        <div>
            <Header>
                <Typography
                    margin={`${theme.spacing(0)} 0`}
                    fontSize={'27px'}
                    display={'flex'}
                    style={{
                        color: '#040C4F',
                        fontWeight: 'bolder',
                        fontSize: 40,
                    }}
                >
                    <Image
                        src='/images/logo.png'
                        alt='logo'
                        width={140}
                        height={70}
                    />
                </Typography>

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
                    fontSize={'17px'}
                >
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

                <Grid
                    flex='1'
                    container
                    justifyContent={'flex-end'}
                    sx={{ alignItems: 'center' }}
                >
                    <Grid sx={{ display: { lg: 'none', xs: 'flex' } }}>
                        <Search />
                    </Grid>
                    <Stack direction='row' spacing={1}>
                        <Link href='/write'>
                            <a>
                                <ColorBtn style={{ borderRadius: 0 }}>
                                    글쓰기
                                </ColorBtn>
                            </a>
                        </Link>
                        <Link href='/login'>
                            <a>
                                <OutlinedBtn style={{ borderRadius: 0 }}>
                                    로그인
                                </OutlinedBtn>
                            </a>
                        </Link>
                    </Stack>
                </Grid>
            </Header>

            <Divider sx={{ display: { lg: 'none', xs: 'block' } }} />

            <Stack
                spacing={4}
                direction='row'
                sx={{ display: { lg: 'none', xs: 'flex', fontWeight: '500' } }}
                alignItems='center'
                padding={2}
            >
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

            <Divider />

            <Grid sx={{ display: { lg: 'block', xs: 'none' } }}>
                <Search />
            </Grid>
        </div>
    );
};

export default MainHeader;
