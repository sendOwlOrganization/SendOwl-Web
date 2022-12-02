import RectangleButton from '@components/buttons/RectangleButton';
import ArrowLeftIcon from '@components/icons/ArrowLeftIcon';
import Age from '@components/signup/Age';
import Mbti from '@components/signup/Mbti';
import Welcome from '@components/signup/Welcome';
import { MBTI_LIST } from '@mocks/mbti';
import { styled } from '@mui/material';
import { useEffect, useState } from 'react';

interface SignupFormProps {

}

const Header = styled('header')(({ theme }) => ({
    padding: '1rem 0.25rem',
    display: 'flex',
    alignItems: 'center',
}));

const SignupForm = (props: SignupFormProps) => {
    const [mbti, setMbti] = useState<string>('');
    const [nickName, setNickName] = useState<string>('');
    const [age, setAge] = useState<number>(10);
    const [step, setStep] = useState<number>(0);

    const hasPreviousStep = Boolean(step);
    const hasNextStep = 0 <= step && step <= 1;

    useEffect(() => {
        setNickName(`활기찬 ${mbti}`);
    }, [mbti]);


    return (
        <section>
            {hasPreviousStep && hasNextStep && (
                <Header>
                    <ArrowLeftIcon width={20} height={20} disableHoverBackground clickable
                                   onClick={() => setStep(step => step - 1)} />
                </Header>
            )}
            {step === 0 && <Mbti mbti={mbti} setMbti={setMbti} />}
            {step === 1 && <Age age={age} setAge={setAge} />}
            {/* gender */}
            {/* nickname */}
            {step === 2 && <Welcome nickname={nickName} />}
            {hasNextStep && (
                <RectangleButton sx={{ position: 'fixed', bottom: '0' }}
                                 disabled={
                                     (step === 0 && !MBTI_LIST.map(mbti => mbti.toString()).includes(mbti))
                                     || (step === 1 && !age)
                                 }
                                 onClick={() => setStep(step => step + 1)}>
                    다음
                </RectangleButton>
            )}

        </section>
    );
};

export default SignupForm;