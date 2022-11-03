import { getBoardDetails } from '@api/index';
import BookmarkIcon from '@components/icons/BookmarkIcon';
import BookmarkIconOutlined from '@components/icons/BookmarkIconOutlined';
import MoreIcon from '@components/icons/MoreIcon';
import EmptyLayout from '@components/layout/EmptyLayout';
import BackNavigationBar from '@components/navigations/global-navigation-bar-small/BackNavigationBar';
import { OutputData } from '@editorjs/editorjs';
import { Box, Typography } from '@mui/material';
import { GetServerSideProps } from 'next';
import dynamic from 'next/dynamic';
import { Suspense, useState } from 'react';

interface BoardPageProps {
    board: {
        title: string;
        content: OutputData;
        regDate: string;
        user: {
            id: number;
            nickName: string;
            mbti: string;
            profileImage: string;
        }
    };
}

const Editor = dynamic(() => import('@components/editorjs/Editor'), {
    ssr: false,
    suspense: true,
});

const BoardPage = ({ board }: BoardPageProps) => {
    const date = new Date(board.regDate);
    const [isBookmarked, setIsBookmarked] = useState(false);

    return (
        <>
            <BackNavigationBar title={'MBTI'}>
                {isBookmarked
                    ? <BookmarkIcon scale={0.875} onClick={() => setIsBookmarked(false)} />
                    : <BookmarkIconOutlined color={'gray'} colorKey={600} scale={0.875}
                                            onClick={() => setIsBookmarked(true)} />}
                <MoreIcon scale={0.875} />
            </BackNavigationBar>
            <article>
                <Box component={'header'} sx={{
                    margin: '2.75rem 0',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                }}>
                    <Typography component={'h1'}
                                marginBottom={'0.75rem'}
                                variant={'subtitle2'}
                                fontWeight={'bold'}>
                        {board.title}
                    </Typography>
                    <Typography marginBottom={'0.75rem'}
                                variant={'caption2'}
                                color={theme => theme.palette.gray[500]}
                                fontWeight={'bold'}>
                        {board.user.mbti.toUpperCase()} {board.user.nickName}
                    </Typography>
                    <Typography variant={'caption2'}
                                color={theme => theme.palette.gray[700]}>
                        {date.toLocaleDateString('ko-KR')}
                    </Typography>
                </Box>
                <Suspense fallback={''}>
                    <Editor data={board.content} readOnly />
                </Suspense>
            </article>
        </>
    );
};

BoardPage.getLayout = EmptyLayout;

export const getServerSideProps: GetServerSideProps<BoardPageProps> = async (context) => {
    const queryId = context.query.id;
    let id = 0;
    if (queryId && typeof queryId === 'string') {
        id = parseInt(queryId) || 0;
    }
    const { data, error } = await getBoardDetails(id);

    return {
        props: {
            board: {
                title: data!.title,
                content: JSON.parse(data!.content) as OutputData,
                regDate: data!.regDate,
                user: data!.user,
            },
        },
    };
};

export default BoardPage;