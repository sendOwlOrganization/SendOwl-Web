import FindIdPasswordLink from '@components/atoms/FindIdPasswordLink';
import LoginForm from '@components/molecules/LoginForm';
import SocialLoginButtons from '@components/molecules/SocialLoginButtons';
import { Divider, styled, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';

const StyledDivider = styled(Divider)`
  margin: 16px 0;
  color: ${grey[500]};
`;

const GreyTypography = styled(Typography)`
  color: ${grey[500]};
`;

const Container = styled('div')`
  max-width: 420px;
  margin: 0 auto;
  width: 100%;
`;

const LoginContainer = () => {
    return (
        <Container>
            <LoginForm />
            <FindIdPasswordLink />
            <StyledDivider>
                <GreyTypography variant={'subtitle2'}>
                    OR
                </GreyTypography>
            </StyledDivider>
            <SocialLoginButtons />
        </Container>
    );
};

export default LoginContainer;