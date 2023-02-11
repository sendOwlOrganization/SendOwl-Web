import OutlinedButton from '@components/UI/atoms/OutlinedButton';
import Link from 'next/link';

interface LoginButtonProps {}

const LoginButton = ({}: LoginButtonProps) => {
    return (
        <>
            <Link href='/login' legacyBehavior>
                <a>
                    <OutlinedButton>로그인</OutlinedButton>
                </a>
            </Link>
        </>
    );
};

export default LoginButton;
