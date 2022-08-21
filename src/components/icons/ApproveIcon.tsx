import { MLAB_THEME } from '@styles/mlabTheme';

interface ApproveIconProps {
    color?: 'black' | 'white' | 'green' | 'gray' | 'purple';
}

const colors = {
    black: MLAB_THEME.black,
    white: MLAB_THEME.white,
    green: MLAB_THEME.green[500],
    gray: MLAB_THEME.gray[500],
    purple: MLAB_THEME.purple[500],
};

const ApproveIcon = ({ color = 'black' }: ApproveIconProps) => {
    return (
        <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none'>
            <path
                d='M18.71 7.21a.999.999 0 0 0-1.42 0l-7.45 7.46-3.13-3.14A1.023 1.023 0 0 0 5.29 13l3.84 3.84a1 1 0 0 0 1.42 0l8.16-8.16a.999.999 0 0 0 0-1.47z'
                fill={colors[color]} />
        </svg>
    );
};

export default ApproveIcon;