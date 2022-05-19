export interface CommentDto {
    boardId: number;
    email: string;
    parentId?: number;
    content: string;
}