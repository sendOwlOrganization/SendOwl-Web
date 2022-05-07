import * as React from 'react';
import BoardCategoryList from '../board-category-list/BoardCategoryList';

interface BoardCategory {
    id: number;
    name: string;
}
interface Board {
    id: number;
    category: string;
    title: string;
    likeCount: number;
    commentCount: number;
}
interface BoardCategoryListProps {
    categorys: BoardCategory[];
    boards: Board[];
}

export default function MainContent({
    categorys,
    boards,
}: BoardCategoryListProps) {
    return (
        <>
            {categorys.map((category) => (
                <BoardCategoryList
                    key={category.id}
                    title={category.name}
                    boards={boards}
                />
            ))}
        </>
    );
}
