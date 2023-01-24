import KakaoTalkIcon from '@components/icons/KakaoTalkIcon';
import LoginButton from '@components/login/LoginButton';
import { Typography, useTheme } from '@mui/material';

const KAKAO_YELLOW = '#FAE64D';

const KakaoLoginButton = () => {
    const theme = useTheme();
    return (
        <LoginButton backgroundColor={KAKAO_YELLOW} color={theme.palette.gray[1000]}>
            <KakaoTalkIcon color={'black'} />
            <Typography variant={'subtitle3'} fontWeight={'bold'}>
                카카오로 로그인
            </Typography>
        </LoginButton>
    );
};

export default KakaoLoginButton;
