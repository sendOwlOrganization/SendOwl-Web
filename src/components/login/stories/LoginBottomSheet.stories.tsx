import LoginBottomSheet from '@components/login/LoginBottomSheet';
import { useArgs } from '@storybook/addons';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
    title: 'components/login/LoginBottomSheet',
    component: LoginBottomSheet,
} as ComponentMeta<typeof LoginBottomSheet>;


const Template: ComponentStory<typeof LoginBottomSheet> = (args) => {
    const [{ open }, updateArgs] = useArgs();

    const handleOpen = () => {
        updateArgs({ open: true });
    };

    const handleClose = () => {
        updateArgs({ open: false });
    };

    return (
        <>
            <button style={{ cursor: 'pointer' }} onClick={handleOpen}>open</button>
            <LoginBottomSheet open={open} onClose={handleClose} />
        </>
    );
};

export const Example = Template.bind({});
Example.args = {
    open: false,
};