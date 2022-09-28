import {css, Grid, styled, Typography} from "@mui/material";
import CommunityIcon from "@components/icons/CommunityIcon";
import ArrowRightIcon from "@components/icons/ArrowRightIcon";
import {MlabColorType} from "@styles/mlabTheme";

interface BoardBannerProps {
    title: string;
    color: MlabColorType;
}

const BoardBannerContainer = styled('div')`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1rem 0 1rem;
  
  & > * {
    display: flex;
  }
`

const BoardBannerTitle = ({title, color}: BoardBannerProps) => {
    return (
        <BoardBannerContainer>
            <Grid>
                <CommunityIcon color={color} />
                <Typography variant={'subtitle3'} fontWeight={'bold'} color={'inherit'} marginLeft={'0.354rem'}>{title}</Typography>
            </Grid>
            <ArrowRightIcon/>
        </BoardBannerContainer>
    );
}

export default BoardBannerTitle;