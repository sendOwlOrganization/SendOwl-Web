import GoogleLoginButton from '@components/login/GoogleLoginButton';
import KakaoLoginButton from '@components/login/KakaoLoginButton';
import NaverLoginButton from '@components/login/NaverLoginButton';
import { Box, css, Grow, Stack, styled, Typography } from '@mui/material';
import { BottomSheet } from 'react-spring-bottom-sheet';

interface LoginBottomSheetProps {
    open: boolean;
    onClose: () => void;
}

const Container = styled('div')`
    padding: 2.5rem 1.25rem 1.25rem;
`;

const Tooltip = styled(Typography)(
    ({ theme }) => css`
        border-radius: 1rem;
        padding: 0.25rem 0.625rem;
        border-top-color: ${theme.palette.mode === 'dark' ? theme.palette.gray[900] : theme.palette.common.black};
        background-color: ${theme.palette.mode === 'dark' ? theme.palette.gray[900] : theme.palette.common.black};

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

const LoginBottomSheet = ({ open, onClose }: LoginBottomSheetProps) => {
    return (
        <BottomSheet
            open={open}
            onDismiss={onClose}
            header={
                <Typography align={'center'} variant={'subtitle2'} fontWeight={'bold'}>
                    👋 로그인 후 이용할 수 있어요
                </Typography>
            }
            footer={
                <Typography component={'p'} whiteSpace={'pre'} variant={'caption2'} align={'center'}>
                    {`로그인은 개인 정보 보호 정책 및 서비스 약관에 동의하는 것을 의미하며,\n서비스 이용을 위해 이메일과 이름, 전화번호를 수집합니다.`}
                </Typography>
            }>
            <Container>
                <Grow
                    in={open}
                    style={{
                        transitionDelay: '250ms',
                    }}
                    mountOnEnter
                    timeout={1000}
                    unmountOnExit>
                    <Box display={'flex'} justifyContent={'center'}>
                        <Tooltip variant={'body2'}>🎉 3초만에 시작하기</Tooltip>
                    </Box>
                </Grow>

                <Stack direction={'column'} spacing={1}>
                    <KakaoLoginButton />
                    <NaverLoginButton />
                    <GoogleLoginButton />
                </Stack>
            </Container>
        </BottomSheet>
    );
};

export default LoginBottomSheet;
