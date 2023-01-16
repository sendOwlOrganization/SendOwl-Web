import SvgIcon, { SvgIconProps } from '@components/icons/SvgIcon';

const MenuIcon = (props: SvgIconProps) => (
    <SvgIcon {...props} width={20} height={20}>
        <path
            xmlns='http://www.w3.org/2000/svg'
            d='M2.5 3.33334H17.5V5H2.5V3.33334ZM2.5 9.16667H17.5V10.8333H2.5V9.16667ZM2.5 15H17.5V16.6667H2.5V15Z'
        />
    </SvgIcon>
);

export default MenuIcon;
