import CloseIcon from '@components/icons/CloseIcon';
import { Box, css, styled, Typography } from '@mui/material';

const Container = styled('div', {
    shouldForwardProp: (name) => name !== 'close',
})<{ close: boolean }>(
    ({ theme, close }) => css`
        display: inline-flex;
        align-items: center;
        border-radius: 1rem;
        color: ${theme.palette.text.primary};
        background-color: ${theme.palette.mode === 'dark' ? theme.palette.gray[900] : theme.palette.gray[100]};
        padding: ${close ? '4px 32px 4px 12px' : '4px 12px'};
        ${close && 'position: relative;'}
    `
);

const ClickableArea = styled('button', {
    shouldForwardProp: (name) => name !== 'close',
})<{ close: boolean }>(
    ({ theme, close }) => css`
        outline: none;
        border: none;
        display: flex;
        margin: ${close ? '-4px -32px -4px -12px' : '-4px -12px'};
        align-items: center;
        border-radius: 1rem;
        color: inherit;
        background-color: transparent;
        padding: ${close ? '4px 32px 4px 12px' : '4px 12px'};
        cursor: pointer;

        :hover {
            background-color: ${theme.palette.mode === 'dark' ? theme.palette.gray[800] : theme.palette.gray[200]};
        }

        :active {
            background-color: ${theme.palette.mode === 'dark' ? theme.palette.gray[700] : theme.palette.gray[300]};
        }
    `
);

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
            {!!onClick ? (
                <ClickableArea onClick={onClick} close={close}>
                    <Typography component={'span'} lineHeight={1.76} variant={'body1'}>
                        {label}
                    </Typography>
                </ClickableArea>
            ) : (
                <Typography component={'span'} lineHeight={1.76} variant={'body1'}>
                    {label}
                </Typography>
            )}
            {
                // FIXME: need to fix icon position and svg
                close && (
                    <Box position={'absolute'} right={8} bottom={4}>
                        <CloseIcon onClick={onClose} roundedBorder spacing={-1} />
                    </Box>
                )
            }
        </Container>
    );
};

export default Chip;
