import LoginButton from '@components/login/LoginButton';
import { Typography, useTheme } from '@mui/material';

const NAVER_COLOR = '#06BE34';

const NaverLoginButton = () => {
    const theme = useTheme();
    return (
        <LoginButton backgroundColor={NAVER_COLOR} color={'#fff'}>
            <svg width={20} height={20} viewBox={'0 0 512 512'}>
                <path xmlns='http://www.w3.org/2000/svg'
                      fill={'#fff'}
                      d='M9 32V480H181.366V255.862L331.358 480H504V32H331.358V255.862L181.366 32H9Z' />
            </svg>
            <Typography variant={'subtitle3'} fontWeight={'bold'}>
                네이버로 로그인
            </Typography>
        </LoginButton>
    );
};

export default NaverLoginButton;