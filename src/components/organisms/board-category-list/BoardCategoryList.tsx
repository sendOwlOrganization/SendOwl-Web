import BoardCategoryPostList from '@components/molecules/BoardCategoryPostList';
import BoardCategoryTitle from '@components/molecules/BoardCategoryTitle';
import { Divider } from '@mui/material';

interface Board {
    id: number;
    title: string;
    content: string;
    nickname: string;
    regDate: Date;
    hit: number;
    boardLikeCount: number;
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
