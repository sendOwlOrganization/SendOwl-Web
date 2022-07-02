import { Grid, GridProps, Stack, styled, useTheme } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import OutlinedButton from '../../component/UI/atoms/OutlinedButton';

const ListItem = styled(Grid)<GridProps>(({ theme }) => ({
    color: theme.palette.text.primary,
    display: 'flex',
    padding: '10px',
    '&:hover': {
        backgroundColor: '#e1f5fe',
        borderLeft: '5px solid rgba(125,178,255,1)',
        color: 'black',
    },
}));

const SideBar = () => {
    const theme = useTheme();

    return (
        <>
            <Grid
                width={200}
                marginLeft={'25px'}
                position={'fixed'}
                marginTop={'15px'}>
                <Grid marginLeft={'10px'}>
                    <Link href={'/'}>
                        <a>
                            <Image
                                src='/images/logo.png'
                                alt='logo'
                                width={140}
                                height={70}
                            />
                        </a>
                    </Link>
                </Grid>

                <Stack direction='row' spacing={1}>
                    <Link href={'/login'}>
                        <a>
                            <OutlinedButton>로그인</OutlinedButton>
                        </a>
                    </Link>
                    <Link href={'/signup'}>
                        <a>
                            <OutlinedButton>회원가입</OutlinedButton>
                        </a>
                    </Link>
                </Stack>
                <br />
                <ListItem>
                    <Link href={'/total-board'}>
                        <a>
                            <span>전체글</span>
                        </a>
                    </Link>
                </ListItem>

                <ListItem>
                    <Link href={'/best-board'}>
                        <a>
                            <span>베스트글</span>
                        </a>
                    </Link>
                </ListItem>
                <br />
                <ListItem>
                    <Link href={'/mbti-info'}>
                        <a>
                            <span>mbti 정보</span>
                        </a>
                    </Link>
                </ListItem>
                <ListItem>
                    <Link href={'/mbti-test'}>
                        <a>
                            <span>mbti 테스트</span>
                        </a>
                    </Link>
                </ListItem>
                <ListItem>
                    <Link href={'/mbti-result'}>
                        <a>
                            <span>mbti 결과</span>
                        </a>
                    </Link>
                </ListItem>
                <br />
                <ListItem>
                    <Link href={'/mbti-result'}>
                        <a>
                            <span>mbti 게시판</span>
                        </a>
                    </Link>
                </ListItem>
            </Grid>
        </>
    );
};

export default SideBar;
