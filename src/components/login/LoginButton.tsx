import { Close } from '@mui/icons-material';
import {
    Box,
    Button,
    ButtonProps,
    Dialog,
    DialogContent,
    Divider,
    IconButton,
    styled,
    Typography,
} from '@mui/material';
import { useState } from 'react';
import OutlinedButton from '../../component/atoms/OutlinedButton';
import LoginForm from './LoginForm';

interface LoginButtonProps {}

const LoginButton = ({}: LoginButtonProps) => {
    const [openLoginModal, setOpenLoginModal] = useState<boolean>(false);

    const handleOpenLoginModal = () => {
        setOpenLoginModal(true);
    };

    const handleCloseLoginModal = () => {
        setOpenLoginModal(false);
    };

    return (
        <>
            <OutlinedButton onClick={handleOpenLoginModal}>
                로그인
            </OutlinedButton>
            <Dialog
                open={openLoginModal}
                onClose={handleCloseLoginModal}
                fullWidth>
                <Box
                    sx={{
                        display: 'flex',
                        padding: 1.5,
                        alignItems: 'center',
                        justifyContent: 'space-between',
                    }}>
                    <Typography
                        paddingLeft={1}
                        fontSize={'18px'}
                        fontWeight={'700'}
                        component={'h2'}>
                        로그인
                    </Typography>
                    <IconButton
                        aria-label={'close'}
                        onClick={handleCloseLoginModal}>
                        <Close />
                    </IconButton>
                </Box>
                <Divider />
                <DialogContent>
                    <LoginForm />
                </DialogContent>
            </Dialog>
        </>
    );
};

export default LoginButton;
