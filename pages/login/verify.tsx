import { postOauth2 } from '@api/index';
import EmptyLayout from '@components/layout/EmptyLayout';
import { signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { sessionStore } from '../../src/store/sessionStore';

const useLogin = () => {
    const nextSession = useSession();
    const [_, setSession] = useRecoilState(sessionStore);
    const router = useRouter();

    useEffect(() => {
        if (nextSession.data?.accessToken) {
            (async () => {
                const { data, error, headers } = await postOauth2(
                    nextSession.data.accessToken,
                    nextSession.data.provider
                );
                if (!data || error || !headers || !headers['access-token']) {
                    setSession({
                        isAuthenticated: false,
                    });
                    await signOut();
                } else {
                    const { alreadyJoined, alreadySetted, userRes } = data;
                    setSession({
                        isAuthenticated: true,
                        user: {
                            id: userRes.id,
                            mbti: userRes.mbti,
                            email: userRes.email,
                            age: userRes.age,
                            nickName: userRes.nickName,
                            gender: userRes.gender,
                        },
                        token: headers['access-token'],
                    });
                    if (!alreadySetted || !alreadyJoined) {
                        await router.push('/register/mbti');
                    } else {
                        await router.push('/');
                    }
                }
            })();
        }
    }, [nextSession.data, router, setSession]);
};
const VerifyLogin = () => {
    useLogin();
    return <>로그인중...</>;
};

VerifyLogin.getLayout = EmptyLayout;

export default VerifyLogin;
