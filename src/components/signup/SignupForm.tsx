import Age from '@components/signup/Age';
import Mbti from '@components/signup/Mbti';
import { useState } from 'react';

interface SignupFormProps {

}


const SignupForm = (props: SignupFormProps) => {
    const [mbti, setMbti] = useState<string>('');
    const [nickName, setNickName] = useState<string>('');
    const [age, setAge] = useState<number>(10);
    const [step, setStep] = useState<number>(0);


    return (
        <>
            <Mbti mbti={mbti} setMbti={setMbti} />
            <Age age={age} setAge={setAge} />
        </>
    );
};

export default SignupForm;