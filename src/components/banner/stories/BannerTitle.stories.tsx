import BannerTitle from '@components/banner/BannerTitle';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
    title: 'components/banner/BannerTitle',
    component: BannerTitle,
} as ComponentMeta<typeof BannerTitle>;

const Template: ComponentStory<typeof BannerTitle> = (args) => (
    <BannerTitle {...args} />
);

export const 기본 = Template.bind({});
기본.args = {
    children: '배너 제목입니다',
};

export const 링크 = Template.bind({});
링크.args = {
    children: '배너 제목입니다',
    href: '#',
};