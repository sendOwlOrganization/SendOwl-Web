import MenuIcon from '@components/icons/MenuIcon';
import { Drawer } from '@mui/material';
import useThemeMode from '@tools/useThemeMode';
import { useState } from 'react';
import SideMenu from '../side-menu/SideMenu';


const Menu = () => {
    const { isDark } = useThemeMode();
    const [open, setOpen] = useState<boolean>(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <MenuIcon color={'gray'} colorKey={isDark ? 100 : 1000} onClick={handleOpen} />
            <Drawer open={open} onClose={handleClose} anchor={'right'} PaperProps={{
                elevation: 0,
                sx: (theme) => ({
                    backgroundColor: isDark
                        ? theme.palette.common.black
                        : theme.palette.common.white,
                    borderRadius: '1rem 0 0 1rem',
                }),
            }}>
                <SideMenu />
            </Drawer>
        </>
    );
};

export default Menu;
