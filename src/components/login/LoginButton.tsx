import { css, darken, styled } from '@mui/material';

const LoginButton = styled('button', {
    shouldForwardProp: (name) => name !== 'color' && name !== 'backgroundColor',
})<{
    backgroundColor: string;
    border?: string;
    color?: string;
}>(
    ({ color, backgroundColor, border }) => css`
        background-color: ${backgroundColor};
        cursor: pointer;
        border: 1px solid ${border || backgroundColor};
        border-radius: 1rem;
        padding: 0.75rem;
        display: flex;
        align-items: center;
        justify-content: center;
        color: ${color};

        & > *:first-child {
            margin-right: 18px;
        }

        &:hover {
            background-color: ${darken(backgroundColor, 0.1)};
        }

        &:active {
            background-color: ${darken(backgroundColor, 0.2)};
        }
    `
);

export default LoginButton;
