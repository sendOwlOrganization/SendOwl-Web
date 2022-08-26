import GlobalNavigationBar from '@components/navigations/global-navigation-bar';
import BalanceGameWidget from '@components/widgets/balance-game-widget';
import MbtiWidget from '@components/widgets/mbti-widget';
import { styled } from '@mui/material';
import { useRouter } from 'next/router';
import { PropsWithChildren } from 'react';

interface GlobalLayoutProps {
}

const Container = styled('div')`
  display: flex;
  max-width: 75rem;
  margin: 2rem auto;
`;

const MainContainer = styled('main')`
  width: 100%;
`;

const SideWidgetContainer = styled('aside')`
  width: 18rem;
  min-width: 18rem;
  margin-left: 1rem;
  display: flex;
  flex-direction: column;

  & > * {
    margin-bottom: 1rem;
  }

  & > *:last-child {
    margin-bottom: 0;
  }
`;

const GlobalLayout = ({ children }: PropsWithChildren<GlobalLayoutProps>) => {
    const router = useRouter();
    return (
        <>
            <GlobalNavigationBar isLogged={true} currentUrl={router.pathname} />
            <Container>
                <MainContainer>
                    {children}
                </MainContainer>
                <SideWidgetContainer>
                    <MbtiWidget user={{ mbti: 'ENTP' }} data={[{ id: 'ENTP', value: 200, label: 'ENTP' }]} />
                    <BalanceGameWidget voteId={1} title={'이번주 밸런스 게임'} choices={[
                        {
                            id: 1,
                            text: '일 잘하는데\n성격이 나쁜사람',
                            voteCount: 5000,
                        },
                        {
                            id: 2,
                            text: '일 못하는데\n성격이 좋은사람',
                            voteCount: 6000,
                        },
                    ]} />
                </SideWidgetContainer>
            </Container>
        </>
    );
};

export default GlobalLayout;
