import EmptyLayout from '@components/layout/EmptyLayout';
import RectangleButtonLink from '@components/links/RectangleButtonLink';
import Age from '@components/signup/Age';
import { useRecoilState } from 'recoil';
import { registerStore } from '../../src/store/registerStore';

interface AgePageProps {
}

const AgePage = ({}: AgePageProps) => {
    const [state, setState] = useRecoilState(registerStore);

    const setAge = (age: number) => {
        setState(s => ({ ...s, age }));
    };

    return (
        <>
            <Age age={state.age} setAge={setAge} />

            <RectangleButtonLink href={'/register/welcome'}
                                 disabled={!state.age}
                                 sx={{ position: 'fixed', bottom: '0', textAlign: 'center' }}>
                다음
            </RectangleButtonLink>
        </>
    );
};

AgePage.getLayout = EmptyLayout;

export default AgePage;
