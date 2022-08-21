import { css, styled } from '@mui/material';
import NextLink from 'next/link';
import { PropsWithChildren } from 'react';

interface BannerTitleProps {
    href?: string;
    gutterBottom?: true;
}

const TitleContainer = styled('a')<{ gutterBottom?: true }>(({ theme, gutterBottom }) => css`
  padding: ${gutterBottom ? '1rem' : '1rem 1rem 0 1rem'};
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