import { css, styled } from '@mui/material';
import NextLink from 'next/link';
import { PropsWithChildren } from 'react';

interface BannerTitleProps {
    href?: string;
    gutterBottom?: true;
}

const TitleContainer = styled('a',
    { shouldForwardProp: (name) => name !== 'gutterBottom' },
)<{ gutterBottom?: true }>(({ gutterBottom }) => css`
  padding: ${gutterBottom ? '1.5rem' : '1.5rem 1.5rem 0 1.5rem'};
  display: flex;
  align-items: center;
`);

const BannerTitle = ({ href, gutterBottom, children }: PropsWithChildren<BannerTitleProps>) => {


    return href
        ? (
            <NextLink href={href} passHref>
                <TitleContainer gutterBottom={gutterBottom}>
                    {children}
                </TitleContainer>
            </NextLink>
        ) : (
            <TitleContainer as={'div'} gutterBottom={gutterBottom}>
                {children}
            </TitleContainer>
        );
};

export default BannerTitle;