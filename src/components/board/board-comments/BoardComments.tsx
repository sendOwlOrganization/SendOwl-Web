import BoardCommentItem from '@components/board/board-comments/BoardCommentItem';
import { Comment } from './Comment';

interface BoardCommentsProps {
    comments: Comment[];
}

const BoardComments = ({ comments }: BoardCommentsProps) => {
    return (
        <>
            {comments.map(c => <BoardCommentItem key={c.id} comment={c} />)}
        </>
    );
};

export default BoardComments;