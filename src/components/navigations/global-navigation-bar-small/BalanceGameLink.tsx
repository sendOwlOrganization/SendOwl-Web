import { css, styled, Typography } from '@mui/material';
import NextLink from 'next/link';

interface BalanceGameLinkProps {
    voteId: number;
    first: string;
    second: string;
}

const Anchor = styled('a')(
    ({ theme }) => css`
        background-color: ${theme.palette.purple[600]};
        border-radius: 0.5rem;
        padding: 0.5rem 1rem;
        margin: 0.5rem 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    `
);

const BalanceGameLink = ({ voteId, first, second }: BalanceGameLinkProps) => {
    return (
        <NextLink href={`/balance-games/${voteId}`} passHref>
            <Anchor>
                <Typography variant={'caption2'} fontWeight={'bold'} color={(theme) => theme.palette.purple[400]}>
                    밸런스 게임 바로가기
                </Typography>
                <Typography variant={'body2'} fontWeight={'bold'} color={(theme) => theme.palette.gray[100]}>
                    {first} vs {second}
                </Typography>
            </Anchor>
        </NextLink>
    );
};

export default BalanceGameLink;
