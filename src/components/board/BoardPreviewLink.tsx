import Label from '@components/label/Label';
import { Box, Card, styled, Typography } from '@mui/material';
import { formatDate } from '@tools/date';
import NextLink from 'next/link';

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

const Title = styled(Typography)`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  font-weight: bold;
  color: ${({ theme }) => theme.palette.grey1.main};
`;

const Preview = styled(Typography)`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  line-height: 160%;
  color: ${({ theme }) => theme.palette.grey3.main};
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

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

const LikeCommentContainer = styled('div')`
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
  background-color: ${({ theme }) => theme.palette.grey5.main};
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
        <Card elevation={0} sx={{ padding: '2rem' }}>
            <Box display={'flex'} alignItems={'center'} marginBottom={'5.5px'}>
                <Box minHeight={90} flexGrow={1} flexBasis={0} flexShrink={0}>
                    <LabelContainer>
                        {isVote && <NextLink href={'#?fixme=투표'} passHref>
                            <Anchor>
                                <Label variant={'filled'} color={'purple'}>투표</Label>
                            </Anchor>
                        </NextLink>}
                        <NextLink href={`#?fixme=${category}`} passHref>
                            <Anchor>
                                <Label>{category}</Label>
                            </Anchor>
                        </NextLink>
                    </LabelContainer>
                    <NextLink href={href} passHref>
                        <Anchor>
                            <Title variant={'body1'}>
                                {title}
                            </Title>
                            <Preview variant={'body2'}>
                                {preview}
                            </Preview>
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
                <Typography variant={'body2'} color={theme => theme.palette.grey1.main}>
                    <Typography variant={'body2'}
                                color={theme => theme.palette.coralPink.main}
                                fontWeight={700}
                                component={'span'}>
                        {`${user.mbti} `}
                    </Typography>
                    {user.nickName}
                    <Typography variant={'body2'}
                                color={theme => theme.palette.grey4.main}
                                fontWeight={700}
                                component={'span'}>
                        ・
                    </Typography>
                    <Typography variant={'body2'} color={theme => theme.palette.grey4.main}
                                component={'span'}>
                        {formatDate(date)}
                    </Typography>
                </Typography>

                <LikeCommentContainer>
                    <Typography component={'span'} variant={'body2'} color={theme => theme.palette.grey3.main}>
                        ❤️ {likeCount}
                    </Typography>
                    <Typography component={'span'} variant={'body2'} color={theme => theme.palette.grey3.main}>
                        💬 {commentCount}
                    </Typography>
                </LikeCommentContainer>
            </Box>
        </Card>
    );
};

export default BoardPreviewLink;