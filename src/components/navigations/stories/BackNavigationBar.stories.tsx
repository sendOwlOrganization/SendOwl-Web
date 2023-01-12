import BackNavigationBar from '@components/navigations/global-navigation-bar-small/BackNavigationBar';
import { ComponentMeta, ComponentStory } from '@storybook/react';


export default {
    title: 'components/navigations/BackNavigationBar',
    component: BackNavigationBar,
} as ComponentMeta<typeof BackNavigationBar>;

const Template: ComponentStory<typeof BackNavigationBar> = (args) => (
    <>
        <BackNavigationBar {...args} />
    </>
);

export const Example = Template.bind({});
Example.args = {
    title: '타이틀',
    children: <button>button</button>,
};