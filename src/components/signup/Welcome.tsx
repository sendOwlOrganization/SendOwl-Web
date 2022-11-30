import RectangleButton from '@components/buttons/RectangleButton';
import MlabLogo from '@components/logo/MlabLogo';
import { Player } from '@lottiefiles/react-lottie-player';
import { Box, styled, Typography } from '@mui/material';
import { useRef } from 'react';

interface WelcomeProps {
    nickname: string;
}

const confettiLottie = 'https://assets3.lottiefiles.com/packages/lf20_lmggs7gq.json';

const Container = styled('div')(({ theme }) => ({
    padding: '1rem',
    position: 'relative',
    maxWidth: '500px',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    maxHeight: '500px',
}));

const Header = styled('header')(({ theme }) => ({
    height: '4.375rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const Welcome = ({ nickname }: WelcomeProps) => {
    const lottieRef = useRef<Player>(null);
    return (
        <section>
            <Header>
                <MlabLogo width={66} />
            </Header>
            <Box sx={{ maxHeight: '500px', position: 'relative', height: lottieRef.current?.container?.clientHeight }}>
                <Container style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    height: '100%',
                }}>
                    <Player autoplay
                            keepLastFrame
                            loop
                            speed={1}
                            ref={lottieRef}
                            src={confettiLottie}
                            style={{}} />
                    <Typography align={'center'} variant={'title3'} fontWeight={'bold'}>
                        <Typography color={theme => theme.palette.pink[600]}
                                    variant={'title3'} fontWeight={'bold'}
                                    component={'span'}>{nickname}</Typography>님,
                        <br />
                        환영해요!
                    </Typography>
                </Container>
            </Box>
            <RectangleButton sx={{ position: 'fixed', bottom: '0' }}>
                시작하기
            </RectangleButton>
        </section>
    );
};

export default Welcome;