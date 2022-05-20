export interface User {
    id: number;
    isActive: boolean;
    email: string;
    nickname: string;
}

export const userMocks: User[] = [
    {
        id: 1,
        isActive: true,
        email: 'test@test.com',
        nickname: '좋아요',
    },
    {
        id: 2,
        isActive: true,
        email: 'admin@sendowl.com',
        nickname: 'Super Admin',
    },
];