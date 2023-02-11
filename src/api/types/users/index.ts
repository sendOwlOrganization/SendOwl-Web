import { MbtiType } from '@mocks/mbti';

export interface UsersSetProfileResponse {
    id: number;
    nickName: string;
    age: number;
    mbti: MbtiType;
    gender: 'MALE' | 'FEMALE';
    email: string;
}

export interface UserMeResponse {
    id: number;
    nickName: string;
    age: number;
    mbti: MbtiType;
    gender: 'MALE' | 'FEMALE';
    email: string;
    introduction: string;
    profileImage: string;
}
