import ArrowDownIcon from '@components/icons/ArrowDownIcon';
import ArrowFillDownIcon from '@components/icons/ArrowFillDownIcon';
import ArrowFillUpIcon from '@components/icons/ArrowFillUpIcon';
import ArrowLeftIcon from '@components/icons/ArrowLeftIcon';
import ArrowRightIcon from '@components/icons/ArrowRightIcon';
import ArrowUpIcon from '@components/icons/ArrowUpIcon';
import BalanceGameIcon from '@components/icons/BalanceGameIcon';
import BookmarkIcon from '@components/icons/BookmarkIcon';
import BookmarkIconOutlined from '@components/icons/BookmarkIconOutlined';
import CloseIcon from '@components/icons/CloseIcon';
import CommentIcon from '@components/icons/CommentIcon';
import CommunityIcon from '@components/icons/CommunityIcon';
import DeleteIcon from '@components/icons/DeleteIcon';
import FacebookIcon from '@components/icons/FacebookIcon';
import HeartIcon from '@components/icons/HeartIcon';
import HeartOutlinedIcon from '@components/icons/HeartOutlinedIcon';
import HomeIcon from '@components/icons/HomeIcon';
import InsightIcon from '@components/icons/InsightIcon';
import InstagramIcon from '@components/icons/InstagramIcon';
import KakaoTalkIcon from '@components/icons/KakaoTalkIcon';
import MeatballMenuIcon from '@components/icons/MeatballMenuIcon';
import MenuIcon from '@components/icons/MenuIcon';
import MoreIcon from '@components/icons/MoreIcon';
import NotificationIcon from '@components/icons/NotificationIcon';
import RadioButtonIcon from '@components/icons/RadioButtonIcon';
import ReportIcon from '@components/icons/ReportIcon';
import SearchIcon from '@components/icons/SearchIcon';
import SendIcon from '@components/icons/SendIcon';
import ServiceCenterIcon from '@components/icons/ServiceCenterIcon';
import SettingIcon from '@components/icons/SettingIcon';
import SvgIcon from '@components/icons/SvgIcon';
import UserIcon from '@components/icons/UserIcon';
import { Box, Grid, Typography } from '@mui/material';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ReactElement } from 'react';

export default {
    title: 'components/icons/SvgIcon',
    component: SvgIcon,
} as ComponentMeta<typeof SvgIcon>;

const IconItem = ({ icon }: { icon: ReactElement }) => {
    // @ts-ignore
    const displayName = icon?.type?.displayName;
    return (
        <Grid item>
            <Box display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'}>
                {icon}
                <Typography variant={'caption1'} margin={1}>
                    {displayName}
                </Typography>
            </Box>
        </Grid>
    );
};

const Template: ComponentStory<typeof SvgIcon> = (args) => (
    <Grid container spacing={1}>
        <IconItem icon={<ArrowLeftIcon {...args} />} />
        <IconItem icon={<ArrowRightIcon {...args} />} />
        <IconItem icon={<ArrowUpIcon {...args} />} />
        <IconItem icon={<ArrowDownIcon {...args} />} />
        <IconItem icon={<SearchIcon {...args} />} />
        <IconItem icon={<UserIcon {...args} />} />
        <IconItem icon={<NotificationIcon {...args} />} />
        <IconItem icon={<CloseIcon {...args} />} />
        <IconItem icon={<HeartIcon {...args} />} />
        <IconItem icon={<HeartOutlinedIcon {...args} />} />
        <IconItem icon={<CommunityIcon {...args} />} />
        <IconItem icon={<InsightIcon {...args} />} />
        <IconItem icon={<BalanceGameIcon {...args} />} />
        <IconItem icon={<ServiceCenterIcon {...args} />} />
        <IconItem icon={<HomeIcon {...args} />} />
        <IconItem icon={<ReportIcon {...args} />} />
        <IconItem icon={<MenuIcon {...args} />} />
        <IconItem icon={<MoreIcon {...args} />} />
        <IconItem icon={<CommentIcon {...args} />} />
        <IconItem icon={<BookmarkIcon {...args} />} />
        <IconItem icon={<BookmarkIconOutlined {...args} />} />
        <IconItem icon={<DeleteIcon {...args} />} />
        <IconItem icon={<MeatballMenuIcon {...args} />} />
        <IconItem icon={<ArrowFillUpIcon {...args} />} />
        <IconItem icon={<ArrowFillDownIcon {...args} />} />
        <IconItem icon={<SettingIcon {...args} />} />
        <IconItem icon={<InstagramIcon {...args} />} />
        <IconItem icon={<FacebookIcon {...args} />} />
        <IconItem icon={<KakaoTalkIcon {...args} />} />
        <IconItem icon={<RadioButtonIcon {...args} />} />
        <IconItem icon={<SendIcon {...args} />} />
    </Grid>
);

export const WithOnClickAction = Template.bind({});
WithOnClickAction.args = {
    color: 'pink',
    spacing: 0,
    onClick: () => alert('클릭'),
};

export const WithoutOnClickAction = Template.bind({});
WithoutOnClickAction.args = {
    color: 'purple',
    spacing: 0,
    onClick: undefined,
    clickable: false,
};

export const WithBadge = Template.bind({});
WithBadge.args = {
    spacing: 0,
    onClick: undefined,
    clickable: false,
    badge: 'pink',
};
