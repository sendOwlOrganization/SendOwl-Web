import SvgIcon, { SvgIconProps } from '@components/icons/SvgIcon';

const ArrowRightIcon = (props: SvgIconProps) => {
    return (
        <SvgIcon {...props} width={20} height={20}>
            <path
                xmlns='http://www.w3.org/2000/svg'
                d='M10.9767 10L6.85168 5.875L8.03002 4.69667L13.3334 10L8.03002 15.3033L6.85168 14.125L10.9767 10Z'
            />
        </SvgIcon>
    );
};

export default ArrowRightIcon;
