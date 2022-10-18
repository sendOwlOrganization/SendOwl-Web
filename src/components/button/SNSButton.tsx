import InstagramIcon from "@components/icons/InstagramIcon";
import Label from "@components/label/Label";
import KakaoTalkIcon from "@components/icons/KakaoTalkIcon";
import FacebookIcon from "@components/icons/FacebookIcon";
import ReportIcon from "@components/icons/ReportIcon";
import {styled} from "@mui/material";
import {MLAB_THEME} from "@styles/mlabTheme";

const ButtonContainer = styled('div')`
  display: flex;
`

const ButtonCSS = styled('div')`
  width: 70px;
  height: 54px;
  margin-left: 1rem;
  background-color: ${MLAB_THEME.white};
  border-radius: 16px;
  left: 8.33%;
  right: 8.33%;
  top: 8.33%;
  bottom: 8.33%;
  padding: 16px 25px 16px 25px;
`

const SNSButton = () => {
    return (
        <>
            <ButtonContainer>
                <ButtonCSS>{<InstagramIcon color={'gray'} colorkey={700}/>}</ButtonCSS>
                <ButtonCSS>{<FacebookIcon color={'gray'} colorkey={700}/>}</ButtonCSS>
                <ButtonCSS>{<KakaoTalkIcon color={'gray'} colorkey={700}/>}</ButtonCSS>
                <ButtonCSS>{<ReportIcon color={'gray'} colorkey={700}/>}</ButtonCSS>
            </ButtonContainer>

        </>
    )
}

export default SNSButton;