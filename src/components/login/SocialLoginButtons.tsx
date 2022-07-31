import { Stack } from '@mui/material';
import LoginGoogleButton from './LoginGoogleButton';

const SocialLoginButtons = () => {
    return (
        <Stack sx={theme => ({ margin: `${theme.spacing(1)} 0` })} spacing={1}>
            <LoginGoogleButton />
        </Stack>
    );
};

export default SocialLoginButtons;