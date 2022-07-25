import { Button, ButtonProps, styled } from '@mui/material';
import Link from 'next/link';

const OutlinedButton = styled(Button)<ButtonProps>(({ theme }) => ({
    color: theme.palette.text.primary,
    backgroundColor: theme.palette.background.default,
    border: `1px solid ${theme.palette.grey[700]}`,
    fontWeight: 'bold',
    '&:hover': {
        backgroundColor: theme.palette.background.default,
        borderColor: theme.palette.grey[500],
    },
}));

interface LoginButtonProps {
}

const LoginButton = ({}: LoginButtonProps) => {
    return (
        <>
            <Link href='/login'>
                <a>
                    <OutlinedButton>로그인</OutlinedButton>
                </a>
            </Link>
        </>
    );
};

export default LoginButton;