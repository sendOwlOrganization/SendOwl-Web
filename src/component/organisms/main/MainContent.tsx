import { Container, Grid, useTheme, Box } from '@mui/material';
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

    return (
        <>
            <Container maxWidth={'md'} disableGutters={true}>
                <Mbti />
                <CategoryMenu />
                <Advertisement />
                <CreatePost />
                <ContentList title='인기글' />
                <ContentList title='최신글' />
            </Container>
        </>
    );
};

export default MainContent;
