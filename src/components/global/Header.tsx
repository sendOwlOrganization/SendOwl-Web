import { Button, ButtonProps, Divider, Grid, Stack, styled, Typography, useTheme } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import LoginButton from '../login/LoginButton';
import { Search } from '../search';
import HeaderMenu from './HeaderMenu';

const Header = styled('header')`
  display: ${'flex'};
`;

// TODO: with create board component
const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.primary.main,
    border: '1px solid #001064',
    fontWeight: 'bold',
    '&:hover': {
        backgroundColor: theme.palette.primary.main,
    },
}));

const MainHeader = () => {
    const theme = useTheme();

    return (
        <>
            <Header>
                <Link href={'/'}>
                    <a>
                        <Typography
                            margin={`${theme.spacing(0)} 0`}
                            fontSize={'27px'}
                            display={'flex'}
                            style={{
                                color: '#040C4F',
                                fontWeight: 'bolder',
                                fontSize: 40,
                            }}>
                            <Image
                                src='/images/logo.png'
                                alt='logo'
                                width={140}
                                height={70}
                            />
                        </Typography>
                    </a>
                </Link>
                <Grid
                    sx={{
                        display: { lg: 'flex', xs: 'none' },
                    }}>
                    <HeaderMenu />
                </Grid>
                <Grid
                    flex='1'
                    container
                    justifyContent={'flex-end'}
                    sx={{ alignItems: 'center' }}>
                    <Grid sx={{ display: { lg: 'none', xs: 'flex' } }}>
                        <Search />
                    </Grid>
                    <Stack direction='row' spacing={1}>
                        {/* TODO: feat create board component */}
                        <Link href='/write'>
                            <a>
                                <Button variant={'contained'} disableElevation>
                                    글쓰기
                                </Button>
                            </a>
                        </Link>
                        <LoginButton />
                    </Stack>
                </Grid>
            </Header>
            <Divider sx={{ display: { lg: 'none', xs: 'block' } }} />
            <Grid sx={{ display: { lg: 'none', xs: 'flex' } }}>
                <HeaderMenu />
            </Grid>
            <Divider />
        </>
    );
};

export default MainHeader;
