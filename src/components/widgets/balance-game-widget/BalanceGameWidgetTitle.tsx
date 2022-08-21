import BannerTitle from '@components/banner/BannerTitle';
import { Typography } from '@mui/material';

interface BalanceGameWidgetTitleProps {
    id: number;
    title: string;
}

const BalanceGameWidgetTitle = ({ id, title }: BalanceGameWidgetTitleProps) => {
    return (
        <BannerTitle href={`#?FIXME_LINK_ID=${id}`}>
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