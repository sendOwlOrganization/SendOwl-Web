import { getGoogleLoginDetails, postSetProfile } from '@api/index';
import EmptyLayout from '@components/layout/EmptyLayout';
import RectangleButtonLink from '@components/links/RectangleButtonLink';
import Welcome from '@components/signup/Welcome';
import { useSession } from 'next-auth/react';
import { useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { registerStore } from '../../src/store/registerStore';

interface WelcomePageProps {}

const WelcomePage = ({}: WelcomePageProps) => {
    const state = useRecoilValue(registerStore);
    const session = useSession();

    useEffect(() => {
        if (session.status !== 'authenticated') {
            return;
        }
        (async () => {
            const { data, headers, error } = await getGoogleLoginDetails(session.data.token.accessToken);
            if (data && !data.alreadySetted && headers && headers['access-token']) {
                await postSetProfile(
                    {
                        gender: state.gender,
                        nickName: state.nickname,
                        age: state.age,
                        mbti: state.mbti,
                    },
                    headers['access-token']
                );
            }
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
