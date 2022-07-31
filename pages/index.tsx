import { BoardCategoryList } from '@components/organisms/board-category-list';
import { MainContent } from '@components/organisms/main';
import { boardsMock } from '@mocks/boards';
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
