import Slide from '@components/animations/Slide';
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
            <Slide direction={'up'}
                   height={'1rem'}
                   appear={appear}
                   in={appear}
                   mountOnEnter
                   timeout={100}
                   unmountOnExit>
                <ApproveIcon color={'white'} />
            </Slide>
        </Container>
    );
};

export default BalanceGameWidgetCheckIcon;