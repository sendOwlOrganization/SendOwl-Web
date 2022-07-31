import LoginGoogleButton from '@components/molecules/LoginGoogleButton';
import { css, Stack, styled } from '@mui/material';

const StyledStack = styled(Stack)(({ theme }) => css`
  margin: ${theme.spacing(1)} 0;
`);

const SocialLoginButtons = () => {
    return (
        <StyledStack spacing={1}>
            <LoginGoogleButton />
        </StyledStack>
    );
};

export default SocialLoginButtons;