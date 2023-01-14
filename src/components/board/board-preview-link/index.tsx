import BoardVoteTagIcon from '@components/icons/BoardVoteTagIcon';
import CommentIcon from '@components/icons/CommentIcon';
import HeartIcon from '@components/icons/HeartIcon';
import Label from '@components/label/Label';
import { Box, Card, Stack, styled, Typography } from '@mui/material';
import NextLink from 'next/link';
import BoardPreviewLinkContent from './BoardPreviewLinkContent';
import BoardPreviewLinkTitle from './BoardPreviewLinkTitle';
import BoardPreviewLinkUserAndDate from './BoardPreviewLinkUserAndDate';

interface BoardPreviewLinkProps {
    id: number;
    title: string;
    preview: string;
    imgSrc?: string;
    // FIXME: create type with backend's
    user: {
        id: number;
        nickName: string;
        mbti: string;
    };
    /**
     * 투표가 있는 게시글인지
     */
    hasVote?: boolean;
    category?: string;
    likeCount: number;
    commentCount: number;
    date: string;
}


const LabelContainer = styled('section')`
  display: flex;
  align-items: center;
  width: 100%;

  & > * {
    margin-right: 8px;
  }

  & > *:last-child {
    margin-right: 0;
  }
`;

const ImagePlaceHolder = styled('div')`
  width: 94px;
  height: 90px;
  margin-left: 8px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.palette.gray[400]};
  display: flex;
  align-items: center;
  color: white;
  font-size: 14px;
  justify-content: center;
`;

const Anchor = styled('a')`
  display: flex;
`;

const LinkFooter = styled('section')`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const Body = styled('section')`
  width: 100%;
`;

const BoardPreviewLink = ({
                              id,
                              title,
                              preview,
                              imgSrc,
                              user,
                              commentCount,
                              likeCount,
                              date,
                              hasVote,
                              category,
                          }: BoardPreviewLinkProps) => {

    const href = `#?fixmeId=${id}`;

    return (
        <Card elevation={0} sx={{
            padding: { xs: '1rem', md: '1.5rem' },
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
        }}>
            <Box sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
                <Body>
                    <LabelContainer>
                        {category && <Label href={`#?fixme=${category}`} color={'pink'}>#{category}</Label>}
                        {hasVote && <Label href={`#fixme=${hasVote}`}><BoardVoteTagIcon color={'purple'} /></Label>}
                    </LabelContainer>
                    <NextLink href={href} passHref>
                        <Anchor>
                            <BoardPreviewLinkTitle variant={'body1'}
                                                   sx={{ display: { xs: 'none', md: 'block' } }}>
                                {title}
                            </BoardPreviewLinkTitle>
                            <BoardPreviewLinkContent variant={'body2'}>
                                {preview}
                            </BoardPreviewLinkContent>
                        </Anchor>
                    </NextLink>
                    <LinkFooter>
                        <BoardPreviewLinkUserAndDate id={user.id}
                                                     name={user.nickName}
                                                     mbti={user.mbti}
                                                     date={date} />
                        <Stack spacing={1} direction={'row'}>
                            <Typography component={'span'} variant={'body2'} color={theme => theme.palette.gray[500]}
                                        display={'flex'} fontWeight={600}>
                                <Typography display={'flex'} alignItems={'center'} padding={0.2}>
                                    <HeartIcon color={'gray'} colorkey={200} />
                                </Typography>
                                {likeCount}
                            </Typography>
                            <Typography component={'span'} variant={'body2'} color={theme => theme.palette.gray[500]}
                                        display={'flex'} fontWeight={600}>
                                <Typography display={'flex'} alignItems={'center'} padding={0.2}>
                                    <CommentIcon color={'gray'} colorkey={200} />
                                </Typography>
                                {commentCount}
                            </Typography>
                        </Stack>
                    </LinkFooter>
                </Body>
                {
                    imgSrc && (
                        <NextLink href={href} passHref>
                            <Anchor>
                                <ImagePlaceHolder>
                                    {imgSrc}
                                </ImagePlaceHolder>
                            </Anchor>
                        </NextLink>
                    )
                }
            </Box>
        </Card>
    );
};

export default BoardPreviewLink;
