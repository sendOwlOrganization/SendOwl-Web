import SvgIcon, { SvgIconProps } from '@components/icons/SvgIcon';

const ArrowUpIcon = (props: SvgIconProps) => {
    return (
        <SvgIcon {...props} width={20} height={20}>
            <path
                xmlns='http://www.w3.org/2000/svg'
                d='M9.99999 9.02333L5.87499 13.1483L4.69666 11.97L9.99999 6.66667L15.3033 11.97L14.125 13.1483L9.99999 9.02333Z'
            />
        </SvgIcon>
    );
};

export default ArrowUpIcon;
