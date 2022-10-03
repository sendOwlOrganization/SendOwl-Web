import SvgIcon, { SvgIconProps } from '@components/icons/SvgIcon';

const ReportIcon = (props: SvgIconProps) => {
    return <SvgIcon {...props}>
        <path xmlns='http://www.w3.org/2000/svg'
              d='M3.3333 16.6667V11.6667C3.3333 9.89856 4.03568 8.20287 5.28592 6.95263C6.53616 5.70238 8.23186 5.00001 9.99997 5.00001C11.7681 5.00001 13.4638 5.70238 14.714 6.95263C15.9643 8.20287 16.6666 9.89856 16.6666 11.6667V16.6667H17.5V18.3333H2.49997V16.6667H3.3333ZM4.99997 11.6667H6.66663C6.66663 10.7826 7.01782 9.93477 7.64294 9.30965C8.26806 8.68453 9.11591 8.33334 9.99997 8.33334V6.66667C8.67388 6.66667 7.40211 7.19346 6.46443 8.13114C5.52675 9.06882 4.99997 10.3406 4.99997 11.6667ZM9.16663 1.66667H10.8333V4.16667H9.16663V1.66667ZM16.4816 4.00667L17.66 5.18501L15.8933 6.95251L14.7141 5.77417L16.4816 4.00667ZM2.33997 5.18501L3.5183 4.00667L5.2858 5.77334L4.1083 6.95334L2.33997 5.18501Z'
        />
    </SvgIcon>;
};

export default ReportIcon;