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
    isVote: boolean;
    category: string;
    likeCount: number;
    commentCount: number;
    date: string;
}


const LabelContainer = styled('div')`
  display: flex;
  align-items: center;
  margin-bottom: 4px;

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
  margin-left: 32px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.palette.gray[400]};
  display: flex;
  align-items: center;
  color: white;
  font-size: 14px;
  justify-content: center;
`;

const Anchor = styled('a')`
  display: inherit;
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
                              isVote,
                              category,
                          }: BoardPreviewLinkProps) => {

    const href = `#?fixmeId=${id}`;
    return (
        <Card elevation={0} sx={{ padding: {xs: '1rem', md: '1.5rem'}}}>
            <Box display={'flex'} alignItems={'center'} marginBottom={'5.5px'}>
                <Box minHeight={90} flexGrow={1} flexBasis={0} flexShrink={0}>
                    <LabelContainer>
                        {isVote && <Label href={'#?fixme=투표'} variant={'filled'} color={'purple'}>투표</Label>}
                        <Label href={`#?fixme=${category}`}>{category}</Label>
                    </LabelContainer>
                    <NextLink href={href} passHref>
                        <Anchor>
                            <BoardPreviewLinkTitle variant={'body1'} sx={{display: {xs: 'none', md: 'block'}}}>
                                {title}
                            </BoardPreviewLinkTitle>
                            <BoardPreviewLinkContent variant={'body2'}>
                                {preview}
                            </BoardPreviewLinkContent>
                        </Anchor>
                    </NextLink>
                </Box>
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
            <Box display={'flex'} alignItems={'center'} justifyContent={'space-between'}>
                <BoardPreviewLinkUserAndDate id={user.id}
                                             name={user.nickName}
                                             mbti={user.mbti}
                                             date={date} />

                <Stack spacing={1} direction={'row'}>
                    <Typography component={'span'} variant={'body2'} color={theme => theme.palette.gray[700]}>
                        ❤️ {likeCount}
                    </Typography>
                    <Typography component={'span'} variant={'body2'} color={theme => theme.palette.gray[700]}>
                        💬 {commentCount}
                    </Typography>
                </Stack>
            </Box>
        </Card>
    );
};

export default BoardPreviewLink;