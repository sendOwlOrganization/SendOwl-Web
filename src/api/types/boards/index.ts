import { OutputData } from '@editorjs/editorjs';
import { PagedResponse } from '../pagination/PagedResponse';

export interface BoardDetails {
    id: number;
    title: string;
    content: string;
    nickname: string;
    regDate: Date;
    hit: number;
    user: {
        id: number;
        nickName: string;
        mbti: string;
        profileImage: string;
    };
    boardLikeCount: number;
}

export interface BoardsResponse extends PagedResponse {
    boards: BoardDetails[];
}

export interface BoardPost {
    title: string;
    editorJsContent: OutputData;
    categoryId: number;
}
