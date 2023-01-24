import Carousel from '@components/carousel/Carousel';

import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
    title: 'components/carousel/Carousel',
    component: Carousel,
    parameters: {
        backgrounds: {
            default: 'white',
        },
    },
} as ComponentMeta<typeof Carousel>;

const Template: ComponentStory<typeof Carousel> = (args) => <Carousel {...args} />;

const dataMock = [
    {
        id: 1,
        name: 'ad1',
        src: '/images/ad1.png',
    },
    {
        id: 2,
        name: 'ad2',
        src: '/images/ad2.png',
    },
    {
        id: 3,
        name: 'ad3',
        src: '/images/ad3.png',
    },
    {
        id: 4,
        name: 'ad4',
        src: '/images/ad4.png',
    },
];

export const Example = Template.bind({});
Example.args = {
    data: dataMock,
};

export const HeroImage = Template.bind({});
HeroImage.args = {
    data: dataMock,
    showPagination: true,
};
