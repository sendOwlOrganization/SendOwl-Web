import SvgIcon, { SvgIconProps } from '@components/icons/SvgIcon';

const ArrowFillUpIcon = (props: SvgIconProps) => {
    return (
        <SvgIcon {...props} width={10} height={6}>
            <path xmlns='http://www.w3.org/2000/svg' d='M5 0.666748L10 5.66675H0L5 0.666748Z' />
        </SvgIcon>
    );
};

export default ArrowFillUpIcon;
