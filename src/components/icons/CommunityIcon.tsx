import SvgIcon, { SvgIconProps } from '@components/icons/SvgIcon';

const CommunityIcon = (props: SvgIconProps) => {
    return (
        <SvgIcon {...props} width={20} height={21}>
            <path
                xmlns='http://www.w3.org/2000/svg'
                d='M7.167 15h8.53l1.47 1.154V7.5H18a.833.833 0 0 1 .833.833v11.25l-3.712-2.916H8a.833.833 0 0 1-.833-.834V15zm-2.121-1.667L1.333 16.25V3.333a.833.833 0 0 1 .834-.833h12.5a.833.833 0 0 1 .833.833v10H5.046z'
            />
        </SvgIcon>
    );
};

export default CommunityIcon;
