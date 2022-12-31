import {styled} from '@mui/material';
import {MBTI_LIST} from "@mocks/mbti";

const Container = styled('div')`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;


const Scroll= styled('div')`
  display: flex;
  flex-direction: row;
  align-items: end;
  animation: bannerScroll 20s linear infinite;
  @keyframes bannerScroll {
    0% {
      transform: translateX(45%);
    }
    100% {
      transform: translateX(-45%);
    }
  };
`;
interface MbtiScrollProps {
}

const MbtiScroll = (props: MbtiScrollProps) => {
    const mbti_list = MBTI_LIST;

    return (
        <Container>
            <Scroll>
                {
                    mbti_list.map((mbti) => <img key={mbti} src={`/character/${mbti.toLowerCase()}.svg`} />)
                }
            </Scroll>
        </Container>
    );
};

export default MbtiScroll;