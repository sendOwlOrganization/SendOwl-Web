import { List } from '@mui/material';
import CommentListItem from './CommentListItem';

// TODO: move this type
export interface Comment {
    id: number;
    user: string;
    active: boolean;
    content: string;
    regDate: string;
    modDate: string;
    like: number;
}

// TODO: move this type
export interface ParentComment extends Comment {
    childComments: Comment[];
}

interface CommentListProps {
    comments: ParentComment[];
}

const CommentList = ({ comments }: CommentListProps) => {
    return (
        <List>
            {comments.map(comment => (<CommentListItem key={comment.id} {...comment} />))}
        </List>
    );
};

export default CommentList;