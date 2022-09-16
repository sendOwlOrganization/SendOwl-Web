import NavigationTitle from '@components/navigations/global-navigation-bar-small/NavigationTitle';
import Notification from '@components/navigations/global-navigation-bar-small/Notification';
import { css, styled } from '@mui/material';
import { MLAB_OPACITY_PALETTE } from '@styles/mlabTheme';
import Menu from './Menu';
import Search from './Search';

interface GlobalNavigationBarSmallProps {
    // FIXME: to replace with next router url
    currentUrl: string;
    // FIXME: to replace with next auth
    isLogged: boolean;
}

const BAR_HEIGHT = '3.5rem';

const Bar = styled('header')(({ theme }) => css`
  height: ${BAR_HEIGHT};
  background-color: ${theme.palette.mode === 'dark' ? MLAB_OPACITY_PALETTE.black[600] : MLAB_OPACITY_PALETTE.white[600]};
  backdrop-filter: blur(30px);
  position: fixed;
  width: 100%;
  z-index: ${theme.zIndex.appBar};
  border-bottom: 1px solid ${theme.palette.mode === 'dark' ? theme.palette.gray[900] : theme.palette.gray[200]};
  padding: 0 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`);

const NavigationButtons = styled('div')(({ theme }) => css`
  display: flex;
  align-items: center;

  & > * {
    margin-right: 1.25rem;
  }

  & > *:last-child {
    margin-right: 0;
  }
`);

const GlobalNavigationBarSmall = ({ currentUrl, isLogged }: GlobalNavigationBarSmallProps) => {

    return (
        <>
            <Bar>
                <NavigationTitle currentUrl={currentUrl} />

                <NavigationButtons>
                    <Search />
                    {isLogged && <Notification />}
                    <Menu />
                </NavigationButtons>
            </Bar>
        </>
    );
};

export default GlobalNavigationBarSmall;