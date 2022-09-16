import BalanceGameIcon from '@components/icons/BalanceGameIcon';
import CommunityIcon from '@components/icons/CommunityIcon';
import InsightIcon from '@components/icons/InsightIcon';
import NoticeIcon from '@components/icons/NoticeIcon';
import ShortcutButton from '@components/links/ShortcutButton';

import { ComponentMeta, ComponentStory } from '@storybook/react';
import { MLAB_ICON_COLORS } from '@styles/mlabTheme';

export default {
    title: 'components/links/ShortcutButton',
    component: ShortcutButton,
} as ComponentMeta<typeof ShortcutButton>;

const Template: ComponentStory<typeof ShortcutButton> = (args) => (
    <ShortcutButton {...args} />
);

export const 밸런스_게임 = Template.bind({});
밸런스_게임.args = {
    color: MLAB_ICON_COLORS.balanceGame,
    colorKey: 600,
    text: '밸런스 게임',
    icon: <BalanceGameIcon />,
};

export const 커뮤니티 = Template.bind({});
커뮤니티.args = {
    color: MLAB_ICON_COLORS.community,
    colorKey: 600,
    text: '커뮤니티',
    icon: <CommunityIcon />,
};

export const 인사이트 = Template.bind({});
인사이트.args = {
    color: MLAB_ICON_COLORS.insight,
    colorKey: 600,
    text: '인사이트',
    icon: <InsightIcon />,
};

export const 공지_이벤트 = Template.bind({});
공지_이벤트.args = {
    color: MLAB_ICON_COLORS.notice,
    colorKey: 600,
    text: '공지/이벤트',
    icon: <NoticeIcon />,
};