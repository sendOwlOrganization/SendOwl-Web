import {Container, Grid, useTheme, Box, useMediaQuery} from '@mui/material';
import * as React from 'react';
import { Mbti } from '../chart';
import Advertisement from '../../molecules/Advertisement';
import CategoryMenu from '../../molecules/CategoryMenu';
import CreatePost from '../../molecules/CreatePost';
import ContentList from '../../molecules/ContentList';

interface BoardCategory {
    id: number;
    name: string;
}
interface Board {
    id: number;
    category: string;
    title: string;
    likeCount: number;
    commentCount: number;
}
interface BoardCategoryListProps {
    categories: BoardCategory[];
    boards: Board[];
}

const MainContent = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery("(max-width: 600px)");
    const mobileWidth = 355
    const webWidth = 783

    return (
        <>
            <Container maxWidth={'md'} disableGutters={true}>
                {isMobile ?
                    <>
                        <Grid margin={'0 10px 0 10px'}  >
                            <CategoryMenu width={55} height={55} margin={'0 5px 0 5px'}/>
                            <Advertisement width={mobileWidth} height={137} margin={'10px 0 0 0'}/>
                            <CreatePost width={mobileWidth}/>
                            <ContentList width={mobileWidth} title='인기글' />
                            <ContentList width={mobileWidth} title='최신글' />
                        </Grid>
                    </>
                    :
                    <>
                        <Mbti />
                        <CategoryMenu width={70} height={70} margin={'20px 20px 20px 0'}/>
                        <Advertisement width={webWidth} height={227}/>
                        <CreatePost width={webWidth} />
                        <ContentList width={webWidth} title='인기글'/>
                        <ContentList width={webWidth} title='최신글'/>
                    </>
                }
            </Container>
        </>
    );
};

export default MainContent;
