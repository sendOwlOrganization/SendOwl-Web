import { OutputData } from '@editorjs/editorjs';
import { PagedResponse } from '../pagination/PagedResponse';

export interface BoardDetails {
    id: number;
    title: string;
    content: string;
    regDate: string;
    hit: number;
    user: {
        id: number;
        nickName: string;
        mbti: string;
        profileImage: string;
    };
}

export interface BoardsResponse extends PagedResponse {
    boards: BoardDetails[];
}

export interface BoardPost {
    title: string;
    editorJsContent: OutputData,
    categoryId: number;
}