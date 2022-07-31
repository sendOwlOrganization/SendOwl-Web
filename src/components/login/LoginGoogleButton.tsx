import { Google } from '@mui/icons-material';
import { Button } from '@mui/material';
import { signIn } from 'next-auth/react';

const LoginGoogleButton = () => {
    return (
        <>
            <Button startIcon={<Google />}
                    variant={'outlined'}
                    onClick={() => signIn('google')}>
                google 로그인
            </Button>
        </>
    );
};

export default LoginGoogleButton;