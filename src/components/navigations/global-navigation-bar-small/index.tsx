import Bar from '@components/navigations/global-navigation-bar-small/Bar';
import NavigationTitle from '@components/navigations/global-navigation-bar-small/NavigationTitle';
import Notification from '@components/navigations/global-navigation-bar-small/Notification';
import { css, styled } from '@mui/material';
import Menu from './Menu';
import Search from './Search';

interface GlobalNavigationBarSmallProps {
    // FIXME: to replace with next router url
    currentUrl: string;
    // FIXME: to replace with next auth
    isLogged: boolean;
}


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