import SvgIcon, { SvgIconProps } from '@components/icons/SvgIcon';

const ArrowLeftIcon = (props: SvgIconProps) => {
    return (
        <SvgIcon {...props} width={20} height={20}>
            <path
                xmlns='http://www.w3.org/2000/svg'
                d='M9.02329 10L13.1483 14.125L11.97 15.3033L6.66663 10L11.97 4.69667L13.1483 5.875L9.02329 10Z'
            />
        </SvgIcon>
    );
};

export default ArrowLeftIcon;
