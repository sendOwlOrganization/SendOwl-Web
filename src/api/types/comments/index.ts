import { PagedResponse } from '@api/types/pagination/PagedResponse';
import { BaseUser } from '@api/types/users';

export interface Comment {
    id: number;
    user: BaseUser;
    content: string;
    regDate: string;
    modDate: string;
    commentLikeCount: number;
}

export interface ParentComment extends Comment {
    children: Comment[];
}

export interface CommentsResponse extends PagedResponse {
    content: ParentComment[];
}
