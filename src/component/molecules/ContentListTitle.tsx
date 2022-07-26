import { Box, Divider, Grid, useTheme } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Link from 'next/link';

interface CategoryListTitleInfo {
    title: string;
}
const ContentListTitle = ({ title }: CategoryListTitleInfo) => {
    return (
        <>
            <Grid
                display={'flex'}
                alignItems={'center'}
                padding={'10px 20px 10px 20px'}>
                <Grid
                    container
                    display={'flex'}
                    alignItems={'center'}
                    justifyContent={'space-between'}
                    height={'70px'}
                    fontSize={'20px'}
                    fontWeight={'800'}>
                    {title}
                    <Link href='/category'>
                        <a style={{ fontSize: '12px', fontWeight: '400' }}>
                            더보기
                            <ArrowForwardIosIcon style={{ fontSize: '10px' }} />
                        </a>
                    </Link>
                </Grid>
            </Grid>
        </>
    );
};

export default ContentListTitle;
