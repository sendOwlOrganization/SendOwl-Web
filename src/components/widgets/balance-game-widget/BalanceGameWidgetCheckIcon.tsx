import Slide from '@components/animations/Slide';
import ApproveIcon from '@components/icons/ApproveIcon';
import { Box } from '@mui/material';

interface BalanceGameWidgetCheckIconProps {
    appear: boolean;
}

const BalanceGameWidgetCheckIcon = ({ appear }: BalanceGameWidgetCheckIconProps) => {
    return (
        <Box height={'2rem'} paddingBottom={'0.25rem'}>
            <Slide direction={'up'}
                   height={'1rem'}
                   appear={appear}
                   in={appear}
                   mountOnEnter
                   timeout={100}
                   unmountOnExit>
                <ApproveIcon color={'white'} />
            </Slide>
        </Box>
    );
};

export default BalanceGameWidgetCheckIcon;