import BoardBannerTitle from '@components/banner/BoardBannerTitle';
import BoardPreviewLink from '@components/board/board-preview-link';
import SNSButton from '@components/button/SNSButton';
import Carousel from '@components/carousel/Carousel';
import BalanceGameIcon from '@components/icons/BalanceGameIcon';
import CommunityIcon from '@components/icons/CommunityIcon';
import InsightIcon from '@components/icons/InsightIcon';
import NoticeIcon from '@components/icons/NoticeIcon';
import ShortcutButton from '@components/links/ShortcutButton';
import MbtiWidget from '@components/widgets/mbti-widget';
import css from '@emotion/css';
import {communityList} from '@mocks/category';
import {imageMocks} from '@mocks/images';
import {Box, Divider, Grid, styled} from '@mui/material';
import {MLAB_ICON_COLORS, MLAB_OPACITY_PALETTE} from '@styles/mlabTheme';
import Footer from '@UI/Footer';
import {ComponentProps, Fragment} from 'react';
import {getPreviewBoards} from "@api/index";

interface HomePageProps {
    // FIXME: 타입 백엔드와 정의 필요
    communityBoards: ComponentProps<typeof BoardPreviewLink>[];
    balanceGameBoards: ComponentProps<typeof BoardPreviewLink>[];
    serviceCenterBoards: ComponentProps<typeof BoardPreviewLink>[];
}

const ShortcutContainer = styled('section')`
  display: grid;
  padding: 0.5rem;
  gap: 0.5rem;

  grid-template-columns: 1fr 1fr;
`;

const BoardContainer = styled('div')(
    ({theme}) => css`
      background-color: ${theme.palette.mode === 'dark'
              ? MLAB_OPACITY_PALETTE.black[600]
              : MLAB_OPACITY_PALETTE.white[900]};
      margin-bottom: 1rem;
    `
);

const Home = ({communityBoards, balanceGameBoards, serviceCenterBoards}: HomePageProps) => {
    return (
        <Box>
            <Carousel data={imageMocks} showPagination/>
            <ShortcutContainer>
                <ShortcutButton
                    href={'#'}
                    icon={<CommunityIcon/>}
                    text={'커뮤니티'}
                    color={MLAB_ICON_COLORS.community}
                />
                <ShortcutButton
                    href={'#'}
                    icon={<BalanceGameIcon/>}
                    text={'밸런스 게임'}
                    color={MLAB_ICON_COLORS.balanceGame}
                />
                <ShortcutButton href={'#'} icon={<InsightIcon/>} text={'인사이트'} color={MLAB_ICON_COLORS.insight}/>
                <ShortcutButton href={'#'} icon={<NoticeIcon/>} text={'공지/이벤트'} color={MLAB_ICON_COLORS.notice}/>
            </ShortcutContainer>
            <BoardContainer>
                <BoardBannerTitle
                    title={communityList.community.name}
                    icon={<communityList.community.icon color={communityList.community.color}/>}
                />
                {communityBoards?.map((b) => (
                    <Fragment key={b.boardId}>
                        <BoardPreviewLink {...b} />
                        <Divider/>
                    </Fragment>
                ))}
            </BoardContainer>
            <BoardContainer>
                <BoardBannerTitle
                    title={communityList.balanceGame.name}
                    icon={<communityList.balanceGame.icon color={communityList.balanceGame.color}/>}
                />
                {balanceGameBoards?.map((b) => (
                    <Fragment key={b.boardId}>
                        <BoardPreviewLink {...b} />
                        <Divider/>
                    </Fragment>
                ))}
            </BoardContainer>
            <BoardContainer>
                <BoardBannerTitle
                    title={communityList.insight.name}
                    icon={<communityList.insight.icon color={communityList.insight.color}/>}
                />
                <Grid>
                    <MbtiWidget user={{mbti: 'ENTP'}} data={[{id: 'ENTP', value: 1000, label: 'ENTP'}]}/>
                </Grid>
            </BoardContainer>
            <BoardContainer>
                <BoardBannerTitle
                    title={communityList.serviceCenter.name}
                    icon={<communityList.serviceCenter.icon color={communityList.serviceCenter.color}/>}
                />
                {serviceCenterBoards?.map((b) => (
                    <Fragment key={b.boardId}>
                        <BoardPreviewLink {...b} />
                        <Divider/>
                    </Fragment>
                ))}
            </BoardContainer>
            <SNSButton/>
            <Footer/>
        </Box>
    );
};

export const getServerSideProps = async () => {

    const {data} = await getPreviewBoards(1, 20, 0, 10);

    if (!data) {
        console.log("error!");
        return {}
    }

    const communityBoards = data
    // const communityBoards = [
    //     {
    //         id: 1,
    //         title: 'Sunt caculaes vitare albus, clemens brabeutaes.',
    //         preview: 'Quadra de lotus capio, visum abaculus!',
    //         user: mockUser,
    //         hasVote: true,
    //         likeCount: 12,
    //         commentCount: 21,
    //         date: '2023-01-12T17:45:22',
    //         imgSrc: 'img',
    //         category: '커뮤니티',
    //     },
    // ]

    return {
        props: {
            communityBoards,
            balanceGameBoards: communityBoards,
            serviceCenterBoards: communityBoards,
        },
    };
};

export default Home;
