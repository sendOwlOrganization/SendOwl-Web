import { PagedResponse } from '../pagination/PagedResponse';

export interface BoardDetails {
    id: number;
    title: string;
    content: string;
    regDate: string;
    hit: number;
    user: {
        id: number,
        nickName: string,
        profileImg: string,
    };
}

export interface BoardsResponse extends PagedResponse {
    boards: BoardDetails[];
}
