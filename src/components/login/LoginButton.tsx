import Link from 'next/link';
import OutlinedButton from '../../component/UI/atoms/OutlinedButton';

interface LoginButtonProps {
}

const LoginButton = ({}: LoginButtonProps) => {
    return (
        <>
            <Link href='/login'>
                <a>
                    <OutlinedButton>로그인</OutlinedButton>
                </a>
            </Link>
        </>
    );
};

export default LoginButton;
