import { Box, Grid, GridProps, Stack, styled } from '@mui/material';
import Link from 'next/link';

const GNB = styled(Grid)<GridProps>(({ theme }) => ({
    color: theme.palette.text.primary,
    display: 'flex',
    padding: '10px',
    '&:hover': {
        color: theme.palette.primary.main,
        borderBottom: '3px solid rgba(125,178,255,1)',
    },
}));

const Menu = () => {
    return <></>;
};

export default Menu;
