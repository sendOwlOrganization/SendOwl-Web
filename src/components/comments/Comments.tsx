import { Comment as CommentType, ParentComment } from '@api/types/comments';
import HeartIcon from '@components/icons/HeartIcon';
import ReplyIcon from '@components/icons/ReplyIcon';
import { Box, styled, Typography } from '@mui/material';
import { formatDate } from '@tools/date';

interface CommentsProps {
    comments: ParentComment[];
}

interface CommentProps {
    isRoot?: boolean;
    comment: CommentType & { children?: CommentType[] };
}

const Comment = ({ comment, isRoot }: CommentProps) => {
    return (
        <>
            <CommentContainer>
                <Box flexGrow={1}>
                    <Box display={'flex'} alignItems={'baseline'}>
                        <Typography
                            variant={'caption1'}
                            component={'span'}
                            marginRight={'0.25rem'}
                            fontWeight={400}
                            color={(theme) => theme.palette.pink[600]}>
                            {comment.user.mbti}
                        </Typography>
                        <Typography
                            variant={'caption1'}
                            marginRight={'0.25rem'}
                            color={(theme) => theme.palette.gray[1000]}
                            component={'span'}>
                            {comment.user.nickName}
                        </Typography>{' '}
                        <Typography
                            variant={'caption2'}
                            component={'span'}
                            fontWeight={400}
                            color={(theme) => theme.palette.gray[500]}>
                            {formatDate(comment.regDate)}
                        </Typography>
                    </Box>
                    <Typography
                        display={'flex'}
                        margin={'0.25rem 0'}
                        variant={'body3'}
                        color={(theme) => theme.palette.gray[1000]}>
                        {comment.content}
                    </Typography>
                    <Box display={'flex'}>
                        <ReplyButton>답글</ReplyButton>
                    </Box>
                </Box>
                <Box
                    padding={'0 1rem'}
                    display={'flex'}
                    flexDirection={'column'}
                    alignItems={'center'}
                    justifyContent={'center'}
                    minWidth={'2.5rem'}>
                    <HeartIcon color={'pink'} colorKey={600} />
                    <Typography
                        variant={'caption1'}
                        fontWeight={'bold'}
                        color={(theme) => theme.palette.pink[600]}
                        align={'center'}>
                        {comment.commentLikeCount}
                    </Typography>
                </Box>
            </CommentContainer>
            {isRoot && comment.children?.length && (
                <ChildCommentsContainer>
                    {comment.children.map((child) => (
                        <ChildCommentItemContainer key={child.id}>
                            <ReplyIcon scale={0.625} color={'gray'} colorKey={300} sx={{ marginRight: '1rem' }} />
                            <Comment comment={child} />
                        </ChildCommentItemContainer>
                    ))}
                </ChildCommentsContainer>
            )}
            {isRoot && <Divider />}
        </>
    );
};

const CommentContainer = styled('div')`
    display: flex;
    width: 100%;
    align-items: center;
`;

const ReplyButton = styled('button')`
    border: none;
    padding: 0;
    background-color: transparent;
    font-size: 0.625rem;
    color: ${({ theme }) => theme.palette.gray[500]};
`;

const Divider = styled('hr')`
    margin: 1rem 0;
    border: none;
    border-top: 1px solid ${({ theme }) => theme.palette.gray[100]};
`;

const ChildCommentsContainer = styled('ol')`
    list-style: none;
    padding-left: 0;

    & > li {
        &:last-of-type {
            margin-bottom: 0;
        }
    }
`;

const ChildCommentItemContainer = styled('li')`
    display: flex;
    width: 100%;
    align-items: center;
    margin-bottom: 0.5rem;
`;

const Comments = ({ comments }: CommentsProps) => {
    return (
        <section>
            {comments.map((parent) => (
                <Comment key={parent.id} comment={parent} isRoot />
            ))}
        </section>
    );
};

export default Comments;
