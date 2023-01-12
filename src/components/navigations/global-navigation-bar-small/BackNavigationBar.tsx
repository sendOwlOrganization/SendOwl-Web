import ArrowLeftIcon from '@components/icons/ArrowLeftIcon';
import Bar from '@components/navigations/global-navigation-bar-small/Bar';
import { Typography } from '@mui/material';
import { useRouter } from 'next/router';
import { PropsWithChildren } from 'react';

interface BackNavigationBarProps {
    title: string;
}

const BackNavigationBar = ({ title, children }: PropsWithChildren<BackNavigationBarProps>) => {
    const router = useRouter();

    const onBack = () => {
        router.back();
    }

    return (
        <Bar>
            <ArrowLeftIcon onClick={onBack} />
            <Typography variant={'subtitle3'} fontWeight={'bold'}>
                {title}
            </Typography>
            <div>
                {children}
            </div>
        </Bar>
    );
};

export default BackNavigationBar;