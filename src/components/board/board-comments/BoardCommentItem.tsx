import HeartIcon from '@components/icons/HeartIcon';
import { Box, Stack, Typography } from '@mui/material';
import { formatDate } from '@tools/date';
import { Comment } from './Comment';

interface BoardCommentItemProps {
    comment: Comment;
}

const BoardCommentItem = ({ comment }: BoardCommentItemProps) => {
    return (
        <div>
            <Box sx={theme => ({
                padding: '0.75rem',
                backgroundColor: theme.palette.mode === 'light'
                    ? theme.palette.gray[100]
                    : theme.palette.gray[900],
                borderRadius: '0.5rem',
            })}>
                <Stack spacing={0.5} direction={'row'} alignItems={'baseline'}>
                    <Typography variant={'caption1'}
                                fontWeight={'bold'}>{comment.user.mbti} {comment.user.nickName}</Typography>
                    <Typography variant={'caption2'}
                                color={theme => theme.palette.gray[500]}>{formatDate(comment.regDate)}</Typography>
                </Stack>
                <Typography variant={'body3'}>
                    {comment.content}
                </Typography>
            </Box>
            <Box display={'flex'} alignItems={'center'} padding={'0.25rem'} marginBottom={'1rem'}>
                <Typography variant={'caption2'}
                            fontWeight={'bold'}
                            color={theme => theme.palette.gray[500]}>
                    답글
                </Typography>
                <Typography variant={'caption2'}
                            fontWeight={'bold'}
                            color={theme => theme.palette.gray[500]}
                            marginLeft={'0.75rem'}>
                    좋아요
                </Typography>
                <Box display={'flex'}
                     marginLeft={'auto'}
                     alignItems={'center'}>
                    <HeartIcon color={'pink'} colorKey={600} scale={0.75} />
                    <Typography variant={'caption1'}
                                marginLeft={'0.125rem'}
                                fontWeight={'bold'}
                                color={theme => theme.palette.gray[500]}>

                        ??
                    </Typography>
                </Box>
            </Box>
        </div>
    );
};

export default BoardCommentItem;