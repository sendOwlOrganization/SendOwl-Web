import MlabLogo from '@components/logo/MlabLogo';
import { Player } from '@lottiefiles/react-lottie-player';
import { Box, css, styled, Typography } from '@mui/material';
import { useRef } from 'react';

interface WelcomeProps {
    nickname: string;
    mbti: string;
}

const confettiLottie = 'https://assets3.lottiefiles.com/packages/lf20_lmggs7gq.json';
const SQUARE_SIZE = '320px';

const Header = styled('header')(({ theme }) => ({
    height: '4.375rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const MbtiImage = styled('img')(({ theme }) => css`
  animation: hello 1000ms ease-in-out infinite, grow 500ms ease;

  @keyframes grow {
    0% {
      transform: scale(0);
      opacity: 0;
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }

  @keyframes hello {
    0% {
      transform: rotate(-10deg);
    }
    50% {
      transform: rotate(10deg);
    }
    100% {
      transform: rotate(-10deg);
    }
  }
`);

const Welcome = ({ nickname, mbti = '' }: WelcomeProps) => {
    const lottieRef = useRef<Player>(null);
    return (
        <section>
            <Header>
                <MlabLogo width={66} />
            </Header>
            <Box sx={{
                height: 'calc(100vh - 200px)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                <Box sx={{
                    maxWidth: SQUARE_SIZE,
                    width: '100%',
                    paddingTop: `min(${SQUARE_SIZE}, 100%)`,
                    position: 'relative',
                }}>
                    <Player autoplay
                            keepLastFrame
                            loop
                            speed={1}
                            ref={lottieRef}
                            src={confettiLottie}
                            style={{
                                position: 'absolute',
                                bottom: 0,
                                left: '50%',
                                width: '100%',
                                height: '100%',
                                transform: 'translate(-50%)',
                            }} />
                    {mbti && (
                        <Box sx={{
                            position: 'absolute',
                            bottom: '30px',
                            left: '50%',
                            transform: 'translate(-50%)',
                            display: 'block',
                        }}>
                            <MbtiImage src={`/character/${mbti.toLowerCase()}.svg`} />
                        </Box>
                    )}
                </Box>
                <Typography align={'center'} variant={'h3'} fontWeight={'bold'}>
                    <Typography color={theme => theme.palette.pink[600]}
                                variant={'h3'} fontWeight={'bold'}
                                component={'span'}>{nickname}</Typography>님,
                    <br />
                    가입을 진심으로 축하드려요🎉
                </Typography>
            </Box>
        </section>
    );
};

export default Welcome;
