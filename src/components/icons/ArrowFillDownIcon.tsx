import SvgIcon, { SvgIconProps } from '@components/icons/SvgIcon';

const ArrowFillDownIcon = (props: SvgIconProps) => {
    return <SvgIcon {...props} width={10} height={6}>
        <path xmlns='http://www.w3.org/2000/svg'
              d='M5 5.33325L0 0.333252H10L5 5.33325Z' />
    </SvgIcon>;
};

export default ArrowFillDownIcon;