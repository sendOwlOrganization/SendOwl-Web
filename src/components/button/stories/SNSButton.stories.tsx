import SNSButton from '@components/button/SNSButton';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import InstagramIcon from '@components/icons/InstagramIcon';

export default {
    title: 'components/button/SNSButton',
    component: SNSButton,
} as ComponentMeta<typeof SNSButton>;

const Template: ComponentStory<typeof SNSButton> = () => <SNSButton />;

export const Default = Template.bind({});
Default.args = {};
