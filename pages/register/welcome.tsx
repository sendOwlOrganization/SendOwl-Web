import { getGoogleLoginDetails, postSetProfile } from '@api/index';
import EmptyLayout from '@components/layout/EmptyLayout';
import RectangleButtonLink from '@components/links/RectangleButtonLink';
import Welcome from '@components/signup/Welcome';
import { useSession } from 'next-auth/react';
import { useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { registerStore } from '../../src/store/registerStore';

interface WelcomePageProps {
}

const WelcomePage = ({}: WelcomePageProps) => {
    const state = useRecoilValue(registerStore);
    const session = useSession();

    useEffect(() => {
        console.log(session);
        if (session.status !== 'authenticated') {
            return;
        }
        // @ts-ignore
        getGoogleLoginDetails(session.data.token.accessToken)
            .then(({ data, headers, error }) => {
                if (data && !data.alreadySetted && headers && headers['accessToken']) {
                    postSetProfile({
                        gender: state.gender,
                        nickName: state.nickname,
                        age: state.age,
                        mbti: state.mbti,
                    }, headers['accessToken'])
                        .then(console.log)
                        .catch(console.error);
                }
            });

    }, [session.status]);


    return (
        <>
            <Welcome nickname={state.nickname} mbti={state.mbti} />
            <RectangleButtonLink href={'/'}
                                 sx={{ position: 'fixed', bottom: '0', textAlign: 'center' }}>
                시작하기
            </RectangleButtonLink>
        </>
    );
};

WelcomePage.getLayout = EmptyLayout;

export default WelcomePage;
