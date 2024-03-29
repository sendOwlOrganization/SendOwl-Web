import ArrowLeftIcon from '@components/icons/ArrowLeftIcon';
import EmptyLayout from '@components/layout/EmptyLayout';
import RectangleButtonLink from '@components/links/RectangleButtonLink';
import Age from '@components/signup/Age';
import Header from '@components/signup/Header';
import { useRouter } from 'next/router';
import { useRecoilState } from 'recoil';
import { registerStore } from '../../src/store/registerStore';

interface AgePageProps {}

const AgePage = ({}: AgePageProps) => {
    const [state, setState] = useRecoilState(registerStore);
    const router = useRouter();

    const setAge = (age: number) => {
        setState((s) => ({ ...s, age }));
    };

    return (
        <>
            <Header>
                <ArrowLeftIcon width={20} height={20} disableHoverBackground clickable onClick={() => router.back()} />
            </Header>
            <Age age={state.age} setAge={setAge} />

            <RectangleButtonLink
                href={'/register/welcome'}
                disabled={!state.age}
                sx={{ position: 'fixed', bottom: '0', textAlign: 'center' }}>
                다음
            </RectangleButtonLink>
        </>
    );
};

AgePage.getLayout = EmptyLayout;

export default AgePage;
