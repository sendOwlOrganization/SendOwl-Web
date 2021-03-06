import BoardCategoryList from '@organisms/board-category-list/BoardCategoryList';
import * as React from 'react';

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
    categories: BoardCategory[];
    boards: Board[];
}


export default function MainContent({ categories, boards }: BoardCategoryListProps) {
    return (
        <>
            {categories.map((category) => (
                <BoardCategoryList
                    key={category.id}
                    title={category.name}
                    boards={boards}
                />
            ))}
        </>
    );
}
