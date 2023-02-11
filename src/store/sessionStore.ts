import { MbtiType } from '@mocks/mbti';
import { atom } from 'recoil';

interface Authenticated {
    isAuthenticated: true;
    token: string;
    user: {
        id: number;
        nickName: string;
        mbti: MbtiType;
        gender: 'MALE' | 'FEMALE';
        age: number;
        email: string;
    };
}

interface NotAuthenticated {
    isAuthenticated: false;
}

type SessionState = Authenticated | NotAuthenticated;

export const sessionStore = atom<SessionState>({
    key: 'session',
    default: {
        isAuthenticated: false,
    },
});
