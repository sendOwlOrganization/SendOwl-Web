import ArrowLeftIcon from '@components/icons/ArrowLeftIcon';
import EmptyLayout from '@components/layout/EmptyLayout';
import RectangleButtonLink from '@components/links/RectangleButtonLink';
import Gender from '@components/signup/Gender';
import Header from '@components/signup/Header';
import { useRouter } from 'next/router';
import { useRecoilState } from 'recoil';
import { registerStore } from '../../src/store/registerStore';

interface GenderPageProps {
}

const GenderPage = ({}: GenderPageProps) => {
    const [state, setState] = useRecoilState(registerStore);
    const router = useRouter();

    const setGender = (gender: string) => setState(prev => ({ ...prev, gender }));

    const isValid = Boolean(state.gender);

    return (
        <>
            <Header>
                <ArrowLeftIcon width={20} height={20} disableHoverBackground clickable
                               onClick={() => router.back()} />
            </Header>
            <Gender gender={state.gender} setGender={setGender} />

            <RectangleButtonLink href={'/register/age'}
                                 disabled={!isValid}
                                 sx={{ position: 'fixed', bottom: '0', textAlign: 'center' }}>
                다음
            </RectangleButtonLink>
        </>
    );
};

GenderPage.getLayout = EmptyLayout;

export default GenderPage;
