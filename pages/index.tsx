import { Grid } from '@mui/material';
import { ComponentProps } from 'react';
import { BoardCategoryList } from '../src/components/board-category-list';
import SideBar from '../src/components/global/Sidebar';
import { MainContent } from '../src/component/organisms/main';
import { Search } from '../src/components/search';
import { boardsMock } from '../src/mocks/boards';

interface HomePageProps {
    boards: ComponentProps<typeof BoardCategoryList>['boards'];
}

const Home = () => {
    return (
        <>
            <MainContent />
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
