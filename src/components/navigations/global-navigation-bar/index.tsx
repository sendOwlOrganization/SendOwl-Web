import MlabLogo from '@components/logo/MlabLogo';
import GlobalNavigationBarButtonLink from '@components/navigations/global-navigation-bar/GlobalNavigationBarButtonLink';
import Notification from '@components/navigations/global-navigation-bar/Notification';
import Search from '@components/navigations/global-navigation-bar/Search';
import User from '@components/navigations/global-navigation-bar/User';
import { css, Stack, styled } from '@mui/material';
import { MLAB_OPACITY_PALETTE } from '@styles/mlabTheme';
import NextLink from 'next/link';

interface GlobalNavigationBarProps {
    isLogged: boolean;
}

const BAR_HEIGHT = '4.5rem';

const Bar = styled('header')(({ theme }) => css`
  height: ${BAR_HEIGHT};
  background-color: ${MLAB_OPACITY_PALETTE.white[600]};
  backdrop-filter: blur(30px);
  position: fixed;
  width: 100%;
  z-index: ${theme.zIndex.appBar};
`);

const BarPadding = styled('div')`
  height: ${BAR_HEIGHT};
`;

const Nav = styled('nav')`
  display: flex;
  align-items: center;
`;

const Container = styled('div')(({ theme }) => css`
  height: 4.5rem;
  max-width: 75rem;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  align-items: center;
`);

const Anchor = styled('a')`
  margin-right: 1.5rem;
`;

const NavigationButtons = styled(Stack)`
  margin-left: auto;
`;

const GlobalNavigationBar = ({ isLogged }: GlobalNavigationBarProps) => {
    return (
        <>
            <Bar>
                <Container>
                    <Nav>
                        <NextLink href={'#'} passHref>
                            <Anchor>
                                <MlabLogo />
                            </Anchor>
                        </NextLink>
                        <GlobalNavigationBarButtonLink href={'#'} label={'전체 게시물'} active />
                        <GlobalNavigationBarButtonLink href={'#'} label={'밸런스 게임'} />
                        <GlobalNavigationBarButtonLink href={'#'} label={'인사이트'} />
                        <GlobalNavigationBarButtonLink href={'#'} label={'공지/이벤트'} />
                        <GlobalNavigationBarButtonLink href={'#'} label={'Q&A'} />
                    </Nav>
                    <NavigationButtons spacing={2} direction={'row'}>
                        <Search />
                        {
                            isLogged
                                ? <>
                                    <Notification />
                                    <User />
                                </> : <>
                                    <User />
                                </>
                        }
                    </NavigationButtons>
                </Container>
            </Bar>

            <BarPadding />
        </>
    );
};

export default GlobalNavigationBar;