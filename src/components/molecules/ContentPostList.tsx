import { Box, Divider, Grid, styled } from '@mui/material';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';

// TODO: need to move from this file + fix types to match with api
function createData(category: string, name: string, like: number, comment: number) {
    return { category, name, like, comment };
}
// TODO: delete
const rows = [
    createData('ENFJ', '오늘 프로젝트 목업을 만들어봤어..', 10, 2),
    createData('INFP', '오늘 뭐 먹지?', 8, 2),
    createData('ENFJ', 'ㅋㅋㅋㅋㅋㅋㅋ', 124, 12),
    createData('ENFJ', 'ESFJ 특', 1, 3),
    createData('ENFJ', '우와 신기하다', 4, 6),
];

const Item = styled(Grid)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(0.3),
    color: '#4F4CC5',
    fontWeight: 'bold',
    fontSize: '16px',
    display: 'inline',
}));

const ContentPostList = () => {
    return (
        <>
            <Box sx={{ flexGrow: 1 }} marginBottom={'2rem'} fontSize={'16px'}>
                {rows.map((row) => (
                    <>
                        <Grid key={row.name} container spacing={1} padding={'0px 0px 10px 20px'}>
                            <Grid item lg={1} xs={10} paddingTop={0}>
                                <Item>{row.category}</Item>
                            </Grid>

                            <Grid item lg={9} xs={12}>
                                <Grid>{row.name}</Grid>
                            </Grid>
                            <Grid
                                item
                                lg={1}
                                xs={1}
                                display={'flex'}
                                textAlign={'center'}
                                alignItems={'center'}
                                flexWrap={'wrap'}>
                                <ThumbUpAltOutlinedIcon sx={{ fontSize: 16, color: 'gray' }} />
                                <Item sx={{ fontSize: 15, color: 'gray' }}>{row.like}</Item>
                            </Grid>
                            <Grid
                                item
                                lg={1}
                                xs={1}
                                display={'flex'}
                                textAlign={'center'}
                                alignItems={'center'}
                                flexWrap={'wrap'}>
                                <ChatBubbleOutlineOutlinedIcon sx={{ fontSize: 16, color: 'gray' }} />
                                <Item sx={{ fontSize: 15, color: 'gray' }}>{row.comment}</Item>
                            </Grid>
                        </Grid>
                    </>
                ))}
            </Box>
        </>
    );
};

export default ContentPostList;
