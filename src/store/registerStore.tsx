import { atom } from 'recoil';

interface RegisterState {
    nickname: string;
    mbti: string;
    age: number;
    gender: string;
}

export const registerStore = atom<RegisterState>({
    key: 'register',
    default: {
        nickname: '',
        mbti: '',
        age: 0,
        gender: '',
    },
});
