import { Box, styled } from '@mui/material';
import { MBTI_LIST } from '@mocks/mbti';

const Container = styled('div')`
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow: hidden;
`;

// 화면이 클 때 마지막 요소들이 안보일 수 있어서 3번 복제
const mbtiList = [...MBTI_LIST, ...MBTI_LIST, ...MBTI_LIST];

const MBTI_IMG_SIZE = '180px';

const Scroll = styled('ul')`
    display: flex;
    flex-direction: row;
    animation: banner-scroll 20s linear infinite;
    @keyframes banner-scroll {
        0% {
            transform: translateX(0);
        }
        100% {
            transform: translateX(calc(-${MBTI_IMG_SIZE} * 16));
        }
    } ;
`;
interface MbtiScrollProps {}

const CharacterImage = styled('img')`
    object-fit: scale-down;
`;

const MbtiScroll = (props: MbtiScrollProps) => {
    return (
        <Container>
            <Scroll>
                {mbtiList.map((mbti, i) => (
                    <Box
                        component={'li'}
                        key={`${mbti}-${i}`}
                        sx={{
                            position: 'relative',
                            height: MBTI_IMG_SIZE,
                            width: MBTI_IMG_SIZE,
                            display: 'flex',
                            alignItems: 'end',
                            justifyContent: 'center',
                        }}>
                        <CharacterImage src={`/character/${mbti.toLowerCase()}.svg`} />
                    </Box>
                ))}
            </Scroll>
        </Container>
    );
};

export default MbtiScroll;
