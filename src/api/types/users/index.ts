import { MbtiType } from '@mocks/mbti';

export interface UsersSetProfileResponse extends BaseUser {
    age: number;
    gender: 'MALE' | 'FEMALE';
    email: string;
}

export interface UserMeResponse extends BaseUser {
    age: number;
    gender: 'MALE' | 'FEMALE';
    email: string;
    introduction: string;
}

export interface BaseUser {
    id: number;
    nickName: string;
    mbti: MbtiType;
    profileImage?: string;
}
