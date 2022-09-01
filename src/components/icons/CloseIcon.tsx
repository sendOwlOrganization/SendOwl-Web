import SvgIcon, { SvgIconProps } from '@components/icons/SvgIcon';

const CloseIcon = (props: SvgIconProps) => {
    return (
        <SvgIcon {...props}>
            <path xmlns='http://www.w3.org/2000/svg'
                  d='m12 10.586 4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636l4.95 4.95z' />
        </SvgIcon>
    );
};

export default CloseIcon;