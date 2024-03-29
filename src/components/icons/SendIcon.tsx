import SvgIcon, { SvgIconProps } from '@components/icons/SvgIcon';

const SendIcon = (props: SvgIconProps) => {
    return (
        <SvgIcon {...props} width={18} height={18}>
            <path
                xmlns='http://www.w3.org/2000/svg'
                d='M0.621695 6.76261C0.186695 6.61761 0.182528 6.38345 0.630028 6.23428L16.5359 0.932615C16.9767 0.785948 17.2292 1.03262 17.1059 1.46428L12.5609 17.3693C12.4359 17.8101 12.1817 17.8251 11.995 17.4068L9.00003 10.6668L14 4.00011L7.33336 9.00011L0.621695 6.76261Z'
            />
        </SvgIcon>
    );
};

export default SendIcon;
