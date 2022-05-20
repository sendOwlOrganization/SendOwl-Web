import { Divider } from '@mui/material';
import BoardCategoryPostList from './BoardCategoryPostList';
import BoardCategoryTitle from './BoardCategoryTitle';

interface Board {
    id: number;
    category: string;
    title: string;
    likeCount: number;
    commentCount: number;
}

interface BoardCategoryListProps {
    title: string;
    boards: Board[];
}

const BoardCategory = ({ title, boards }: BoardCategoryListProps) => {

    return (
        <>
            <BoardCategoryTitle title={title} />
            <Divider />
            <BoardCategoryPostList boards={boards} />
        </>
    );
};

export default BoardCategory;
