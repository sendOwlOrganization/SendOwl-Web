import { PagedResponse } from '../pagination/PagedResponse';

export interface BoardDetails {
    id: number;
    title: string;
    content: string;
    regDate: string;
    hit: number;
}

export interface BoardsResponse extends PagedResponse {
    boards: BoardDetails[];
}
