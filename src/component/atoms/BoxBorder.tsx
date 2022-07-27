import { Box, BoxProps, styled } from '@mui/material';

const BoxBorder = styled(Box)<BoxProps>(({ theme }) => ({
    border: '1px solid lightgrey',
    outline: '2px solid white',
    backgroundColor: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '12px',
}));

export default BoxBorder;
