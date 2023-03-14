import { Typography } from '@components/mlab-ds';
import css from '@emotion/css';
import styled from '@emotion/styled';

const Container = styled('div', {
    shouldForwardProp: (name) => name !== 'close',
})<{ close: boolean }>(
    ({ theme, close }) => css`
        display: inline-flex;
        align-items: center;
        border-radius: 1rem;
        color: ${theme.palette.text.primary};
        background-color: ${theme.mode === 'dark' ? theme.color.gray[900] : theme.color.gray[100]};
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
            background-color: ${theme.mode === 'dark' ? theme.color.gray[800] : theme.color.gray[200]};
        }

        :active {
            background-color: ${theme.mode === 'dark' ? theme.color.gray[700] : theme.color.gray[300]};
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
                    <Typography as={'span'} variant={'body'}>
                        {label}
                    </Typography>
                </ClickableArea>
            ) : (
                <Typography as={'span'} variant={'body'}>
                    {label}
                </Typography>
            )}
        </Container>
    );
};

export default Chip;
