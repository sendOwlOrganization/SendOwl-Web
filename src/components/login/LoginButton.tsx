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
import LoginForm from './LoginForm';

const OutlinedButton = styled(Button)<ButtonProps>(({ theme }) => ({
    color: theme.palette.text.primary,
    backgroundColor: theme.palette.background.default,
    border: `1px solid ${theme.palette.grey[700]}`,
    borderRadius: 0,
    fontWeight: 'bold',
    '&:hover': {
        backgroundColor: theme.palette.background.default,
        borderColor: theme.palette.grey[500],
    },
}));

interface LoginButtonProps {

}

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
            <OutlinedButton onClick={handleOpenLoginModal}>로그인</OutlinedButton>
            <Dialog open={openLoginModal}
                    onClose={handleCloseLoginModal}
                    fullWidth
                    PaperProps={{ sx: { borderRadius: 0 } }}>
                <Box sx={{
                    display: 'flex',
                    padding: 1.5,
                    alignItems: 'center',
                    justifyContent: 'space-between',
                }}>
                    <Typography paddingLeft={1} fontSize={'18px'} fontWeight={'700'} component={'h2'}>
                        로그인
                    </Typography>
                    <IconButton aria-label={'close'} onClick={handleCloseLoginModal}>
                        <Close/>
                    </IconButton>
                </Box>
                <Divider/>
                <DialogContent>
                    <LoginForm/>
                </DialogContent>
            </Dialog>
        </>
    );
};

export default LoginButton;