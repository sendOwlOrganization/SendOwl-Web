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
import { communityList } from '@mocks/category';
import { imageMocks } from '@mocks/images';
import { Box, Divider, Grid, styled } from '@mui/material';
import { MLAB_ICON_COLORS, MLAB_OPACITY_PALETTE } from '@styles/mlabTheme';
import Footer from '@UI/Footer';

interface HomePageProps {
}

const ShortcutContainer = styled('div')`
  display: flex;
  flex-wrap: wrap;
  padding: 0.5rem;

  & > * {
    margin: 0.5rem;
  }
`;

const BoardContainer = styled('div')(({ theme }) => css`
  background-color: ${theme.palette.mode === 'dark' ? MLAB_OPACITY_PALETTE.black[600] : MLAB_OPACITY_PALETTE.white[900]};
  margin-bottom: 1rem;
`);

const Home = ({}: HomePageProps) => {
    return (
        <Box>
            <Carousel data={imageMocks} showPagination />
            <ShortcutContainer>
                <ShortcutButton href={'#'} icon={<CommunityIcon />} text={'커뮤니티'}
                                color={MLAB_ICON_COLORS.community} />
                <ShortcutButton href={'#'} icon={<BalanceGameIcon />} text={'밸런스 게임'}
                                color={MLAB_ICON_COLORS.balanceGame} />
                <ShortcutButton href={'#'} icon={<InsightIcon />} text={'인사이트'}
                                color={MLAB_ICON_COLORS.insight} />
                <ShortcutButton href={'#'} icon={<NoticeIcon />} text={'공지/이벤트'}
                                color={MLAB_ICON_COLORS.notice} />
            </ShortcutContainer>
            <BoardContainer>
                <BoardBannerTitle title={communityList.community.name} icon={<communityList.community.icon
                    color={communityList.community.color} />} />
                <BoardPreviewLink id={1} title={'게시글 제목'}
                                  preview={'Lorem Ipsum 은 단순히 인쇄 및 조판 산업의 더미 텍스트입니다.'}
                                  user={{ id: 1, nickName: '유저', mbti: 'ENTJ' }} isVote={true}
                                  category={'커뮤니티'} likeCount={123} commentCount={21}
                                  date={'2023-01-12T17:45:22'} />
                <Divider />
                <BoardPreviewLink id={1} title={'게시글 제목'}
                                  preview={'Lorem Ipsum 은 단순히 인쇄 및 조판 산업의 더미 텍스트입니다.'}
                                  user={{ id: 1, nickName: '유저', mbti: 'ENTJ' }} isVote={true}
                                  category={'커뮤니티'} likeCount={123} commentCount={21}
                                  date={'2023-01-12T17:45:22'} />
                <Divider />
                <BoardPreviewLink id={1} title={'게시글 제목'}
                                  preview={'Lorem Ipsum 은 단순히 인쇄 및 조판 산업의 더미 텍스트입니다.'}
                                  user={{ id: 1, nickName: '유저', mbti: 'ENTJ' }} isVote={true}
                                  category={'커뮤니티'} likeCount={123} commentCount={21}
                                  date={'2023-01-12T17:45:22'} />
            </BoardContainer>
            <BoardContainer>
                <BoardBannerTitle title={communityList.balanceGame.name}
                                  icon={<communityList.balanceGame.icon
                                      color={communityList.balanceGame.color} />} />
                <BoardPreviewLink id={1} title={'게시글 제목'}
                                  preview={'Lorem Ipsum 은 단순히 인쇄 및 조판 산업의 더미 텍스트입니다.'}
                                  user={{ id: 1, nickName: '유저', mbti: 'ENTJ' }} isVote={false}
                                  likeCount={123} commentCount={21} date={'2023-01-12T17:45:22'}
                                  imgSrc={'img'} />
                <Divider />
                <BoardPreviewLink id={1} title={'게시글 제목'}
                                  preview={'Lorem Ipsum 은 단순히 인쇄 및 조판 산업의 더미 텍스트입니다.'}
                                  user={{ id: 1, nickName: '유저', mbti: 'ENTJ' }} isVote={false}
                                  likeCount={123} commentCount={21} date={'2023-01-12T17:45:22'}
                                  imgSrc={'img'} />
                <Divider />
                <BoardPreviewLink id={1} title={'게시글 제목'}
                                  preview={'Lorem Ipsum 은 단순히 인쇄 및 조판 산업의 더미 텍스트입니다.'}
                                  user={{ id: 1, nickName: '유저', mbti: 'ENTJ' }} isVote={false}
                                  likeCount={123} commentCount={21} date={'2023-01-12T17:45:22'}
                                  imgSrc={'img'} />
            </BoardContainer>
            <BoardContainer>
                <BoardBannerTitle title={communityList.insight.name} icon={<communityList.insight.icon
                    color={communityList.insight.color} />} />
                <Grid>
                    <MbtiWidget user={{ mbti: 'ENTP' }}
                                data={[{ id: 'ENTP', value: 1000, label: 'ENTP' }]} />
                </Grid>
            </BoardContainer>
            <BoardContainer>
                <BoardBannerTitle title={communityList.serviceCenter.name}
                                  icon={<communityList.serviceCenter.icon
                                      color={communityList.serviceCenter.color} />} />
                <BoardPreviewLink id={1} title={'게시글 제목'}
                                  preview={'Lorem Ipsum 은 단순히 인쇄 및 조판 산업의 더미 텍스트입니다.'}
                                  user={{ id: 1, nickName: '유저', mbti: 'ENTJ' }} isVote={false}
                                  likeCount={123} commentCount={21} date={'2023-01-12T17:45:22'} />
                <Divider />
                <BoardPreviewLink id={1} title={'게시글 제목'}
                                  preview={'Lorem Ipsum 은 단순히 인쇄 및 조판 산업의 더미 텍스트입니다.'}
                                  user={{ id: 1, nickName: '유저', mbti: 'ENTJ' }} isVote={false}
                                  likeCount={123} commentCount={21} date={'2023-01-12T17:45:22'} />
                <Divider />
                <BoardPreviewLink id={1} title={'게시글 제목'}
                                  preview={'Lorem Ipsum 은 단순히 인쇄 및 조판 산업의 더미 텍스트입니다.'}
                                  user={{ id: 1, nickName: '유저', mbti: 'ENTJ' }} isVote={false}
                                  likeCount={123} commentCount={21} date={'2023-01-12T17:45:22'} />
            </BoardContainer>
            <SNSButton />
            <Footer />
        </Box>
    );
};

export default Home;
