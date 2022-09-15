import SvgIcon, { SvgIconProps } from '@components/icons/SvgIcon';

const MeatballMenuIcon = (props: SvgIconProps) => (
    <SvgIcon{...props} width={16} height={4}>
        <path xmlns='http://www.w3.org/2000/svg'
              d='M1.75 0.75C1.0625 0.75 0.5 1.3125 0.5 2C0.5 2.6875 1.0625 3.25 1.75 3.25C2.4375 3.25 3 2.6875 3 2C3 1.3125 2.4375 0.75 1.75 0.75ZM14.25 0.75C13.5625 0.75 13 1.3125 13 2C13 2.6875 13.5625 3.25 14.25 3.25C14.9375 3.25 15.5 2.6875 15.5 2C15.5 1.3125 14.9375 0.75 14.25 0.75ZM8 0.75C7.3125 0.75 6.75 1.3125 6.75 2C6.75 2.6875 7.3125 3.25 8 3.25C8.6875 3.25 9.25 2.6875 9.25 2C9.25 1.3125 8.6875 0.75 8 0.75Z'
        />
    </SvgIcon>
);

export default MeatballMenuIcon;