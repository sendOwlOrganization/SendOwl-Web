import EmptyLayout from '@components/layout/EmptyLayout';
import RectangleButtonLink from '@components/links/RectangleButtonLink';
import Welcome from '@components/signup/Welcome';
import { useRecoilValue } from 'recoil';
import { registerStore } from '../../src/store/registerStore';

interface WelcomePageProps {
}

const WelcomePage = ({}: WelcomePageProps) => {
    const state = useRecoilValue(registerStore);

    return (
        <>
            <Welcome nickname={state.nickname} />
            <RectangleButtonLink href={'/'}
                                 sx={{ position: 'fixed', bottom: '0', textAlign: 'center' }}>
                시작하기
            </RectangleButtonLink>
        </>
    );
};

WelcomePage.getLayout = EmptyLayout;

export default WelcomePage;
