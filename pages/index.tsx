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
import { ComponentProps, Fragment } from 'react';

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

const BoardContainer = styled('div')(({ theme }) => css`
  background-color: ${theme.palette.mode === 'dark' ? MLAB_OPACITY_PALETTE.black[600] : MLAB_OPACITY_PALETTE.white[900]};
  margin-bottom: 1rem;
`);

const Home = ({ communityBoards, balanceGameBoards, serviceCenterBoards }: HomePageProps) => {
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
                <BoardBannerTitle title={communityList.community.name}
                                  icon={<communityList.community.icon color={communityList.community.color} />} />
                {
                    communityBoards?.map(b => <Fragment key={b.id}>
                        <BoardPreviewLink {...b} />
                        <Divider />
                    </Fragment>)
                }
            </BoardContainer>
            <BoardContainer>
                <BoardBannerTitle title={communityList.balanceGame.name}
                                  icon={<communityList.balanceGame.icon color={communityList.balanceGame.color} />} />
                {
                    balanceGameBoards?.map(b => <Fragment key={b.id}>
                        <BoardPreviewLink {...b} />
                        <Divider />
                    </Fragment>)
                }
            </BoardContainer>
            <BoardContainer>
                <BoardBannerTitle title={communityList.insight.name}
                                  icon={<communityList.insight.icon color={communityList.insight.color} />} />
                <Grid>
                    <MbtiWidget user={{ mbti: 'ENTP' }}
                                data={[{ id: 'ENTP', value: 1000, label: 'ENTP' }]} />
                </Grid>
            </BoardContainer>
            <BoardContainer>
                <BoardBannerTitle title={communityList.serviceCenter.name}
                                  icon={<communityList.serviceCenter.icon
                                      color={communityList.serviceCenter.color} />} />
                {
                    serviceCenterBoards?.map(b => <Fragment key={b.id}>
                        <BoardPreviewLink {...b} />
                        <Divider />
                    </Fragment>)
                }
            </BoardContainer>
            <SNSButton />
            <Footer />
        </Box>
    );
};

export const getServerSideProps = async () => {
    // FIXME: 백엔드 호출
    const mockUser = { id: 1, nickName: '공격적인 ENTP', mbti: 'ENTP' };

    const communityBoards = [
        {
            id: 1,
            title: 'Sunt caculaes vitare albus, clemens brabeutaes.',
            preview: 'Quadra de lotus capio, visum abaculus!',
            user: mockUser,
            hasVote: true,
            likeCount: 12,
            commentCount: 21,
            date: '2023-01-12T17:45:22',
            imgSrc: 'img',
            category: '커뮤니티',
        },
        {
            id: 2,
            title: '안녕하세요 제목입니다',
            preview: '동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세',
            user: mockUser,
            hasVote: false,
            likeCount: 999999999999999,
            commentCount: 2,
            date: '2023-01-12T17:45:22',
            imgSrc: 'img',
            category: '일상',
        },
        {
            id: 3,
            title: 'ㅎ러우할워훌어ㅏ훌아ㅜㅎㄹ우허ㅏㅜㄹㅇ훌어ㅏㅜ헉둬ㅏ훋가ㅜㅎㄹㅇ라ㅣㅜ히ㅏ둑힉두히ㅜ일후ㅏㄷ구하ㅣㄱ둥헝루허ㅣ루힏ㄱ',
            preview: 'ㅎ라읗ㄹ워ㅏㅜㅗㄱ두ㅏㅣㅎㄱ다ㅣ르ㅏㅣㄴ으라ㅣㅜ훠루허가ㅜ허ㅜ거ㅏ두니휠웋ㄱ둬하구하ㅓ루ㅗㅓㅏㅜㅅ거ㅏㅜㅎ더ㅜ히ㅏㄱ두힉두하ㅣㅜ러훅사ㅜㅗㅓㅏㅅ궈귀ㅏ두하ㅣㄱ둫긷ㅎㄱㄷㅎㄱㄷㅎㄷㄱㅎ',
            user: mockUser,
            hasVote: false,
            likeCount: 12,
            commentCount: 21,
            date: '2023-01-12T17:45:22',
            imgSrc: 'img',
            category: '연애',
        },
    ];

    return {
        props: {
            communityBoards,
            balanceGameBoards: communityBoards,
            serviceCenterBoards: communityBoards,
        },
    };
};

export default Home;
