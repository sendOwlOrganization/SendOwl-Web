import { boardsMock } from '@mocks/boards';
import { BoardCategoryList } from '@organisms/board-category-list';
import { MainContent } from '@organisms/main';
import { ComponentProps } from 'react';

interface HomePageProps {
    boards: ComponentProps<typeof BoardCategoryList>['boards'];
}

interface DataList {
    id: number;
    name: string;
    count: number;
}

interface Data {
    data: DataList[]
}

const Home = ({data}: Data) => {
    return (
        <>
            <MainContent data={data}/>
        </>
    );
};

// export const getStaticProps = async () => {
//     return {
//         props: {
//             boards: boardsMock,
//         },
//     };
// };

export const getServerSideProps = async () => {
    const res = await fetch(`http://52.90.6.136:8080/api/categories/popular`);
    const data = await res.json();

    return {
        props: {
            data
        }
    }
}

export default Home;
