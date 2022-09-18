import Pagination from '@components/carousel/pagination/Pagination';

import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
    title: 'components/carousel/Pagination',
    component: Pagination,
    parameters: {
        backgrounds: {
            default: 'white',
        },
    },
} as ComponentMeta<typeof Pagination>;

const Template: ComponentStory<typeof Pagination> = (args) => (
    <Pagination {...args} />
);

const dataMock = [
    {
        id: 1,
        name: 'ad1',
        images: "/images/ad1.png",
    },
    {
        id: 2,
        name: 'ad2',
        images: '/images/ad2.png',
    },
    {
        id:3,
        name: 'ad3',
        images: '/images/ad3.png',
    },
    {
        id: 4,
        name: 'ad4',
        images: '/images/ad4.png',
    }
];

export const Example = Template.bind({});
Example.args = {
    page: 1,
    size: 4,
};