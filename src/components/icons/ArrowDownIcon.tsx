import SvgIcon, { SvgIconProps } from '@components/icons/SvgIcon';

const ArrowDown = (props: SvgIconProps) => {
    return <SvgIcon {...props} width={20} height={20}>
        <path xmlns='http://www.w3.org/2000/svg'
              d='M9.99999 10.9767L14.125 6.85167L15.3033 8.03L9.99999 13.3333L4.69666 8.03L5.87499 6.85167L9.99999 10.9767Z'
        />
    </SvgIcon>;
};

export default ArrowDown;