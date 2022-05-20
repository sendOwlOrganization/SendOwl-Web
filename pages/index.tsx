import { Grid } from '@mui/material';
import { ComponentProps } from 'react';
import { getBoards } from '../src/api';
import BoardCategoryList from '../src/components/board-category-list/BoardCategoryList';
import { Search } from '../src/components/search';
import { BoardCategory, getBoardCategoryName } from '../src/types/Category';

type Boards = ComponentProps<typeof BoardCategoryList>['boards'];

interface HomePageProps {
    boardsByCategory: Record<number, Boards>;
}

const Home = ({ boardsByCategory }: HomePageProps) => {
    return (
        <>
            <Grid container>
                <Grid item xs={12} sx={{ display: { lg: 'block', xs: 'none' } }}>
                    <Search />
                </Grid>
            </Grid>
            {
                Object.entries(boardsByCategory).map(([categoryId, boards]) => <BoardCategoryList key={categoryId}
                                                                                                  title={categoryId}
                                                                                                  boards={boards} />)
            }
        </>
    );
};

export const getServerSideProps = async () => {
    const categories = [
        BoardCategory.FREE,
        BoardCategory.CAREER,
        BoardCategory.JOB,
        BoardCategory.STUDY,
        BoardCategory.INTERVIEW,
    ];

    const boards = await Promise.all(categories.map(categoryId => getBoards(0, 10, categoryId)));

    const boardsByCategory: Record<string, Boards> = {};
    boards.forEach(({ data, error }, categoryIndex) => {
        if (!data?.boards)
            return;
        const categoryName = getBoardCategoryName(categories[categoryIndex]);
        boardsByCategory[categoryName] = data.boards.map((b) => ({
            id: b.id,
            category: categoryName,
            title: b.title,
            commentCount: -1, // FIXME
            likeCount: -1, // FIXME
        }));
    });

    return {
        props: {
            boardsByCategory: boardsByCategory,
        },
    };
};

export default Home;
