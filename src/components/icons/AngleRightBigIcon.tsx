import SvgIcon, { SvgIconProps } from '@components/icons/SvgIcon';

const AngleRightBigIcon = (props: SvgIconProps) => {
    return (
        <SvgIcon {...props}>
            <path
                d='M15.5 11.3 9.9 5.6c-.4-.4-1-.4-1.4 0-.4.4-.4 1 0 1.4l4.9 4.9-4.9 4.9c-.2.2-.3.4-.3.7 0 .6.4 1 1 1 .3 0 .5-.1.7-.3l5.7-5.7c.3-.2.3-.8-.1-1.2z'
            />
        </SvgIcon>
    );
};

export default AngleRightBigIcon;