import FacebookIcon from '@components/icons/FacebookIcon';
import InstagramIcon from '@components/icons/InstagramIcon';
import KakaoTalkIcon from '@components/icons/KakaoTalkIcon';
import ReportIcon from '@components/icons/ReportIcon';
import css from '@emotion/css';
import styled from '@emotion/styled';

const ButtonContainer = styled('div')`
    display: flex;
    justify-content: center;
`;

const ButtonCSS = styled('div')(
    ({ theme }) => css`
        width: 70px;
        height: 54px;
        margin-left: 1rem;
        background-color: ${theme.palette.background.button};
        border-radius: 16px;
        left: 8.33%;
        right: 8.33%;
        top: 8.33%;
        bottom: 8.33%;
        padding: 18px 25px 18px 25px;
    `
);

/**
 * TODO: 적절한 곳으로 옮기기
 * @constructor
 */
const SNSButton = () => {
    return (
        <>
            <ButtonContainer>
                <ButtonCSS>{<InstagramIcon color={'gray'} colorKey={700} />}</ButtonCSS>
                <ButtonCSS>{<FacebookIcon color={'gray'} colorKey={700} />}</ButtonCSS>
                <ButtonCSS>{<KakaoTalkIcon color={'gray'} colorKey={700} />}</ButtonCSS>
                <ButtonCSS>{<ReportIcon color={'gray'} />}</ButtonCSS>
            </ButtonContainer>
        </>
    );
};

export default SNSButton;
