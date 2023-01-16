import SvgIcon, { SvgIconProps } from '@components/icons/SvgIcon';

const CommentIcon = (props: SvgIconProps) => (
    <SvgIcon {...props} width={20} height={20}>
        <path
            xmlns='http://www.w3.org/2000/svg'
            d='M5.07568 16.3533L0.666513 17.3333L1.64651 12.9242C1.00112 11.717 0.664452 10.3689 0.666513 8.99999C0.666513 4.39749 4.39735 0.666656 8.99985 0.666656C13.6023 0.666656 17.3332 4.39749 17.3332 8.99999C17.3332 13.6025 13.6023 17.3333 8.99985 17.3333C7.63097 17.3354 6.28286 16.9987 5.07568 16.3533Z'
        />
    </SvgIcon>
);

export default CommentIcon;
