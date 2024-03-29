import ArrowLeftIcon from '@components/icons/ArrowLeftIcon';
import EmptyLayout from '@components/layout/EmptyLayout';
import RectangleButtonLink from '@components/links/RectangleButtonLink';
import Header from '@components/signup/Header';
import Mbti from '@components/signup/Mbti';
import { MBTI_LIST } from '@mocks/mbti';
import { signOut } from 'next-auth/react';
import { useRecoilState } from 'recoil';
import { registerStore } from '../../src/store/registerStore';

interface MbtiPageProps {}

const MbtiPage = ({}: MbtiPageProps) => {
    const [state, setState] = useRecoilState(registerStore);
    const isValid = ([...MBTI_LIST] as string[]).includes(state.mbti);

    const setMbti = (mbti: string) => {
        setState((s) => ({ ...s, mbti, nickname: `공격적인 ${mbti}` }));
    };

    return (
        <>
            <Header>
                <ArrowLeftIcon width={20} height={20} disableHoverBackground clickable onClick={() => signOut()} />
            </Header>
            <Mbti mbti={state.mbti} setMbti={setMbti} />
            <RectangleButtonLink
                href={'/register/gender'}
                disabled={!isValid}
                sx={{ position: 'fixed', bottom: '0', textAlign: 'center' }}>
                다음
            </RectangleButtonLink>
        </>
    );
};

MbtiPage.getLayout = EmptyLayout;

export default MbtiPage;
