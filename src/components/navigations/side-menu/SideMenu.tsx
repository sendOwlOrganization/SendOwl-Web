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

const MenuContainer = styled('div')(({ theme }) => css`
  max-width: 19.125rem;
  width: 19.125rem;
  padding: 1.625rem;
  display: flex;
  flex-direction: column;
`);


const SideMenu = (props: {}) => {

    return (
        <MenuContainer>
            <SideMenuLoginInformation />
            <BalanceGameLink voteId={1} first={'OOOO OOO'} second={'OOOO OOO'} />
            <SideMenuLink href={'/'} icon={<HomeIcon color={'gray'} colorKey={400} />} title={'홈'} />
            <SideMenuLink href={COMMUNITY_URL}
                          icon={<CommunityIcon color={MLAB_ICON_COLORS.community} colorKey={600} />}
                          title={'커뮤니티'} />
            <SideMenuLink href={BALANCE_GAMES_URL}
                          icon={<BalanceGameIcon color={MLAB_ICON_COLORS.balanceGame} colorKey={600} />}
                          title={'밸런스 게임'} />
            <SideMenuLink href={INSIGHTS_URL}
                          icon={<InsightIcon color={MLAB_ICON_COLORS.insight} colorKey={600} />}
                          title={'인사이트'} />
            <SideMenuLink href={NOTICES_URL}
                          icon={<NoticeIcon color={MLAB_ICON_COLORS.notice} colorKey={600} />}
                          title={'공지/이벤트'} />
            <SideMenuLink href={SERVICE_CENTER_URL}
                          icon={<ServiceCenterIcon color={MLAB_ICON_COLORS.serviceCenter} colorKey={700} />}
                          title={'고객센터'} />

            <Divider sx={{ margin: '1rem 0' }} />

            <SideMenuBottomLink href={'/fixme'}>
                인스타그램
            </SideMenuBottomLink>
            <SideMenuBottomLink href={'/fixme'}>
                페이스북
            </SideMenuBottomLink>
            <SideMenuBottomLink href={'/fixme'}>
                1:1 문의
            </SideMenuBottomLink>
            <SideMenuBottomLink href={'/fixme'}>
                광고 문의
            </SideMenuBottomLink>
            <SideMenuBottomLink href={'/fixme'}>
                오류 신고
            </SideMenuBottomLink>
        </MenuContainer>
    );
};

export default SideMenu;