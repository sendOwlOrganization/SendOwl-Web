import { Box, Divider, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import LoginForm from './LoginForm';
import SocialLoginButtons from './SocialLoginButtons';

const LoginContainer = () => {
    return (
        <Box maxWidth={420}>
            <LoginForm />
            <Divider sx={{ margin: '16px 0' }} color={grey[500]}>
                <Typography variant={'subtitle2'} color={grey[500]}>
                    OR
                </Typography>
            </Divider>
            <SocialLoginButtons />
        </Box>
    );
};

export default LoginContainer;