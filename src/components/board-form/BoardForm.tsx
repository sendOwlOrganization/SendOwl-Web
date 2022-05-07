import { TextField } from '@mui/material';
import { useForm } from 'react-hook-form';

interface BoardFormProps {

}

const BoardForm = ({}: BoardFormProps) => {
    const { register, handleSubmit, control, formState } = useForm();

    const onSubmit = () => {

    };

    return (
        <form>
            <TextField required
                       id={'title'}
                       label={'제목'}
                       size={'small'}
                       margin={'dense'}
                       {...register('title')}
                       error={!!formState.errors['title']}
                       helperText={formState.errors['title']}/>
            <TextField required
                       id={'content'}
                       label={'내용'}
                       size={'small'}
                       margin={'dense'}
                       {...register('content')}
                       error={!!formState.errors['content']}
                       helperText={formState.errors['content']}/>
        </form>
    );
};

export default BoardForm;