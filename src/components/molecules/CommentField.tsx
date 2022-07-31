import { CommentDto } from '@_types/CommentDto';
import { Button, Fade, Stack, TextField } from '@mui/material';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

interface CommentFieldProps {
    boardId: number;
    parentId?: number;
}

const CommentField = ({ boardId, parentId }: CommentFieldProps) => {
    const [showButtons, setShowButtons] = useState<boolean>(false);
    const { register, handleSubmit, watch, resetField } = useForm<CommentDto>({
        defaultValues: {
            boardId,
            parentId,
            email: 'fixme',
            content: '',
        },
    });

    const onSubmit = handleSubmit((data) => {
        // TODO: send request to back
        alert(JSON.stringify(data));
    });

    const onFocusField = () => {
        setShowButtons(true);
    };

    const onBlurField = () => {
        if (watch('content').length) {
            return;
        }
        setShowButtons(false);
    };

    const onCancel = () => {
        resetField('content');
        setShowButtons(false);
    };

    return (
        <form onSubmit={onSubmit}>
            <TextField label={'댓글을 남겨주세요'}
                       onFocus={onFocusField}
                       fullWidth
                       {...register('content', { required: '댓글을 작성해주세요', onBlur: onBlurField })} />

            <Fade in={showButtons}>
                <Stack sx={{ marginTop: '4px' }} spacing={1} direction={'row'} justifyContent={'right'}>
                    <Button onClick={onCancel}>취소</Button>
                    <Button variant={'contained'} type={'submit'} disableElevation>댓글</Button>
                </Stack>
            </Fade>

        </form>
    );
};

export default CommentField;