import AngleRightBigIcon from '@components/icons/AngleRightBigIcon';
import CloseIcon from '@components/icons/CloseIcon';
import NotificationIcon from '@components/icons/NotificationIcon';
import SearchIcon from '@components/icons/SearchIcon';
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
        <IconItem icon={<AngleRightBigIcon {...args} />} />
        <IconItem icon={<SearchIcon {...args} />} />
        <IconItem icon={<UserIcon {...args} />} />
        <IconItem icon={<NotificationIcon {...args} />} />
        <IconItem icon={<CloseIcon {...args} />} />
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