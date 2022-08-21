import SideCategoryListLink from '@components/navigations/SideCategoryListLink';
import { Card, Divider, styled } from '@mui/material';
import { useState } from 'react';

interface SideCategoryListProps {
    all: number;
    mine: number;
    saved: number;
    mbti: number;
    vote: number;
    meme: number;
}

const Container = styled(Card)`
  padding: 16px 32px;
`;


const SideCategoryList = ({
                              all,
                              mine,
                              saved,
                              mbti,
                              vote,
                              meme,
                          }: SideCategoryListProps) => {

    // FIXME based on current url with useRouter()
    const [active, setActive] = useState<string>('전체');
    return (
        <Container elevation={0} onClick={(e) => {
            // FIXME
            setActive((e.target as any).innerText);
        }}>
            <SideCategoryListLink label={'전체 게시판'} count={all} href={'#'} active={active.includes('전체')} />
            <Divider sx={{ margin: '8px 0' }} />
            <SideCategoryListLink label={'내가 쓴 게시물'} count={mine} href={'#'} active={active.includes('내가')} />
            <SideCategoryListLink label={'저장한 게시물'} count={saved} href={'#'} active={active.includes('저장한')} />
            <Divider sx={{ margin: '8px 0' }} />
            <SideCategoryListLink label={'MBTI'} count={mbti} href={'#'} active={active.includes('MBTI')} />
            <SideCategoryListLink label={'투표'} count={vote} href={'#'} active={active.includes('투표')} />
            <SideCategoryListLink label={'밈/짤'} count={meme} href={'#'} active={active.includes('밈')} />
        </Container>
    );
};

export default SideCategoryList;