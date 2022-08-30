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

const Template: ComponentStory<typeof Carousel> = (args) => (
    <Carousel {...args} />
);

const dataMock = [
    {id: 1, images: 'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
    },
    {id: 2, images: 'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
    }
];

export const Example = Template.bind({});
Example.args = {
    data: dataMock,
};