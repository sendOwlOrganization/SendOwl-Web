import BannerTitle from '@components/banner/BannerTitle';
import ApproveIcon from '@components/icons/ApproveIcon';
import Percent from '@components/quick-balance-game/Percent';
import { Box, Card, css, darken, Stack, styled, Typography } from '@mui/material';
import { useState } from 'react';

interface Choice {
    id: number;
    text: string;
    voteCount: number;
}

interface QuickBalanceGameProps {
    voteId: number;
    choices: [Choice, Choice];
}

const SelectButton = styled('button')<{ focused: boolean }>(({ theme, focused }) => css`
  background-color: ${focused ? theme.palette.violet.main : theme.palette.grey7.main};
  color: ${focused ? theme.palette.grey9.main : theme.palette.grey3.main};
  font-weight: bold;
  width: 100%;
  height: 9.5rem;
  padding: 1rem;
  border-radius: 16px;
  border: none;
  transition: all 275ms ${theme.transitions.easing.easeInOut};

  :hover {
    background-color: ${focused ? theme.palette.violet.dark : theme.palette.grey6.main};
    cursor: pointer;
  }

  :active {
    background-color: ${focused ? darken(theme.palette.violet.dark, 0.1) : theme.palette.grey6.dark};
  }
`);

const QuickBalanceGameContent = styled('div')`
  padding: 1rem 1rem 0.75rem 1rem;
`;

const wait = (timeToDelay: number) => new Promise((resolve) => setTimeout(resolve, timeToDelay));

const fakeApiCall = async () => {
    await wait(0);
};

const QuickBalanceGame = ({ voteId, choices }: QuickBalanceGameProps) => {
    const [focused, setFocused] = useState<number>(0);
    const [first, second] = choices;
    const firstVote = first.voteCount + (focused === 1 ? 1 : 0);
    const secondVote = second.voteCount + (focused === 2 ? 1 : 0);
    const totalVote = firstVote + secondVote;

    const onClickFirst = async () => {
        try {
            await fakeApiCall();
            setFocused(1);
        } catch (e) {
        } finally {
        }
    };

    const onClickSecond = async () => {
        try {
            await fakeApiCall();
            setFocused(2);
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
            <QuickBalanceGameContent>
                <Stack direction={'row'} spacing={1}>
                    <SelectButton focused={focused === 1} onClick={onClickFirst}>
                        <Box height={'2rem'} paddingBottom={'0.25rem'}>
                            {focused === 1 && <ApproveIcon color={'white'} />}
                        </Box>
                        <Box height={'3.625rem'} width={'5.5rem'}
                             display={'flex'}
                             whiteSpace={'pre'}
                             alignItems={'center'}
                             justifyContent={'center'}>
                            {first.text}
                        </Box>
                        <Stack height={'2.125rem'}
                               direction={'row'}
                               alignItems={'center'}
                               justifyContent={'space-between'}>
                            {
                                !!focused && (
                                    <>
                                        <Typography variant={'body2'}>
                                            {firstVote.toLocaleString('ko-KR')}명
                                        </Typography>
                                        <Percent number={firstVote / totalVote * 100} />
                                    </>
                                )
                            }
                        </Stack>
                    </SelectButton>
                    <SelectButton focused={focused === 2} onClick={onClickSecond}>
                        <Box height={'2rem'}>
                            {focused === 2 && <ApproveIcon color={'white'} />}
                        </Box>
                        <Box height={'3.625rem'} width={'5.5rem'}
                             display={'flex'}
                             whiteSpace={'pre'}
                             alignItems={'center'}
                             justifyContent={'center'}>
                            {second.text}
                        </Box>
                        <Stack height={'2.125rem'}
                               direction={'row'}
                               alignItems={'center'}
                               justifyContent={'space-between'}>
                            {
                                !!focused && (
                                    <>
                                        <Typography variant={'body2'}>
                                            {secondVote.toLocaleString('ko-KR')}명
                                        </Typography>
                                        <Percent number={secondVote / totalVote * 100} />
                                    </>
                                )
                            }
                        </Stack>
                    </SelectButton>
                </Stack>
            </QuickBalanceGameContent>
            <Box padding={'0 1rem 1.25rem 1rem'}>
                <Typography fontSize={'0.75rem'} align={'right'} color={(theme) => theme.palette.grey4.main}>
                    현재 <b>{totalVote.toLocaleString('ko-KR')}</b>명 참가중
                </Typography>
            </Box>
        </Card>
    );
};

export default QuickBalanceGame;