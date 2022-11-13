import MlabLogo from '@components/logo/MlabLogo';
import { styled, Typography } from '@mui/material';

const Container = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const MovingText = styled('span')`
  font-size: 42px;
  animation: hello 1000ms ease infinite;

  @keyframes hello {
    0% {
      transform: rotate(-10deg) translateX(-5px);
    }
    50% {
      transform: rotate(20deg) translateY(-5px);
    }
    100% {
      transform: rotate(-10deg) translateX(-5px);
    }
  }
`;

interface WelcomeProps {
}

const Welcome = (props: WelcomeProps) => {
    return (
        <Container>
            <MovingText>👋</MovingText>
            <Typography variant={'subtitle2'}
                        fontWeight={'bold'}
                        lineHeight={1}>
                반가워요!
            </Typography>
            <MlabLogo />
            <Typography variant={'subtitle3'} fontWeight={'bold'}
                        color={theme => theme.palette.mode === 'dark'
                            ? theme.palette.gray[700]
                            : theme.palette.gray[600]}
                        lineHeight={1}>
                우리가 아는 MBTI의 모든 것
            </Typography>
        </Container>
    );
};

export default Welcome;