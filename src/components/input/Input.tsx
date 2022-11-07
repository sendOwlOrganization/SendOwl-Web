import { styled } from '@mui/material';
import { DetailedHTMLProps, InputHTMLAttributes, ReactNode } from 'react';

interface InputProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    endAdornment?: ReactNode;
}

const StyledInput = styled('input')(({ theme }) => ({
    backgroundColor: 'transparent',
    color: theme.palette.text.primary,
    flexGrow: 2,
    border: 'none',
    ['&::placeholder']: {
        color: theme.palette.mode === 'light'
            ? theme.palette.gray[400]
            : theme.palette.gray[500],
    },
}));

const Container = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'light'
        ? theme.palette.gray[100]
        : theme.palette.gray[800],
    borderRadius: '8px',
    padding: '0.5rem 0.625rem',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
}));

const Input = ({ endAdornment, ...props }: InputProps) => {
    return (
        <Container>
            <StyledInput {...props} />
            {endAdornment}
        </Container>
    );
};

export default Input;