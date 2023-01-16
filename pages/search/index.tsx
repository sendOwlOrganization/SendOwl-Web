import {getBoards} from '@api/index';
import {BoardDetails} from '@api/types/boards';
import BoardPreviewLink from '@components/board/board-preview-link';
import {MBTI_LIST} from '@mocks/mbti';
import {Card, CardContent, Stack, Typography} from '@mui/material';
import {GetServerSideProps} from 'next';

interface SearchPageProps {
    query: string;
    results: BoardDetails[];
}

const SearchPage = ({results, query}: SearchPageProps) => {

    return (
        <>
            <Card elevation={0} sx={{marginBottom: 2}}>
                <CardContent>
                    <Typography align={'center'} fontWeight={'normal'} variant={'h1'}>
                        검색 : <Typography variant={'h1'} component={'span'}>{query}</Typography>
                    </Typography>
                </CardContent>
            </Card>

            <Stack spacing={2}>
                {results.map(r => <BoardPreviewLink key={r.id}
                                                    id={r.id}
                                                    title={r.title}
                                                    preview={r.content}
                                                    user={{
                                                        mbti: MBTI_LIST[r.id % MBTI_LIST.length],
                                                        nickName: 'test',
                                                        id: r.id,
                                                    }}
                                                    hasVote={false}
                                                    category={'category'}
                                                    likeCount={0}
                                                    commentCount={0}
                                                    date={r.regDate}/>)}
            </Stack>
        </>
    );
};

export const getServerSideProps: GetServerSideProps<SearchPageProps> = async ({req, res, query}) => {
    const q = query['query'] ? query['query'].toString() : '';
    // FIXME: search boards with query
    const t = await getBoards(1, 0, 20, 10);
    return {
        props: {
            results: t.data?.boards || [],
            query: q,
        },
    };
};

export default SearchPage;
