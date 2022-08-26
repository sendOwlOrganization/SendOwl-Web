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
    currentUrl: string;
}

const BAR_HEIGHT = '4.5rem';

const Bar = styled('header')(({ theme }) => css`
  height: ${BAR_HEIGHT};
  background-color: ${MLAB_OPACITY_PALETTE.white[600]};
  backdrop-filter: blur(30px);
  position: fixed;
  width: 100%;
  z-index: ${theme.zIndex.appBar};
  border-bottom: 1px solid ${theme.palette.gray[200]};
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
  padding: 0 1rem;
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

const navigationButtons = [
    {
        href: '/boards',
        label: '전체 게시물',
    },
    {
        href: '/balance-game',
        label: '밸런스 게임',
    },
    {
        href: '/insights',
        label: '인사이트',
    },
    {
        href: '/notice',
        label: '공지/이벤트',
    },
    {
        href: '/qa',
        label: 'Q&A',
    },
];

const GlobalNavigationBar = ({ isLogged, currentUrl }: GlobalNavigationBarProps) => {

    return (
        <>
            <Bar>
                <Container>
                    <Nav>
                        <NextLink href={'/'} passHref>
                            <Anchor>
                                <MlabLogo />
                            </Anchor>
                        </NextLink>
                        {
                            navigationButtons.map(n => <GlobalNavigationBarButtonLink href={n.href} label={n.label}
                                                                                      key={n.href}
                                                                                      active={currentUrl.startsWith(n.href)} />)
                        }
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