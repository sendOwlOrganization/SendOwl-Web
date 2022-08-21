import Slide from '@components/animations/Slide';
import BannerTitle from '@components/banner/BannerTitle';
import ApproveIcon from '@components/icons/ApproveIcon';
import Percent from '@components/widgets/Percent';
import { Box, Card, css, Stack, styled, Typography } from '@mui/material';
import NextLink from 'next/link';
import { useState } from 'react';

interface Choice {
    id: number;
    text: string;
    voteCount: number;
}

interface BalanceGameWidgetProps {
    voteId: number;
    choices: [Choice, Choice];
}

const SelectButton = styled('button')<{ focused: boolean }>(({ theme, focused }) => css`
  background-color: ${focused ? theme.palette.purple[600] : theme.palette.gray[200]};
  color: ${focused ? theme.palette.common.white : theme.palette.gray[900]};
  font-weight: bold;
  width: 100%;
  height: 9.5rem;
  padding: 1rem;
  border-radius: 16px;
  border: none;
  transition: all 100ms ${theme.transitions.easing.easeInOut};

  :hover {
    background-color: ${focused ? theme.palette.purple[700] : theme.palette.gray[300]};
    cursor: pointer;
  }

  :active {
    background-color: ${focused ? theme.palette.purple[800] : theme.palette.gray[400]};
  }
`);

const BalanceGameWidgetContent = styled('div')`
  padding: 1rem 1rem 0.75rem 1rem;
`;

// FIXME: change with API call later
const wait = (timeToDelay: number) => new Promise((resolve) => setTimeout(resolve, timeToDelay));

const fakeApiCall = async () => {
    await wait(100);
};

const BalanceGameWidget = ({ voteId, choices }: BalanceGameWidgetProps) => {
    const [focused, setFocused] = useState<number>(0);
    const [first, second] = choices;
    const firstVote = first.voteCount + (focused === 1 ? 1 : 0);
    const secondVote = second.voteCount + (focused === 2 ? 1 : 0);
    const totalVote = firstVote + secondVote;

    const onClick = (button: number) => async () => {
        try {
            await fakeApiCall();
            setFocused(button);
        } catch (e) {
        } finally {
        }
    };

    return (
        <Card elevation={0}>
            <BannerTitle href={'#'}>
                <Typography variant={'body1'} fontWeight={'bold'}>
                    이번 주 밸런스 게임
                </Typography>
            </BannerTitle>
            <BalanceGameWidgetContent>
                <Stack direction={'row'} spacing={1}>
                    <SelectButton focused={focused === 1} onClick={onClick(1)}>
                        <Box height={'2rem'} paddingBottom={'0.25rem'}>
                            <Slide direction={'up'}
                                   height={'1rem'}
                                   appear={focused === 1}
                                   in={focused === 1}
                                   mountOnEnter
                                   timeout={100}
                                   unmountOnExit>
                                <ApproveIcon color={'white'} />
                            </Slide>
                        </Box>
                        <Typography height={'3.625rem'} width={'5.5rem'}
                                    display={'flex'}
                                    fontWeight={'bold'}
                                    variant={'body2'}
                                    whiteSpace={'pre'}
                                    alignItems={'center'}
                                    lineHeight={1.6}
                                    justifyContent={'center'}>
                            {first.text}
                        </Typography>
                        <Stack height={'2.125rem'}
                               direction={'row'}
                               alignItems={'center'}
                               justifyContent={'space-between'}>
                            {
                                !!focused && (
                                    <>
                                        <Typography variant={'body2'}>
                                            {firstVote.toLocaleString()}명
                                        </Typography>
                                        <Percent number={firstVote / totalVote * 100} focused={focused === 1} />
                                    </>
                                )
                            }
                        </Stack>
                    </SelectButton>
                    <SelectButton focused={focused === 2} onClick={onClick(2)}>
                        <Box height={'2rem'}>
                            <Slide direction={'up'}
                                   height={'1rem'}
                                   appear={focused === 2}
                                   in={focused === 2}
                                   mountOnEnter
                                   timeout={100}
                                   unmountOnExit>
                                <ApproveIcon color={'white'} />
                            </Slide>
                        </Box>
                        <Typography height={'3.625rem'} width={'5.5rem'}
                                    variant={'body2'}
                                    fontWeight={'bold'}
                                    display={'flex'}
                                    whiteSpace={'pre'}
                                    alignItems={'center'}
                                    lineHeight={1.6}
                                    justifyContent={'center'}>
                            {second.text}
                        </Typography>
                        <Stack height={'2.125rem'}
                               direction={'row'}
                               alignItems={'center'}
                               justifyContent={'space-between'}>
                            {
                                !!focused && (
                                    <>
                                        <Typography variant={'body2'}>
                                            {secondVote.toLocaleString()}명
                                        </Typography>
                                        <Percent number={secondVote / totalVote * 100} focused={focused === 2} />
                                    </>
                                )
                            }
                        </Stack>
                    </SelectButton>
                </Stack>
            </BalanceGameWidgetContent>
            <Box padding={'0 1rem 1.25rem 1rem'}
                 display={'flex'}
                 alignItems={'center'}
                 justifyContent={focused ? 'space-between' : 'right'}>
                {
                    focused
                        ? (<NextLink href={'#'} passHref>
                            <a>
                                <Typography variant={'body2'}
                                            fontWeight={'bold'}
                                            lineHeight={1.6}
                                            color={theme => theme.palette.purple[600]}>
                                    의견 작성하러 가기
                                </Typography>
                            </a>
                        </NextLink>)
                        : null
                }
                <Typography variant={'body2'}
                            lineHeight={1.6}
                            color={(theme) => theme.palette.gray[600]}>
                    현재 <b>{totalVote.toLocaleString()}</b>명 참가중
                </Typography>
            </Box>
        </Card>
    );
};

export default BalanceGameWidget;