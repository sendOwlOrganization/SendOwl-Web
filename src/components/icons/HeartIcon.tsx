import SvgIcon, { SvgIconProps } from '@components/icons/SvgIcon';

const HeartIcon = (props: SvgIconProps) => {
    return <SvgIcon {...props} width={18} height={16}>
        <path xmlns='http://www.w3.org/2000/svg'
              d='M12.7498 0.5C 15.2815 0.5 17.3332 2.58333 17.3332 5.5C 17.3332 11.3333 11.0832 14.6667 8.99984 15.9167C 6.9165 14.6667 0.666504 11.3333 0.666504 5.5C 0.666504 2.58333 2.74984 0.5 5.24984 0.5C 6.79984 0.5 8.1665 1.33333 8.99984 2.16667C 9.83317 1.33333 11.1998 0.5 12.7498 0.5z'
        />
    </SvgIcon>;
};

export default HeartIcon;