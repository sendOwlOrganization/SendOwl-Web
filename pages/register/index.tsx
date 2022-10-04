import { setProfile } from '@api/index';
import { GetServerSideProps } from 'next';
import { signOut } from 'next-auth/react';
import { useForm } from 'react-hook-form';

interface RegisterPageProps {
    token: string;
}

interface SetProfileForm {
    mbti: string;
    nickName: string;
}

const RegisterPage = () => {
    const { register, handleSubmit } = useForm<SetProfileForm>();

    const onSubmit = handleSubmit(async (data) => {
        console.log(data);
        const res = await setProfile({
            mbti: data.mbti,
            nickName: data.nickName,
        }, 'FIXME');
    });

    return (
        <>
            <div>프로필 작성을 완료해주세요!</div>
            <form onSubmit={onSubmit}>
                <label htmlFor={'mbti'}>MBTI</label>
                <input {...register('mbti')} />
                <label htmlFor={'nickName'}>닉네임</label>
                <input {...register('nickName')} />
                <button type={'submit'}>완료</button>
            </form>
            <button onClick={() => signOut()}>로그아웃</button>
        </>
    );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
    return {
        props: {},
    };
};

export default RegisterPage;