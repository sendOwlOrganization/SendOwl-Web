import SvgIcon, { SvgIconProps } from '@components/icons/SvgIcon';

const BookmarkIcon = (props: SvgIconProps) => (
    <SvgIcon {...props} width={14} height={18}>
        <path xmlns='http://www.w3.org/2000/svg'
              d='M1.16683 0.666656H12.8335C13.0545 0.666656 13.2665 0.754454 13.4228 0.910734C13.579 1.06701 13.6668 1.27898 13.6668 1.49999V17.4525C13.6669 17.527 13.647 17.6002 13.6092 17.6644C13.5715 17.7286 13.5171 17.7815 13.4519 17.8176C13.3868 17.8536 13.3131 17.8716 13.2386 17.8695C13.1641 17.8675 13.0916 17.8455 13.0285 17.8058L7.00016 14.025L0.971829 17.805C0.908803 17.8446 0.836319 17.8666 0.761914 17.8687C0.68751 17.8708 0.613901 17.8529 0.548742 17.8169C0.483583 17.7809 0.429252 17.7282 0.391398 17.6641C0.353545 17.6 0.333551 17.5269 0.333496 17.4525V1.49999C0.333496 1.27898 0.421294 1.06701 0.577574 0.910734C0.733854 0.754454 0.945816 0.666656 1.16683 0.666656Z'
        />
    </SvgIcon>
);

export default BookmarkIcon;