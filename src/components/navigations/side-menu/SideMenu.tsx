import BalanceGameIcon from '@components/icons/BalanceGameIcon';
import CommunityIcon from '@components/icons/CommunityIcon';
import HomeIcon from '@components/icons/HomeIcon';
import InsightIcon from '@components/icons/InsightIcon';
import NoticeIcon from '@components/icons/NoticeIcon';
import ServiceCenterIcon from '@components/icons/ServiceCenterIcon';
import BalanceGameLink from '@components/navigations/global-navigation-bar-small/BalanceGameLink';
import SideMenuBottomLink from '@components/navigations/side-menu/SideMenuBottomLink';
import SideMenuLink from '@components/navigations/side-menu/SideMenuLink';
import SideMenuLoginInformation from '@components/navigations/side-menu/SideMenuLoginInformation';
import { css, Divider, styled } from '@mui/material';
import { MLAB_ICON_COLORS } from '@styles/mlabTheme';
import { BALANCE_GAMES_URL, COMMUNITY_URL, INSIGHTS_URL, NOTICES_URL, SERVICE_CENTER_URL } from '@tools/url';
import { signOut } from 'next-auth/react';
import { useRecoilValue } from 'recoil';
import { sessionStore } from '../../../store/sessionStore';

const MenuContainer = styled('div')`
    max-width: 19.125rem;
    width: 19.125rem;
    padding: 1.625rem;
    display: flex;
    flex-direction: column;
`;

const Nav = styled('nav', {
    shouldForwardProp: (name) => name !== 'liMargin',
})<{ liMargin: string }>(
    ({ liMargin }) => css`
        & > ul {
            list-style: none;
            padding: 0;
            display: flex;
            flex-direction: column;
        }

        & > ul > li {
            margin: ${liMargin};
        }
    `
);

const SideMenu = (props: {}) => {
    const { isAuthenticated } = useRecoilValue(sessionStore);
    return (
        <MenuContainer>
            <SideMenuLoginInformation />
            <BalanceGameLink voteId={1} first={'OOOO OOO'} second={'OOOO OOO'} />
            <Nav liMargin={'1rem 0'}>
                <ul>
                    <li>
                        <SideMenuLink href={'/'} icon={<HomeIcon color={'gray'} colorKey={400} />} title={'홈'} />
                    </li>
                    <li>
                        <SideMenuLink
                            href={COMMUNITY_URL}
                            icon={<CommunityIcon color={MLAB_ICON_COLORS.community} colorKey={600} />}
                            title={'커뮤니티'}
                        />
                    </li>
                    <li>
                        <SideMenuLink
                            href={BALANCE_GAMES_URL}
                            icon={<BalanceGameIcon color={MLAB_ICON_COLORS.balanceGame} colorKey={600} />}
                            title={'밸런스 게임'}
                        />
                    </li>
                    <li>
                        <SideMenuLink
                            href={INSIGHTS_URL}
                            icon={<InsightIcon color={MLAB_ICON_COLORS.insight} colorKey={600} />}
                            title={'인사이트'}
                        />
                    </li>
                    <li>
                        <SideMenuLink
                            href={NOTICES_URL}
                            icon={<NoticeIcon color={MLAB_ICON_COLORS.notice} colorKey={600} />}
                            title={'공지/이벤트'}
                        />
                    </li>
                    <li>
                        <SideMenuLink
                            href={SERVICE_CENTER_URL}
                            icon={<ServiceCenterIcon color={MLAB_ICON_COLORS.serviceCenter} colorKey={700} />}
                            title={'고객센터'}
                        />
                    </li>
                </ul>
            </Nav>
            <Divider sx={{ margin: '1rem 0' }} />
            <Nav liMargin={'0.625rem 0'}>
                <ul>
                    <li>
                        <SideMenuBottomLink href={'/fixme'}>인스타그램</SideMenuBottomLink>
                    </li>
                    <li>
                        <SideMenuBottomLink href={'/fixme'}>페이스북</SideMenuBottomLink>
                    </li>
                    <li>
                        <SideMenuBottomLink href={'/fixme'}>1:1 문의</SideMenuBottomLink>
                    </li>
                    <li>
                        <SideMenuBottomLink href={'/fixme'}>광고 문의</SideMenuBottomLink>
                    </li>
                    <li>
                        <SideMenuBottomLink href={'/fixme'}>오류 신고</SideMenuBottomLink>
                    </li>
                    {isAuthenticated && (
                        <li>
                            <SignOutButton onClick={() => signOut()}>로그아웃</SignOutButton>
                        </li>
                    )}
                </ul>
            </Nav>
        </MenuContainer>
    );
};

const SignOutButton = styled('button')(({ theme }) => ({
    ...theme.typography.subtitle3,
    fontWeight: 'bold',
    color: theme.palette.gray[700],
    backgroundColor: 'transparent',
    border: 'none',
    padding: 0,
}));

export default SideMenu;
