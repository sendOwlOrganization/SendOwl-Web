import { defaultSignUpDto, SignUpDto } from '@_types/SignUpDto';
import { AlternateEmailOutlined, BadgeOutlined, GroupAddOutlined, LockOutlined } from '@mui/icons-material';
import { Box, Button, InputAdornment, TextField } from '@mui/material';
import { validationRegex } from '@tools/validation';
import { RegisterOptions, useForm, UseFormWatch } from 'react-hook-form';

interface SignUpFormProps {
}

type SignUpDtoRegisterOptions = Record<keyof Omit<SignUpDto, 'passwordConfirm'>, RegisterOptions>
    & Record<keyof Pick<SignUpDto, 'passwordConfirm'>, (watch: UseFormWatch<SignUpDto>) => RegisterOptions>

const registerOptions: SignUpDtoRegisterOptions = {
    nickName: {
        required: '닉네임을 입력해주세요',
    },
    introduction: {},
    profileImage: {},
    name: {
        required: '이름을 입력해주세요',
        pattern: validationRegex.name,
    },
    email: {
        required: '이메일을 입력해주세요',
        pattern: validationRegex.email,
    },
    password: {
        required: '비밀번호를 입력해주세요',
        pattern: validationRegex.password,
    },
    passwordConfirm: (watch: UseFormWatch<SignUpDto>): RegisterOptions => ({
        required: '비밀번호를 한번 더 입력해주세요',
        validate: value => value === watch('password') || '비밀번호가 일치 하지 않습니다',
    }),
};

const EmailIcon = (
    <InputAdornment position={'start'}>
        <AlternateEmailOutlined fontSize={'small'} />
    </InputAdornment>
);

const PasswordIcon = (
    <InputAdornment position={'start'}>
        <LockOutlined fontSize={'small'} />
    </InputAdornment>
);

const UserIcon = (
    <InputAdornment position={'start'}>
        <BadgeOutlined fontSize={'small'} />
    </InputAdornment>
);

const SignUpForm = ({}: SignUpFormProps) => {
    const { register, handleSubmit, formState, watch } = useForm<SignUpDto>({
        defaultValues: defaultSignUpDto,
    });

    const onSubmit = handleSubmit((data) => {
        // TODO: send request to back
        alert(JSON.stringify(data));
    });

    return (
        <form onSubmit={onSubmit}>
            <Box display={'flex'} flexDirection={'column'}>

                <TextField InputProps={{ startAdornment: EmailIcon }}
                           sx={{ marginBottom: 1 }}
                           label={'이메일'}
                           required
                           error={!!formState.errors['email']}
                           helperText={formState.errors['email']?.message}
                           {...register('email', registerOptions.email)} />

                <TextField InputProps={{ startAdornment: PasswordIcon }}
                           sx={{ marginTop: 1, marginBottom: 1 }}
                           label={'비밀번호'}
                           type={'password'}
                           required
                           error={!!formState.errors['password']}
                           helperText={formState.errors['password']?.message}
                           {...register('password', registerOptions.password)} />

                <TextField InputProps={{ startAdornment: PasswordIcon }}
                           sx={{ marginTop: 1, marginBottom: 1 }}
                           label={'비밀번호 재확인'}
                           type={'password'}
                           required
                           error={!!formState.errors['passwordConfirm']}
                           helperText={formState.errors['passwordConfirm']?.message}
                           {...register('passwordConfirm', registerOptions.passwordConfirm(watch))} />

                <TextField InputProps={{ startAdornment: UserIcon }}
                           sx={{ marginTop: 5, marginBottom: 1 }}
                           label={'이름'}
                           required
                           error={!!formState.errors['name']}
                           helperText={formState.errors['name']?.message}
                           {...register('name', registerOptions.name)} />

                <TextField InputProps={{ startAdornment: UserIcon }}
                           sx={{ marginTop: 1, marginBottom: 1 }}
                           label={'닉네임'}
                           required
                           error={!!formState.errors['nickName']}
                           helperText={formState.errors['nickName']?.message}
                           {...register('nickName', registerOptions.nickName)} />

                <TextField sx={{ marginTop: 1, marginBottom: 1 }}
                           label={'소개글'}
                           multiline
                           rows={4}
                           error={!!formState.errors['introduction']}
                           helperText={formState.errors['introduction']?.message}
                           {...register('introduction', registerOptions.introduction)} />

                <Button size={'large'}
                        variant={'contained'}
                        sx={{ marginTop: 1 }}
                        disableElevation
                        startIcon={<GroupAddOutlined fontSize={'small'} />}
                        type={'submit'}>
                    회원가입
                </Button>
            </Box>
        </form>
    );
};

export default SignUpForm;