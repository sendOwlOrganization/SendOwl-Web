import { styled, Button, ButtonProps } from '@mui/material';

const OutlinedButton = styled(Button)<ButtonProps>(({ theme }) => ({
    color: theme.palette.text.primary,
    backgroundColor: theme.palette.background.default,
    border: `1.5px solid ${theme.palette.grey[500]}`,
    borderRadius: `5px`,
    fontWeight: 'bold',
    '&:hover': {
        backgroundColor: theme.palette.background.default,
        borderColor: theme.palette.grey[500],
    },
    paddingTop: '2px',
    paddingBottom: '2px',
    width: '80px',
}));

export default OutlinedButton;
