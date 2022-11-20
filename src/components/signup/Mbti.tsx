import Autocomplete from '@components/autocomplete/Autocomplete';
import TextField from '@components/input/TextField';
import { MBTI_DESCRIPTION, MBTI_LIST } from '@mocks/mbti';
import { Fade, styled, Typography } from '@mui/material';
import { ChangeEvent } from 'react';

const MBTI_TEST_LINK = 'https://www.16personalities.com/ko/%EB%AC%B4%EB%A3%8C-%EC%84%B1%EA%B2%A9-%EC%9C%A0%ED%98%95-%EA%B2%80%EC%82%AC';

interface MbtiProps {
    mbti: string;
    setMbti: (mbti: string) => void;
}

const MbtiLink = styled('a')(({ theme }) => ({
    position: 'absolute',
    bottom: '1rem',
    left: 0,
    right: 0,
    display: 'block',
    textAlign: 'center',
    color: theme.palette.mode === 'dark'
        ? theme.palette.gray[500]
        : theme.palette.gray[600],
    textDecoration: 'underline',
    fontSize: '0.75rem',
    lineHeight: 1.5,
}));

const Container = styled('section')`
  position: relative;
  height: 100%;
`;

const Mbti = ({ mbti, setMbti }: MbtiProps) => {
    const onChangeMbti = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.toUpperCase().slice(0, 4);
        setMbti(value);
    };

    return (
        <Container>
            <Fade timeout={{ appear: 1500, enter: 500, exit: 500 }}
                  in mountOnEnter unmountOnExit>
                <Typography variant={'title1'} fontWeight={'bold'} component={'h2'}>
                    만나서 반가워요 :)
                </Typography>
            </Fade>
            <Fade timeout={{ appear: 1500, enter: 1500, exit: 500 }}
                  in mountOnEnter unmountOnExit>
                <Typography variant={'title1'} fontWeight={'bold'} component={'h2'} marginBottom={'3.375rem'}>
                    본인의 MBTI를 입력해 주세요
                </Typography>
            </Fade>
            <TextField value={mbti}
                       onChange={onChangeMbti}
                       onClear={() => setMbti('')}
                       placeholder={'MBTI를 입력해 주세요'} />
            <Autocomplete query={mbti}
                          words={[...MBTI_LIST]}
                          onClick={setMbti}
                          min={2}
                          renderWord={mbti => (
                              <Typography variant={'body2'}
                                          fontWeight={'bold'}>
                                  {`${mbti} `}
                                  <Typography component={'span'}
                                              variant={'body2'}
                                              fontWeight={'bold'}
                                              color={theme => theme.palette.mode === 'dark'
                                                  ? theme.palette.gray[800]
                                                  : theme.palette.gray[400]}>
                                      {MBTI_DESCRIPTION[mbti as typeof MBTI_LIST[number]]}
                                  </Typography>
                              </Typography>
                          )}
                          notFoundMessage={'올바른 MBTI를 입력해 주세요🙏'} />
            <MbtiLink href={MBTI_TEST_LINK} rel={'noreferrer nofollow'}>
                MBTI 검사 받으러가기
            </MbtiLink>
        </Container>
    );
};

export default Mbti;