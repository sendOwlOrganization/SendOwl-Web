export interface ImagePost {
    id: number;
    name: string;
    images: string;
}

export const imageMocks: ImagePost[] = [
    {id: 1, name: 'ad1', images: "/images/ad1.png",
    },
    {id: 2, name: 'ad2', images: '/images/ad2.png',
    },
    {id:3, name: 'ad3', images: '/images/ad3.png',
    },
    {id: 4, name: 'ad4', images: '/images/ad4.png',
    }
];
