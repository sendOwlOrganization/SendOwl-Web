import { ComponentProps } from 'react';
import BoardCategoryList from '../src/components/board-category-list/BoardCategoryList';

interface HomePageProps {
    boards: ComponentProps<typeof BoardCategoryList>['boards'];
}

const Home = ({ boards }: HomePageProps) => {
    return (
        <BoardCategoryList title={'토픽 베스트'} boards={boards} />
    );
};

export const getStaticProps = async () => {
    return {
        props: {
            boards: [{
                id: 1,
                category: '테스트',
                title: '제목',
                likeCount: 10,
                commentCount: 20,
            }],
        },
    };
};

export default Home;
