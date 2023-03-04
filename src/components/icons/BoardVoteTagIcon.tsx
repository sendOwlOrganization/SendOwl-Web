import SvgIcon, { SvgIconProps } from '@components/icons/SvgIcon';

const BoardVoteTagIcon = (props: SvgIconProps) => (
    <SvgIcon {...props} width={10} height={10}>
        <path xmlns='http://www.w3.org/2000/svg' d='M0.5 5H2.5V9.5H0.5V5ZM7.5 3H9.5V9.5H7.5V3ZM4 0H6V9.5H4V0Z' />
    </SvgIcon>
);

export default BoardVoteTagIcon;
