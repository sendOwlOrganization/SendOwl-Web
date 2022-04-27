import { Box, Divider, Grid, useMediaQuery } from '@mui/material';
import { Insights } from '@mui/icons-material';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import { styled } from '@mui/material/styles';
import Link from 'next/link';
import { useState } from 'react';

// TODO: need to move from this file + fix types to match with api
function createData(
    category: string,
    name: string,
    like: number,
    comment: number
) {
    return { category, name, like, comment };
}
// TODO: delete
const rows = [
    createData('이직.커리어', '경찰준비중입니다..', 10, 2),
    createData('잡담', '블랙기업', 8, 2),
    createData('이직.커리어', '중소기업 어디다니세요', 3000, 1000),
    createData('이직.커리어', '고민입니다', 1, 3),
    createData('이직.커리어', '개발자', 4, 6),
];

const Item = styled(Grid)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(0.3),
    color: theme.palette.text.secondary,
    display: 'inline',
}));

const Content = () => {
    const [isMobile, setIsMobile] = useState('0');
    const mobile = useMediaQuery('(max-width: 767px)');

    return (
        <>
            <Grid
                display={'flex'}
                alignItems={'center'}
                style={{
                    borderTop: isMobile ? '0' : '8px solid #f2f2f3',
                }}>
                <Grid justifyItems={'center'} marginRight={'5px'}>
                    <Insights />
                </Grid>
                <Grid
                    container
                    display={'flex'}
                    alignItems={'center'}
                    justifyContent={'space-between'}
                    height={'70px'}
                    fontSize={'18px'}
                    fontWeight={'800'}>
                    토픽 베스트
                    <Link href='/category'>
                        <a style={{ fontSize: '12px', fontWeight: '400' }}>
                            더보기
                            <ArrowForwardIosIcon style={{ fontSize: '10px' }} />
                        </a>
                    </Link>
                </Grid>
            </Grid>
            <Divider />
            <Box sx={{ flexGrow: 1 }}>
                {rows.map((row) => (
                    <>
                        <Grid
                            key={row.name}
                            container
                            spacing={1}
                            marginBottom={'5px'}
                            marginTop={'5px'}>
                            <Grid item lg={1} xs={12} paddingTop={0}>
                                <Item sx={{ border: '1px solid gray' }}>
                                    {row.category}
                                </Item>
                            </Grid>

                            <Grid item lg={9.6} xs={12}>
                                <Grid>{row.name}</Grid>
                            </Grid>
                            <Grid
                                item
                                lg={0.7}
                                xs={2}
                                display={'flex'}
                                textAlign={'center'}
                                alignItems={'center'}
                                flexWrap={'wrap'}>
                                <ThumbUpAltOutlinedIcon
                                    sx={{ fontSize: 13, color: 'gray' }}
                                />
                                <Item sx={{ fontSize: 12, color: 'gray' }}>
                                    {row.like}
                                </Item>
                            </Grid>
                            <Grid
                                item
                                lg={0.7}
                                xs={2}
                                display={'flex'}
                                textAlign={'center'}
                                alignItems={'center'}
                                flexWrap={'wrap'}>
                                <ChatBubbleOutlineOutlinedIcon
                                    sx={{ fontSize: 13, color: 'gray' }}
                                />
                                <Item sx={{ fontSize: 12, color: 'gray' }}>
                                    {row.comment}
                                </Item>
                            </Grid>
                        </Grid>
                        <Divider
                            sx={{ display: { lg: 'none', xs: 'block' } }}
                        />
                    </>
                ))}
            </Box>
        </>
    );
};

export default Content;
function useEffect(arg0: () => void, arg1: boolean[]) {
    throw new Error('Function not implemented.');
}
