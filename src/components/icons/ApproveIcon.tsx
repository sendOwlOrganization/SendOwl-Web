import SvgIcon, { SvgIconProps } from '@components/icons/SvgIcon';

const ApproveIcon = (props: SvgIconProps) => {
    return (
        <SvgIcon {...props}>
            <path d='M18.71 7.21a.999.999 0 0 0-1.42 0l-7.45 7.46-3.13-3.14A1.023 1.023 0 0 0 5.29 13l3.84 3.84a1 1 0 0 0 1.42 0l8.16-8.16a.999.999 0 0 0 0-1.47z' />
        </SvgIcon>
    );
};

export default ApproveIcon;
