import { postSetProfile } from '@api/index';
import EmptyLayout from '@components/layout/EmptyLayout';
import RectangleButtonLink from '@components/links/RectangleButtonLink';
import Welcome from '@components/signup/Welcome';
import { useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { registerStore } from '../../src/store/registerStore';
import { sessionStore } from '../../src/store/sessionStore';

interface WelcomePageProps {}

const WelcomePage = ({}: WelcomePageProps) => {
    const state = useRecoilValue(registerStore);
    const [session, setSession] = useRecoilState(sessionStore);

    useEffect(() => {
        if (!session.isAuthenticated) {
            return;
        }
        (async () => {
            const profile = await postSetProfile(
                {
                    gender: state.gender,
                    nickName: state.nickname,
                    age: state.age,
                    mbti: state.mbti,
                },
                session.token
            );
            if (!profile.data || profile.error) {
                console.error('fixme');
                return;
            }
            const user = profile.data;
            setSession({
                ...session,
                isAuthenticated: true,
                user: {
                    ...session.user,
                    ...user,
                },
            });
        })();
    }, [session]);

    return (
        <>
            <Welcome nickname={state.nickname} mbti={state.mbti} />
            <RectangleButtonLink href={'/'} sx={{ position: 'fixed', bottom: '0', textAlign: 'center' }}>
                시작하기
            </RectangleButtonLink>
        </>
    );
};

WelcomePage.getLayout = EmptyLayout;

export default WelcomePage;
