import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import { Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import Link from 'next/link';

interface Board {
    id: number;
    title: string;
    content: string;
    nickname: string;
    regDate: Date;
    hit: number;
    boardLikeCount: number;
}

interface BoardCategoryPostListProps {
    boards: Board[];
}

const Item = styled(Grid)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(0.3),
    color: theme.palette.text.secondary,
    display: 'inline',
}));

const BoardLink = ({ board }: { board: Board }) => {
    return (
        <Grid container spacing={1} marginBottom={'5px'} marginTop={'5px'}>
            <Grid item lg={1} xs={12} paddingTop={0}>
                <Item sx={{ border: '1px solid gray' }}>{board.title}</Item>
            </Grid>
            <Grid item lg={9.6} xs={12}>
                <Link href={`/boards/${board.id}`} passHref legacyBehavior>
                    <a style={{ textDecoration: 'none', color: '#000' }}>{board.title}</a>
                </Link>
            </Grid>
            <Grid item lg={0.7} xs={2} display={'flex'} textAlign={'center'} alignItems={'center'} flexWrap={'wrap'}>
                <ThumbUpAltOutlinedIcon sx={{ fontSize: 13, color: 'gray' }} />
                <Item sx={{ fontSize: 12, color: 'gray' }}>{board.boardLikeCount}</Item>
            </Grid>
            <Grid item lg={0.7} xs={2} display={'flex'} textAlign={'center'} alignItems={'center'} flexWrap={'wrap'}>
                <ChatBubbleOutlineOutlinedIcon sx={{ fontSize: 13, color: 'gray' }} />
                <Item sx={{ fontSize: 12, color: 'gray' }}>{board.hit}</Item>
            </Grid>
        </Grid>
    );
};

// TODO: 위치 옮기기
const BoardCategoryPostList = ({ boards }: BoardCategoryPostListProps) => {
    return (
        <>
            {boards.map((board) => (
                <BoardLink key={board.id} board={board} />
            ))}
        </>
    );
};

export default BoardCategoryPostList;
