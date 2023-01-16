import { Grid, styled, Typography } from '@mui/material';
import ArrowRightIcon from '@components/icons/ArrowRightIcon';
import { SvgIconProps } from '@components/icons/SvgIcon';

interface BoardBannerProps {
    title: string;
    icon: React.ReactElement<SvgIconProps>;
}

const BoardBannerContainer = styled('div')`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 1rem 0 1rem;

    & > * {
        display: flex;
    }
`;

const BoardBannerTitle = ({ title, icon }: BoardBannerProps) => {
    return (
        <BoardBannerContainer>
            <Grid>
                {icon}
                <Typography variant={'subtitle3'} fontWeight={'bold'} color={'inherit'} marginLeft={'0.354rem'}>
                    {title}
                </Typography>
            </Grid>
            <ArrowRightIcon />
        </BoardBannerContainer>
    );
};

export default BoardBannerTitle;
