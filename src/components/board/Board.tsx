import { Box, Divider } from '@mui/material';
import BoardContent from './BoardContent';
import BoardFooter from './BoardFooter';
import BoardHeader from './BoardHeader';

// TODO: need to move from this file + fix types to match with api
interface User {
    id: number;
    isActive: boolean;
    email: string;
    nickName: string;
}

// TODO: need to move from this file + fix types to match with api
interface BoardPost {
    id: number;
    title: string;
    content: string;
    date: string;
    user: User;
    like: number;
    comments: number;
    view: number;
}

interface BoardProps {
    post: BoardPost;
}

const Board = ({ post }: BoardProps) => {
    return (
        <Box component={'article'}>
            <BoardHeader title={post.title}
                         date={post.date}
                         author={post.user.nickName}
                         commentCount={post.comments}
                         pageView={post.view} />
            <Divider />
            <BoardContent content={post.content} />
            <Divider />
            <BoardFooter like={post.like} />
        </Box>
    );
};

export default Board;