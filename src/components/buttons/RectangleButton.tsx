import styled from '@emotion/styled';

const RectangleButton = styled('button')(({ theme, disabled }) => ({
    width: '100%',
    backgroundColor: disabled
        ? theme.mode === 'dark'
            ? `rgba(${theme.color.pink[600]}, 0.3)`
            : theme.color.pink[200]
        : theme.color.pink[600],
    color: disabled && theme.mode === 'dark' ? theme.color.white[200] : theme.color.white[1000],
    padding: '1rem',
    outline: 'none',
    border: 'none',
    cursor: disabled ? undefined : 'pointer',
    ...theme.typography.subtitle3,
    fontWeight: 'bold',
}));

export default RectangleButton;
