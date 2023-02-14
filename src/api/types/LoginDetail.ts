import { MbtiType } from '@mocks/mbti';

export interface LoginDetail {
    alreadyJoined: boolean;
    alreadySetted: boolean;
    userRes: {
        id: number;
        nickName: string;
        mbti: MbtiType;
        gender: 'MALE' | 'FEMALE';
        age: number;
        email: string;
    };
}
