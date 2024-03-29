import SvgIcon, { SvgIconProps } from '@components/icons/SvgIcon';

const HeartIcon = (props: SvgIconProps) => {
    return (
        <SvgIcon {...props} width={16} height={16}>
            <path
                xmlns='http://www.w3.org/2000/svg'
                d='M11 2C13.0253 2 14.6667 3.66667 14.6667 6C14.6667 10.6667 9.66667 13.3333 8 14.3333C6.33334 13.3333 1.33334 10.6667 1.33334 6C1.33334 3.66667 3 2 5 2C6.24 2 7.33334 2.66667 8 3.33333C8.66667 2.66667 9.76 2 11 2Z'
            />
        </SvgIcon>
    );
};

export default HeartIcon;
