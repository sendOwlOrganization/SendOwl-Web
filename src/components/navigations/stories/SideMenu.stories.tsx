import SideMenu from '@components/navigations/side-menu/SideMenu';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
    title: 'components/navigations/SideMenu',
    component: SideMenu,
} as ComponentMeta<typeof SideMenu>;

const Template: ComponentStory<typeof SideMenu> = (args) => <SideMenu {...args} />;

export const Example = Template.bind({});
Example.args = {};
