import { styled } from '@mui/material';
import { MLAB_OPACITY_PALETTE } from '@styles/mlabTheme';
import { rgba } from 'polished';

const RectangleButton = styled('button')(({ theme, disabled }) => ({
    width: '100%',
    backgroundColor: disabled
        ? theme.palette.mode === 'dark'
            ? rgba(theme.palette.pink[600]!, 0.3)
            : theme.palette.pink[200]
        : theme.palette.pink[600],
    color: disabled && theme.palette.mode === 'dark'
        ? MLAB_OPACITY_PALETTE.white[200]
        : theme.palette.common.white,
    padding: '1rem',
    outline: 'none',
    border: 'none',
    ...theme.typography.subtitle3,
    fontWeight: 'bold',
}));

export default RectangleButton;