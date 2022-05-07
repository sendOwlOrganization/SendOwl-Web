import {
    styled,
    Typography,
    useTheme,
    Stack,
    Divider,
    Grid,
    Button,
    ButtonProps,
} from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { Search } from '../search';
import HeaderMenu from './HeaderMenu';
import LoginButton from '../login/LoginButton';

const Header = styled('header')`
    display: ${'flex'};
`;

// TODO: with create board component
const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
    color: theme.palette.getContrastText('#001064'),
    backgroundColor: '#001064',
    border: '1px solid #001064',
    fontWeight: 'bold',
    '&:hover': {
        backgroundColor: '#001064',
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
                    }}>
                    <Image
                        src='/images/logo.png'
                        alt='logo'
                        width={140}
                        height={70}
                    />
                </Typography>
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
                                <ColorButton style={{ borderRadius: 0 }}>
                                    글쓰기
                                </ColorButton>
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
            <Grid sx={{ display: { lg: 'block', xs: 'none' } }}>
                <Search />
            </Grid>
        </div>
    );
};

export default MainHeader;
