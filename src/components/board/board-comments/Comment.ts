export interface Comment {
    id: number;
    user: {
        id: number;
        nickName: string;
        mbti: string;
    },
    content: string;
    regDate: Date;
    modDate?: Date;
}