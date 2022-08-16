import { useTheme } from '@mui/material';

interface AngleRightBigIconProps {
    color?: 'default' | 'grey';
}

const AngleRightBigIcon = ({ color = 'default' }: AngleRightBigIconProps) => {
    const theme = useTheme();
    return (
        <svg width='24' height='24' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
            <path
                d='M15.5 11.3 9.9 5.6c-.4-.4-1-.4-1.4 0-.4.4-.4 1 0 1.4l4.9 4.9-4.9 4.9c-.2.2-.3.4-.3.7 0 .6.4 1 1 1 .3 0 .5-.1.7-.3l5.7-5.7c.3-.2.3-.8-.1-1.2z'
                fill={color === 'default' ? theme.palette.grey1.main : theme.palette.grey4.main} />
        </svg>
    );
};

export default AngleRightBigIcon;