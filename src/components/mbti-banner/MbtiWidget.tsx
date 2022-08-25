import MbtiBanner from '@components/mbti-banner/MbtiBanner';
import { Box, css, Stack, styled } from '@mui/material';
import * as React from 'react';

interface MbtiData {
    id: string,
    label: string,
    value: number,
}

interface MbtiDataProps {
    data: MbtiData[];
}

const MbtiMemberCount = styled('div')<{ width: string, fontWeight: string }>(({ theme, width, fontWeight }) => css`
  width: ${width};
  height: 1.25rem;
  flex-grow: 0;
  font-family: Pretendard;
  font-size: 0.75rem;
  font-weight: ${fontWeight};
  font-stretch: normal;
  font-style: normal;
  line-height: 1.65;
  letter-spacing: normal;
  text-align: left;
  color: ${theme.palette.gray['700']};
`);

const Mbti = ({ data }: MbtiDataProps) => {

    return (
        <>
            <Box width={'18rem'} height={'9.313rem'} display={'flex'} flexDirection={'column'}
                 justifyContent={'flex-start'} alignItems={'stretch'} padding={'1.5rem'} borderRadius={'16px'}>
                <Box height={'6.313rem'} alignSelf={'stretch'} flexGrow={0} display={'flex'} flexDirection={'row'}
                     justifyContent={'space-between'} alignItems={'flex-start'} padding={0}>
                    <Box width={'5.375rem'} alignSelf={'stretch'} flexGrow={0} display={'flex'} flexDirection={'column'}
                         justifyContent={'space-between'} alignItems={'flex-start'} padding={0}>
                        <Box width={'5.375rem'} height={'2.75rem'} flexGrow={0} display={'flex'}
                             flexDirection={'column'} justifyContent={'flex-start'} alignItems={'flex-start'}
                             gap={'4px'}>
                            <Stack width={'3.5rem'} height={'1rem'} fontSize={'1rem'} fontWeight={'bold'}
                                   lineHeight={1}>회원님은</Stack>
                            <Stack width={'5.375rem'} height={'1.5rem'} flexGrow={0} fontSize={'1.5rem'}
                                   fontWeight={'bold'} lineHeight={1} textAlign={'left'}
                                   color={theme => theme.palette.lightPink[600]}>ENTJ-A</Stack>
                        </Box>
                        <Box width={'5rem'} height={'1.25rem'} flexGrow={0} display={'flex'} flexDirection={'row'}
                             justifyContent={'flex-start'} alignItems={'flex-start'} gap={'4px'} padding={0}>
                            <MbtiMemberCount width={'2.188rem'} fontWeight={'bold'}>0,000</MbtiMemberCount>
                            <MbtiMemberCount width={'0.313rem'} fontWeight={'normal'}>/</MbtiMemberCount>
                            <MbtiMemberCount width={'2rem'} fontWeight={'normal'}>0,000</MbtiMemberCount>
                        </Box>
                    </Box>
                    <Box
                        width={'6.313rem'}
                        height={'6.313rem'}
                        flexGrow={0}
                    >
                        <Box position={'absolute'} width={'6.313rem'} height={'6.313rem'} display={'flex'} flexGrow={0}
                             flexDirection={'row'} justifyContent={'center'} alignItems={'center'}>
                            <Box width={'3.313rem'} height={'2rem'} display={'flex'} flexDirection={'row'}
                                 justifyContent={'center'} alignItems={'flex-end'}>
                                <Stack width={'2.688rem'} height={'2rem'} fontSize={'2rem'} fontWeight={'bold'}
                                       lineHeight={1} color={theme => theme.palette.lightPink[600]}
                                       textAlign={'center'}>00</Stack>
                                <Stack width={'0.625rem'} height={'1.25rem'} fontSize={'0.75rem'} fontWeight={'bold'}
                                       lineHeight={1.65} alignItems={'flex-end'}
                                       color={theme => theme.palette.gray[600]}>%</Stack>
                            </Box>
                        </Box>
                        <MbtiBanner data={data} />
                    </Box>
                </Box>
            </Box>

        </>
    );
};

export default Mbti;