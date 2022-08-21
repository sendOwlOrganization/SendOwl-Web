import BannerTitle from '@components/banner/BannerTitle';
import { Typography } from '@mui/material';

interface BalanceGameWidgetTitleProps {
    title: string;
}

const BalanceGameWidgetTitle = ({ title }: BalanceGameWidgetTitleProps) => {
    return (
        <BannerTitle>
            <Typography variant={'body1'} fontWeight={'bold'}>
                {
                    title.endsWith('?') && (
                        <Typography variant={'body1'}
                                    fontWeight={'bold'}
                                    component={'span'}
                                    color={theme => theme.palette.purple[600]}>
                            {'Q. '}
                        </Typography>
                    )
                }
                {title}
            </Typography>
        </BannerTitle>
    );
};

export default BalanceGameWidgetTitle;