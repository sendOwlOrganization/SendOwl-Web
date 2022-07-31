import { boardsMock } from '@mocks/boards';
import { BoardCategoryList } from '@organisms/board-category-list';
import { MainContent } from '@organisms/main';
import { ComponentProps } from 'react';

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
