import { getBoardDetails, getComments } from '@api/index';
import { ParentComment } from '@api/types/comments';
import Comments from '@components/comments/Comments';
import BookmarkIcon from '@components/icons/BookmarkIcon';
import BookmarkIconOutlined from '@components/icons/BookmarkIconOutlined';
import MoreIcon from '@components/icons/MoreIcon';
import EmptyLayout from '@components/layout/EmptyLayout';
import BackNavigationBar from '@components/navigations/global-navigation-bar-small/BackNavigationBar';
import { OutputData } from '@editorjs/editorjs';
import { Box, styled, Typography } from '@mui/material';
import { GetServerSideProps } from 'next';
import dynamic from 'next/dynamic';
import { Suspense, useState } from 'react';

interface BoardPageProps {
    board: {
        id: number;
        title: string;
        content: OutputData;
        regDate: string;
        user: {
            id: number;
            nickName: string;
            mbti: string;
            profileImage: string;
        };
    };
    comments: ParentComment[];
}

const Editor = dynamic(() => import('@components/editorjs/Editor'), {
    ssr: false,
    suspense: true,
});

const BoardPage = ({ board, comments }: BoardPageProps) => {
    const date = new Date(board.regDate);
    const [isBookmarked, setIsBookmarked] = useState(false);

    return (
        <Box sx={(theme) => ({ backgroundColor: theme.palette.background.paper })}>
            <BackNavigationBar title={'MBTI'}>
                {isBookmarked ? (
                    <BookmarkIcon scale={0.875} onClick={() => setIsBookmarked(false)} />
                ) : (
                    <BookmarkIconOutlined
                        color={'gray'}
                        colorKey={600}
                        scale={0.875}
                        onClick={() => setIsBookmarked(true)}
                    />
                )}
                <MoreIcon scale={0.875} />
            </BackNavigationBar>
            <Article>
                <Box
                    component={'header'}
                    sx={{
                        margin: '2.75rem 0',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexDirection: 'column',
                    }}>
                    <Typography component={'h1'} marginBottom={'0.75rem'} variant={'subtitle2'} fontWeight={'bold'}>
                        {board.title}
                    </Typography>
                    <Typography
                        marginBottom={'0.75rem'}
                        variant={'caption2'}
                        color={(theme) => theme.palette.gray[500]}
                        fontWeight={'bold'}>
                        {board.user.mbti.toUpperCase()} {board.user.nickName}
                    </Typography>
                    <Typography variant={'caption2'} color={(theme) => theme.palette.gray[700]}>
                        {date.toLocaleDateString('ko-KR')}
                    </Typography>
                </Box>
                <Suspense fallback={''}>
                    <Editor data={board.content} readOnly />
                </Suspense>
            </Article>
            <CommentsSection boardId={board.id} comments={comments} />
        </Box>
    );
};

const Article = styled('article')``;

interface CommentsProps {
    boardId: number;
    comments: ParentComment[];
}

const CommentsSection = ({ boardId, comments }: CommentsProps) => {
    return (
        <CommentsSectionContainer>
            <Comments comments={comments} />
        </CommentsSectionContainer>
    );
};

const CommentsSectionContainer = styled('section')`
    padding: 0 1rem;
`;

BoardPage.getLayout = EmptyLayout;

export const getServerSideProps: GetServerSideProps<BoardPageProps> = async (context) => {
    const queryId = context.query.id;
    let id = 0;
    if (queryId && typeof queryId === 'string') {
        id = parseInt(queryId) || 0;
    }
    const { data, error } = await getBoardDetails(id);
    const comments = await getComments(id);

    return {
        props: {
            board: {
                id: id,
                title: data!.title,
                content: JSON.parse(data!.content) as OutputData,
                regDate: data!.regDate,
                user: data!.user,
            },
            comments: comments.data?.content || [],
        },
    };
};

export default BoardPage;
