export interface LoginDetail {
    alreadyJoined: boolean;
    alreadySetted: boolean;
    userRes: {
        id: number;
        nickName: string;
        mbti: string;
        gender: string;
        introduction: string;
        profileImage: string;
    };
}
