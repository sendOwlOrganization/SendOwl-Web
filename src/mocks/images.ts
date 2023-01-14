export interface ImagePost {
    id: number;
    name: string;
    src: string;
}

export const imageMocks: ImagePost[] = [
    {
        id: 1, name: 'ad1', src: '/images/ad1.png',
    },
    {
        id: 2, name: 'ad2', src: '/images/ad2.png',
    },
    {
        id: 3, name: 'ad3', src: '/images/ad3.png',
    },
    {
        id: 4, name: 'ad4', src: '/images/ad4.png',
    },
];
