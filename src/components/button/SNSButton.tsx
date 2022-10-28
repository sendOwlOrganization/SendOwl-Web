import KakaoTalkIcon from "@components/icons/KakaoTalkIcon";
import FacebookIcon from "@components/icons/FacebookIcon";
import ReportIcon from "@components/icons/ReportIcon";
import {styled} from "@mui/material";
import {MLAB_OPACITY_PALETTE, MLAB_SEMANTIC_PALETTE} from "@styles/mlabTheme";
import css from "@emotion/css";
import InstagramIcon from "@components/icons/InstagramIcon";


const ButtonContainer = styled('div')`
  display: flex;
  justify-content: center;
`

const ButtonCSS = styled('div')(({theme}) => css`
  width: 70px;
  height: 54px;
  margin-left: 1rem;
  background-color: ${theme.palette.mode === 'dark' ? MLAB_OPACITY_PALETTE.black[600] : MLAB_OPACITY_PALETTE.white[900]};
  border-radius: 16px;
  left: 8.33%;
  right: 8.33%;
  top: 8.33%;
  bottom: 8.33%;
  padding: 18px 25px 18px 25px;

`);

const SNSButton = () => {
    return (
        <>
            <ButtonContainer>
                <ButtonCSS>{<InstagramIcon color={'gray'} colorkey={700}/>}</ButtonCSS>
                <ButtonCSS>{<FacebookIcon color={'gray'} colorkey={700}/>}</ButtonCSS>
                <ButtonCSS>{<KakaoTalkIcon color={'gray'} colorkey={700}/>}</ButtonCSS>
                <ButtonCSS>{<ReportIcon color={'negative'}/>}</ButtonCSS>
            </ButtonContainer>
        </>
    )
}

export default SNSButton;