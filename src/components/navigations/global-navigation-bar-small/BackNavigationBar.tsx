import ArrowLeftIcon from '@components/icons/ArrowLeftIcon';
import Bar from '@components/navigations/global-navigation-bar-small/Bar';
import { Box, Stack, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import { PropsWithChildren } from 'react';

interface BackNavigationBarProps {
    title: string;
}

const BackNavigationBar = ({ title, children }: PropsWithChildren<BackNavigationBarProps>) => {
    const router = useRouter();

    const onBack = () => {
        router.back();
    };

    return (
        <Bar sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr' }}>
            <Box>
                <ArrowLeftIcon onClick={onBack} />
            </Box>
            <Typography textAlign={'center'} variant={'subtitle3'} fontWeight={'bold'}>
                {title}
            </Typography>
            <Stack justifyContent={'right'} alignItems={'center'} direction={'row'} spacing={2}>
                {children}
            </Stack>
        </Bar>
    );
};

export default BackNavigationBar;