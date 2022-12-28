import MlabLogo from '@components/logo/MlabLogo';
import {ImageList, ImageListItem, styled, Typography} from '@mui/material';
import Image from 'next/image';
import {MBTI_LIST} from "@mocks/mbti";
import {useEffect, useRef} from 'react';

const Container = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const MovingText = styled('span')`
  font-size: 42px;
  animation: hello 1000ms ease infinite;

  @keyframes hello {
    0% {
      transform: rotate(-10deg) translateX(-5px);
    }
    50% {
      transform: rotate(20deg) translateY(-5px);
    }
    100% {
      transform: rotate(-10deg) translateX(-5px);
    }
  }
`;
const MbtiScroll= styled('div')`
  display: flex;
  flex-direction: row;
  align-items: end;
  width: 100%;
  overflow-x: auto;
  &::-webkit-scrollbar{
    display: none;
  }
`;
interface WelcomeProps {
}

const Welcome = (props: WelcomeProps) => {
    const mbti_list = MBTI_LIST;
    const scrollRef = useRef(null);

    useEffect(()=>{
        setInterval(()=>{
            // @ts-ignore
            if(scrollRef.current.scrollLeft >= scrollRef.current.scrollWidth - scrollRef.current.offsetWidth){
                // @ts-ignore
                scrollRef.current.scrollLeft = 0;
                return;
            }
            // @ts-ignore
            scrollRef.current.scrollLeft += 1;
        }, 100)
    })

    return (
        <Container>
            <MovingText>👋</MovingText>
            <Typography variant={'subtitle2'}
                        fontWeight={'bold'}
                        lineHeight={1}>
                반가워요!
            </Typography>
            <MlabLogo />
            <Typography variant={'subtitle3'} fontWeight={'bold'}
                        color={theme => theme.palette.mode === 'dark'
                            ? theme.palette.gray[700]
                            : theme.palette.gray[600]}
                        lineHeight={1}>
                우리가 아는 MBTI의 모든 것
            </Typography>
            <MbtiScroll ref={scrollRef}>
                    {
                        mbti_list.map((mbti, index) =>{
                            let mbtiLower = mbti.toLowerCase();
                            const str = "/character/"+mbtiLower+".svg";
                            return <img key={index} src={str}></img>
                        })
                    }
            </MbtiScroll>
        </Container>
    );
};

export default Welcome;