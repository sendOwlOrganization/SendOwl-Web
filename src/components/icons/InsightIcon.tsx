import SvgIcon, { SvgIconProps } from '@components/icons/SvgIcon';

const InsightIcon = (props: SvgIconProps) => (
    <SvgIcon {...props} width={20} height={20}>
        <path
            xmlns='http://www.w3.org/2000/svg'
            d='M1.66675 10.8333H6.66675V17.5H1.66675V10.8333ZM7.50008 2.5H12.5001V17.5H7.50008V2.5ZM13.3334 6.66667H18.3334V17.5H13.3334V6.66667Z'
        />
    </SvgIcon>
);

export default InsightIcon;
