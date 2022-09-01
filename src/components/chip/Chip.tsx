import CloseIcon from '@components/icons/CloseIcon';
import { Box, css, styled, Typography } from '@mui/material';


const Container = styled('div')<{ close: boolean }>(({ theme, close }) => css`
  display: inline-flex;
  align-items: center;
  border-radius: 1rem;
  background-color: ${theme.palette.gray[200]};
  padding: ${close ? '4px 32px 4px 12px' : '4px 12px'};
  ${close && 'position: relative;'}
`);

const ClickableArea = styled('button')<{ close: boolean }>(({ theme, close }) => css`
  outline: none;
  border: none;
  display: flex;
  margin: ${close ? '-4px -32px -4px -12px' : '-4px -12px'};
  align-items: center;
  border-radius: 1rem;
  background-color: transparent;
  padding: ${close ? '4px 32px 4px 12px' : '4px 12px'};
  cursor: pointer;

  :hover {
    background-color: ${theme.palette.gray[300]};
  }

  :active {
    background-color: ${theme.palette.gray[400]};
  }
`);

interface ChipProps {
    label: string;
    onClick?: () => void;
    onClose?: () => void;
}

const Chip = (props: ChipProps) => {
    const { label, onClick, onClose } = props;

    const close = !!onClose;

    return (
        <Container close={close}>
            {
                !!onClick ? (
                    <ClickableArea onClick={onClick} close={close}>
                        <Typography component={'span'} lineHeight={1.76} variant={'body1'}>
                            {label}
                        </Typography>
                    </ClickableArea>
                ) : (
                    <Typography component={'span'} lineHeight={1.76} variant={'body1'}>
                        {label}
                    </Typography>
                )
            }
            {
                close && (
                    <Box position={'absolute'} right={12} bottom={8}>
                        <CloseIcon onClick={onClose} roundedBorder spacing={-1} />
                    </Box>
                )
            }
        </Container>
    );
};

export default Chip;