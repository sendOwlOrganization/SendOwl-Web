import { css, styled, Typography } from '@mui/material';
import * as React from 'react';

interface UserMbtiProps {
    mbti: string;
}

const Container = styled('div')(
    ({ theme }) => css`
        height: 2.75rem;
        display: flex;
        flex-direction: column;
    `
);

const UserMbti = ({ mbti }: UserMbtiProps) => {
    return (
        <Container>
            <Typography variant={'subtitle4'} marginBottom={'0.25rem'}>
                회원님은
            </Typography>
            <Typography
                variant={'subtitle2'}
                component={'span'}
                fontWeight={'bold'}
                color={(theme) => theme.palette.lightPink[600]}>
                {mbti}
            </Typography>
        </Container>
    );
};

export default UserMbti;
