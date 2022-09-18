import GlobalNavigationBar from '@components/navigations/global-navigation-bar';
import BalanceGameWidget from '@components/widgets/balance-game-widget';
import MbtiWidget from '@components/widgets/mbti-widget';
import {styled, useMediaQuery} from '@mui/material';
import { useRouter } from 'next/router';
import {PropsWithChildren, useEffect, useState} from 'react';
import GlobalNavigationBarSmall from "@components/navigations/global-navigation-bar-small";
import Carousel from "@components/carousel/carousel/Carousel";
import {imageMocks} from "@mocks/images";
import ShortcutButton from "@components/links/ShortcutButton";
import {MLAB_ICON_COLORS} from "@styles/mlabTheme";
import CommunityIcon from "@components/icons/CommunityIcon";
import NoticeIcon from "@components/icons/NoticeIcon";
import BalanceGameIcon from "@components/icons/BalanceGameIcon";
import InsightIcon from "@components/icons/InsightIcon";
import BannerTitle from "@components/banner/BannerTitle";
import BoardPreviewLink from "@components/board/board-preview-link";

interface GlobalLayoutProps {
}

const Container = styled('div')`
  display: flex;
  max-width: 75rem;
  margin: 2rem auto;
`;

const MainContainer = styled('main')`
  width: 100%;
`;

const SideWidgetContainer = styled('aside')`
  width: 18rem;
  min-width: 18rem;
  margin-left: 1rem;
  display: flex;
  flex-direction: column;

  & > * {
    margin-bottom: 1rem;
  }

  & > *:last-child {
    margin-bottom: 0;
  }
`;

const ShortcutContainer = styled('div')`
  display: flex;
  flex-wrap: wrap;
  padding: 0.5rem;
  
  & > *{
    margin: 0.5rem;
  }
`

const useIsMobile = () => {
    const [isMobile, setIsMobile] = useState(false);

    const mobile = useMediaQuery( "(max-width: 767px)");
    useEffect(() => {
        setIsMobile(mobile);
    }, [mobile]);

    return isMobile
}

const GlobalLayout = ({ children }: PropsWithChildren<GlobalLayoutProps>) => {
    const router = useRouter();
    const isMobile = useIsMobile();

    return (
        <>
            {isMobile ?
                <>
                    <GlobalNavigationBarSmall isLogged={true} currentUrl={router.pathname} />
                    <Carousel data={imageMocks}/>
                    <ShortcutContainer>
                        <ShortcutButton href={"#"} icon={<CommunityIcon/>} text={'커뮤니티'} color={MLAB_ICON_COLORS.community}/>
                        <ShortcutButton href={"#"} icon={<BalanceGameIcon/>} text={'밸런스 게임'} color={MLAB_ICON_COLORS.balanceGame}/>
                        <ShortcutButton href={"#"} icon={<InsightIcon/>} text={'인사이트'} color={MLAB_ICON_COLORS.insight}/>
                        <ShortcutButton href={"#"} icon={<NoticeIcon/>} text={'공지/이벤트'} color={MLAB_ICON_COLORS.notice}/>
                    </ShortcutContainer>
                    <BannerTitle>커뮤니티</BannerTitle>
                    <BoardPreviewLink id={1} title={'게시글 제목'} preview={'Lorem Ipsum 은 단순히 인쇄 및 조판 산업의 더미 텍스트입니다.'} user={{id: 1,nickName: '유저', mbti: 'ENTJ'}} isVote={true} category={'커뮤니티'} likeCount={123} commentCount={21} date={'2022-08-18T17:45:22'} />
                    </>
                :
                <>
                    <GlobalNavigationBar isLogged={true} currentUrl={router.pathname} />
                    <Container>
                        <MainContainer>
                            {children}
                        </MainContainer>
                        <SideWidgetContainer>
                            <MbtiWidget user={{ mbti: 'ENTP' }} data={[{ id: 'ENTP', value: 200, label: 'ENTP' }]} />
                            <BalanceGameWidget voteId={1} title={'이번주 밸런스 게임'} choices={[
                                {
                                    id: 1,
                                    text: '일 잘하는데\n성격이 나쁜사람',
                                    voteCount: 5000,
                                },
                                {
                                    id: 2,
                                    text: '일 못하는데\n성격이 좋은사람',
                                    voteCount: 6000,
                                },
                            ]} />
                        </SideWidgetContainer>
                    </Container>
                </>
            }

        </>
    );
};

export default GlobalLayout;
