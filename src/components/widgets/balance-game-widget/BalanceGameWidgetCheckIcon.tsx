import ApproveIcon from '@components/icons/ApproveIcon';
import { styled } from '@mui/material';

interface BalanceGameWidgetCheckIconProps {
    appear: boolean;
}

const Container = styled('div')`
    height: 2rem;
    padding-bottom: 0.25rem;

    & * {
        transition: none;
    }
`;

const BalanceGameWidgetCheckIcon = ({ appear }: BalanceGameWidgetCheckIconProps) => {
    return (
        <Container>
            <ApproveIcon color={'white'} />
        </Container>
    );
};

export default BalanceGameWidgetCheckIcon;
