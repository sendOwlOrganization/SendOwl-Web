import GoogleLoginButton from '@components/login/GoogleLoginButton';
import { Box, css, Grow, Stack, styled, Typography } from '@mui/material';
import NextLink from 'next/link';

const Tooltip = styled(Typography)(
    ({ theme }) => css`
        border-radius: 1rem;
        padding: 0.25rem 0.625rem;
        border-top-color: ${theme.palette.lightPink[600]};
        background-color: ${theme.palette.lightPink[600]};

        color: ${theme.palette.gray[100]};
        margin-bottom: 1rem;
        position: relative;

        &:after {
            content: '';
            position: absolute;
            top: 95%;
            left: 56px;
            text-align: center;
            border-top: 10px solid black;
            border-top-color: inherit;
            border-left: 10px solid transparent;
            border-right: 10px solid transparent;
        }
    `
);

const Container = styled('section')`
    margin: 0.75rem 1rem;
`;

const Anchor = styled('a')`
    text-decoration: underline;
`;

interface SocialLoginButtonsProps {}

const SocialLoginButtons = (props: SocialLoginButtonsProps) => {
    return (
        <Container>
            <Grow
                in
                style={{
                    transitionDelay: '250ms',
                    marginBottom: '4px',
                }}
                mountOnEnter
                timeout={1000}
                unmountOnExit>
                <Box display={'flex'} justifyContent={'center'}>
                    <Tooltip variant={'caption1'} fontWeight={'bold'}>
                        🎉 3초만에 시작하기
                    </Tooltip>
                </Box>
            </Grow>

            <Stack direction={'column'} spacing={1}>
                <GoogleLoginButton />
            </Stack>

            <Typography
                variant={'caption2'}
                component={'div'}
                align={'center'}
                sx={{
                    margin: '0.75rem',
                }}
                color={(theme) => (theme.palette.mode === 'dark' ? theme.palette.gray[700] : theme.palette.gray[400])}>
                {'로그인은 '}
                <NextLink href={'#fixme'} passHref legacyBehavior>
                    <Anchor>개인 정보 보호 정책</Anchor>
                </NextLink>
                {' 및 '}
                <NextLink href={'#fixme'} passHref legacyBehavior>
                    <Anchor>서비스 약관</Anchor>
                </NextLink>
                에 동의하는 것을 의미하며,
                <br />
                서비스 이용을 위해 이메일과 이름, 전화번호를 수집합니다.
            </Typography>
        </Container>
    );
};

export default SocialLoginButtons;
