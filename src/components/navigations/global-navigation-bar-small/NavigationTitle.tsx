import BalanceGameIcon from '@components/icons/BalanceGameIcon';
import CommunityIcon from '@components/icons/CommunityIcon';
import InsightIcon from '@components/icons/InsightIcon';
import NoticeIcon from '@components/icons/NoticeIcon';
import ServiceCenterIcon from '@components/icons/ServiceCenterIcon';
import MlabLogo from '@components/logo/MlabLogo';
import SideMenuLink from '@components/navigations/side-menu/SideMenuLink';
import { css, styled } from '@mui/material';
import { MLAB_ICON_COLORS } from '@styles/mlabTheme';
import { BALANCE_GAMES_URL, COMMUNITY_URL, INSIGHTS_URL, NOTICES_URL, SERVICE_CENTER_URL } from '@tools/url';
import NextLink from 'next/link';
import { ReactNode, useMemo } from 'react';

const Anchor = styled('a')(
    ({ theme }) => css`
        display: flex;
        align-items: center;
        width: 5.625rem;

        & > svg {
            width: 100%;
        }
    `
);

interface NavigationTitleProps {
    currentUrl: string;
}

const TITLES: Record<string, ReactNode> = {
    [BALANCE_GAMES_URL]: (
        <SideMenuLink
            href={BALANCE_GAMES_URL}
            icon={<BalanceGameIcon color={MLAB_ICON_COLORS.balanceGame} />}
            title={'밸런스 게임'}
        />
    ),
    [COMMUNITY_URL]: (
        <SideMenuLink
            href={COMMUNITY_URL}
            icon={<CommunityIcon color={MLAB_ICON_COLORS.community} />}
            title={'커뮤니티'}
        />
    ),
    [INSIGHTS_URL]: (
        <SideMenuLink href={INSIGHTS_URL} icon={<InsightIcon color={MLAB_ICON_COLORS.insight} />} title={'인사이트'} />
    ),
    [NOTICES_URL]: (
        <SideMenuLink href={NOTICES_URL} icon={<NoticeIcon color={MLAB_ICON_COLORS.notice} />} title={'공지/이벤트'} />
    ),
    [SERVICE_CENTER_URL]: (
        <SideMenuLink
            href={SERVICE_CENTER_URL}
            icon={<ServiceCenterIcon color={MLAB_ICON_COLORS.serviceCenter} colorKey={700} />}
            title={'고객센터'}
        />
    ),
};

const NavigationTitle = ({ currentUrl }: NavigationTitleProps) => {
    const link = useMemo(() => {
        const matchArray = currentUrl.match(/^(\/[a-zA-Z-_]+).*/);
        if (matchArray && matchArray.length > 1) return TITLES[currentUrl];
        return null;
    }, [currentUrl]);

    return (
        <>
            {link || (
                <NextLink href={'/'} passHref legacyBehavior>
                    <Anchor>
                        <MlabLogo />
                    </Anchor>
                </NextLink>
            )}
        </>
    );
};

export default NavigationTitle;
