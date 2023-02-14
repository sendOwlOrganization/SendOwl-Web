import SvgIcon, { SvgIconProps } from '@components/icons/SvgIcon';

const HeartOutlinedIcon = (props: SvgIconProps) => (
    <SvgIcon {...props} width={18} height={16}>
        <path
            xmlns='http://www.w3.org/2000/svg'
            d='M12.75 0.5C15.2817 0.5 17.3334 2.58333 17.3334 5.5C17.3334 11.3333 11.0834 14.6667 9.00002 15.9167C6.91669 14.6667 0.666687 11.3333 0.666687 5.5C0.666687 2.58333 2.75002 0.5 5.25002 0.5C6.80002 0.5 8.16669 1.33333 9.00002 2.16667C9.83335 1.33333 11.2 0.5 12.75 0.5ZM9.77835 13.5033C10.5125 13.04 11.175 12.5792 11.795 12.0858C14.2792 10.1108 15.6667 7.9525 15.6667 5.5C15.6667 3.53333 14.3859 2.16667 12.75 2.16667C11.8534 2.16667 10.8834 2.64167 10.1784 3.345L9.00002 4.52333L7.82169 3.345C7.11669 2.64167 6.14669 2.16667 5.25002 2.16667C3.63335 2.16667 2.33335 3.54667 2.33335 5.5C2.33335 7.95333 3.72169 10.1108 6.20419 12.0858C6.82502 12.5792 7.48752 13.04 8.22169 13.5025C8.47085 13.66 8.71752 13.8108 9.00002 13.9792C9.28252 13.8108 9.52919 13.66 9.77835 13.5033Z'
        />
    </SvgIcon>
);

export default HeartOutlinedIcon;
