import SocialLoginButtons from '@components/login/SocialLoginButtons';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
    title: 'components/login/SocialLoginButtons',
    component: SocialLoginButtons,
} as ComponentMeta<typeof SocialLoginButtons>;

const Template: ComponentStory<typeof SocialLoginButtons> = (args) => <SocialLoginButtons {...args} />;

export const Example = Template.bind({});
