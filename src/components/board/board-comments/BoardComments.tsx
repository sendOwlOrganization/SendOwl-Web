import BoardCommentItem from '@components/board/board-comments/BoardCommentItem';
import HeartOutlinedIcon from '@components/icons/HeartOutlinedIcon';
import SendIcon from '@components/icons/SendIcon';
import Input from '@components/input/Input';
import { Box, Stack } from '@mui/material';
import useThemeMode from '@tools/useThemeMode';
import { Comment } from './Comment';

interface BoardCommentsProps {
    comments: Comment[];
}

const BoardComments = ({ comments }: BoardCommentsProps) => {
    const { mode } = useThemeMode();
    return (
        <>
            <Box component={'section'} sx={{ padding: '0 1rem' }}>
                {comments.map((c) => (
                    <BoardCommentItem key={c.id} comment={c} />
                ))}
            </Box>
            <Stack
                spacing={1}
                direction={'row'}
                alignItems={'center'}
                sx={(theme) => ({
                    position: 'fixed',
                    bottom: 0,
                    width: '100%',
                    top: 'auto',
                    border: `1px solid ${
                        theme.palette.mode === 'light' ? theme.palette.gray[100] : theme.palette.gray[900]
                    }`,
                    padding: '0.5rem 1rem 0.5rem 1.125rem',
                    backgroundColor:
                        theme.palette.mode === 'light' ? theme.palette.common.white : theme.palette.gray[900],
                })}>
                <HeartOutlinedIcon color={'gray'} colorKey={mode === 'light' ? 200 : 600} />
                <Input
                    placeholder={'test'}
                    endAdornment={
                        <SendIcon disableHoverBackground color={'gray'} colorKey={mode === 'light' ? 300 : 600} />
                    }
                />
            </Stack>
        </>
    );
};

export default BoardComments;
