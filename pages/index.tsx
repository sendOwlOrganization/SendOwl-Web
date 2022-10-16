import {Card, CardContent, Grid, styled, Typography, useMediaQuery, useTheme} from '@mui/material';
import NextLink from 'next/link';
import Carousel from "@components/carousel/carousel/Carousel";
import {imageMocks} from "@mocks/images";
import ShortcutButton from "@components/links/ShortcutButton";
import CommunityIcon from "@components/icons/CommunityIcon";
import {MLAB_ICON_COLORS, MLAB_OPACITY_PALETTE, MLAB_PALETTE} from "@styles/mlabTheme";
import BalanceGameIcon from "@components/icons/BalanceGameIcon";
import InsightIcon from "@components/icons/InsightIcon";
import NoticeIcon from "@components/icons/NoticeIcon";
import BannerTitle from "@components/banner/BannerTitle";
import BoardPreviewLink from "@components/board/board-preview-link";
import {useEffect, useState} from "react";
import ArrowRightIcon from "@components/icons/ArrowRightIcon";
import css from "@emotion/css";
import SearchIcon from "@components/icons/SearchIcon";
import BoardBannerTitle from "@components/banner/BoardBannerTitle";

interface HomePageProps {
}

const useIsMobile = () => {
    const [isMobile, setIsMobile] = useState(false);

    const mobile = useMediaQuery( "(max-width: 767px)");
    useEffect(() => {
        setIsMobile(mobile);
    }, [mobile]);

    return isMobile
}

const ShortcutContainer = styled('div')`
  display: flex;
  flex-wrap: wrap;
  padding: 0.5rem;
  
  & > *{
    margin: 0.5rem;
  }
`

const BoardContainer = styled('div')(({theme}) => css`
  background-color: ${theme.palette.mode === 'dark' ? MLAB_OPACITY_PALETTE.black[600] : MLAB_OPACITY_PALETTE.white[900]};
  margin-bottom: 1rem;
`)

const Home = ({}: HomePageProps) => {
    const isMobile = useIsMobile();
    const theme = useTheme();

    return (
        <>
            {isMobile ?
            <>
                <Grid marginTop={'56px'} position={"absolute"}>
                    <Carousel data={imageMocks} check={true}/>
                    <ShortcutContainer>
                        <ShortcutButton href={"#"} icon={<CommunityIcon/>} text={'커뮤니티'} color={MLAB_ICON_COLORS.community}/>
                        <ShortcutButton href={"#"} icon={<BalanceGameIcon/>} text={'밸런스 게임'} color={MLAB_ICON_COLORS.balanceGame}/>
                        <ShortcutButton href={"#"} icon={<InsightIcon/>} text={'인사이트'} color={MLAB_ICON_COLORS.insight}/>
                        <ShortcutButton href={"#"} icon={<NoticeIcon/>} text={'공지/이벤트'} color={MLAB_ICON_COLORS.notice}/>
                    </ShortcutContainer>
                    <BoardContainer>
                        <BoardBannerTitle title={'커뮤니티'} color={'pink'}/>
                        <BoardPreviewLink id={1} title={'게시글 제목'} preview={'Lorem Ipsum 은 단순히 인쇄 및 조판 산업의 더미 텍스트입니다.'} user={{id: 1,nickName: '유저', mbti: 'ENTJ'}} isVote={true} category={'커뮤니티'} likeCount={123} commentCount={21} date={'2022-08-18T17:45:22'} />
                        <BoardPreviewLink id={1} title={'게시글 제목'} preview={'Lorem Ipsum 은 단순히 인쇄 및 조판 산업의 더미 텍스트입니다.'} user={{id: 1,nickName: '유저', mbti: 'ENTJ'}} isVote={true} category={'커뮤니티'} likeCount={123} commentCount={21} date={'2022-08-18T17:45:22'} />
                        <BoardPreviewLink id={1} title={'게시글 제목'} preview={'Lorem Ipsum 은 단순히 인쇄 및 조판 산업의 더미 텍스트입니다.'} user={{id: 1,nickName: '유저', mbti: 'ENTJ'}} isVote={true} category={'커뮤니티'} likeCount={123} commentCount={21} date={'2022-08-18T17:45:22'} />
                    </BoardContainer>
                    <BoardContainer>
                        <BoardBannerTitle title={'밸런스게임'} color={'blue'}/>
                        <BoardPreviewLink id={1} title={'게시글 제목'} preview={'Lorem Ipsum 은 단순히 인쇄 및 조판 산업의 더미 텍스트입니다.'} user={{id: 1,nickName: '유저', mbti: 'ENTJ'}} isVote={false} likeCount={123} commentCount={21} date={'2022-10-16T17:45:22'} imgSrc={'img'}/>
                        <BoardPreviewLink id={1} title={'게시글 제목'} preview={'Lorem Ipsum 은 단순히 인쇄 및 조판 산업의 더미 텍스트입니다.'} user={{id: 1,nickName: '유저', mbti: 'ENTJ'}} isVote={false} likeCount={123} commentCount={21} date={'2022-10-16T17:45:22'} imgSrc={'img'}/>
                        <BoardPreviewLink id={1} title={'게시글 제목'} preview={'Lorem Ipsum 은 단순히 인쇄 및 조판 산업의 더미 텍스트입니다.'} user={{id: 1,nickName: '유저', mbti: 'ENTJ'}} isVote={false} likeCount={123} commentCount={21} date={'2022-10-16T17:45:22'} imgSrc={'img'}/>
                    </BoardContainer>
                </Grid>
                </> :
                <Card elevation={0}>
                    <CardContent>
                        <Typography align={'center'} variant={'h1'} gutterBottom>
                            홈
                        </Typography>
                        <NextLink href={'/login'} passHref>
                            <Typography component={'a'} display={'block'} color={'primary.main'} align={'center'}
                                        variant={'h2'}>
                                임시 로그인 페이지 링크
                            </Typography>
                        </NextLink>
                    </CardContent>
                </Card>
            }
        </>
    );
};

export default Home;
