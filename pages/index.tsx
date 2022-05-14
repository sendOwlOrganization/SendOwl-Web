import { Grid } from '@mui/material';
import { ComponentProps } from 'react';
import BoardCategoryList from '../src/components/board-category-list/BoardCategoryList';
import { Search } from '../src/components/search';
import { boardsMock } from '../src/mocks/boards';

interface HomePageProps {
    boards: ComponentProps<typeof BoardCategoryList>['boards'];
}

const Home = ({ boards }: HomePageProps) => {
    return (
        <>
            <Grid container>
                <Grid item xs={12} sx={{ display: { lg: 'block', xs: 'none' } }}>
                    <Search />
                </Grid>
            </Grid>
            <BoardCategoryList title={'토픽 베스트'} boards={boards} />
            <BoardCategoryList title={'자유 게시판'} boards={boards} />
            <BoardCategoryList title={'익명 게시판'} boards={boards} />
        </>
    );
};

export const getStaticProps = async () => {
    return {
        props: {
            boards: boardsMock,
        },
    };
};

export default Home;
