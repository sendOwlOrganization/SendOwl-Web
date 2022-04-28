import { AlternateEmailOutlined, LockOutlined, LoginOutlined } from '@mui/icons-material';
import { Button, InputAdornment, Stack, TextField } from '@mui/material';
import { useForm } from 'react-hook-form';
import { validationRegex } from '../../tools/validation';

interface LoginFormProps {

}

interface LoginProps {
    email: string;
    password: string;
}

const defaultValues: LoginProps = {
    email: '',
    password: '',
};

const LoginForm = ({}: LoginFormProps) => {
    const { register, handleSubmit, formState } = useForm<LoginProps>({
        defaultValues,
    });

    const onSubmit = handleSubmit((data) => {
        // TODO: send request to back
        alert(JSON.stringify(data));
    });

    return (
        <form onSubmit={onSubmit}>
            <Stack spacing={1}>
                <TextField InputProps={{
                    sx: { borderRadius: 0 },
                    startAdornment: (
                        <InputAdornment position={'start'}>
                            <AlternateEmailOutlined fontSize={'small'} />
                        </InputAdornment>),
                }}
                           label={'이메일'}
                           error={!!formState.errors['email']}
                           helperText={formState.errors['email']?.message}
                           {...register('email', {
                               required: '이메일을 입력해주세요',
                               pattern: validationRegex.email,
                           })} />
                <TextField InputProps={{
                    sx: { borderRadius: 0 },
                    startAdornment: (
                        <InputAdornment position={'start'}>
                            <LockOutlined fontSize={'small'} />
                        </InputAdornment>
                    ),
                }}
                           label={'비밀번호'}
                           type={'password'}
                           error={!!formState.errors['password']}
                           helperText={formState.errors['password']?.message}
                           {...register('password', { required: '비밀번호를 입력해주세요' })} />
                <Button size={'large'}
                        variant={'contained'}
                        sx={{ borderRadius: 0 }}
                        disableElevation
                        startIcon={<LoginOutlined fontSize={'small'} />}
                        type={'submit'}>
                    로그인
                </Button>
            </Stack>
        </form>
    );
};

export default LoginForm;