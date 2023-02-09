import { getGoogleLoginDetails, postSetProfile } from '@api/index';
import EmptyLayout from '@components/layout/EmptyLayout';
import RectangleButtonLink from '@components/links/RectangleButtonLink';
import Welcome from '@components/signup/Welcome';
import { useSession } from 'next-auth/react';
import { useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { registerStore } from '../../src/store/registerStore';
import { sessionStore } from '../../src/store/sessionStore';

interface WelcomePageProps {}

const WelcomePage = ({}: WelcomePageProps) => {
    const state = useRecoilValue(registerStore);
    const [sessionState, setSessionState] = useRecoilState(sessionStore);
    const session = useSession();

    useEffect(() => {
        if (session.status !== 'authenticated') {
            return;
        }
        (async () => {
            const { data, headers, error } = await getGoogleLoginDetails(session.data.token.accessToken);
            if (!(data && !data.alreadySetted && headers && headers['access-token'])) {
                console.error('fixme');
                return;
            }
            const profile = await postSetProfile(
                {
                    gender: state.gender,
                    nickName: state.nickname,
                    age: state.age,
                    mbti: state.mbti,
                },
                headers['access-token']
            );
            if (!profile.data || profile.error) {
                console.error('fixme');
                return;
            }
            const user = profile.data;
            setSessionState((s) => ({
                isAuthenticated: true,
                user: {
                    ...s.user,
                    ...user,
                    // @ts-ignore
                    email: session.data.user.email,
                },
            }));
        })();
    }, [session.status]);

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
