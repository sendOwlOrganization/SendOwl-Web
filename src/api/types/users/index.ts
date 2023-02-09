import { MbtiType } from '@mocks/mbti';

export interface UsersSetProfileResponse {
    id: number;
    nickName: string;
    age: number;
    mbti: MbtiType;
    gender: 'MALE' | 'FEMALE';
    email: string;
}
