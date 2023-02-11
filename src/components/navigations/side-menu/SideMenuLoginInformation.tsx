import SettingIcon from '@components/icons/SettingIcon';
import { css, styled, Typography } from '@mui/material';
import NextLink from 'next/link';
import { useRecoilValue } from 'recoil';
import { sessionStore } from '../../../store/sessionStore';

const Container = styled('div')(
    ({ theme }) => css`
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 1.5rem;
        margin-bottom: 0.5rem;
    `
);

const UserInformation = styled('a')(({ theme }) => css``);

const SideMenuLoginInformation = () => {
    const session = useRecoilValue(sessionStore);
    return (
        <Container>
            {session.isAuthenticated ? (
                <NextLink href={'/profile'} passHref>
                    <UserInformation>
                        <Typography variant={'subtitle2'}>
                            <Typography
                                variant={'subtitle2'}
                                component={'span'}
                                color={(theme) => theme.palette.pink[600]}>
                                {session.user.mbti}
                            </Typography>
                            {` ${session.user.nickName}`}
                        </Typography>
                        <Typography component={'div'} variant={'caption2'} color={(theme) => theme.palette.gray[400]}>
                            {session.user.email}
                        </Typography>
                    </UserInformation>
                </NextLink>
            ) : (
                <NextLink href={'/login'} passHref>
                    <UserInformation>
                        <Typography variant={'subtitle2'}>로그인</Typography>
                        <Typography component={'div'} variant={'caption2'} color={(theme) => theme.palette.gray[400]}>
                            {'소셜 로그인으로 3초만에 가입하기'}
                        </Typography>
                    </UserInformation>
                </NextLink>
            )}
            <SettingIcon clickable disableHoverBackground />
        </Container>
    );
};

export default SideMenuLoginInformation;
