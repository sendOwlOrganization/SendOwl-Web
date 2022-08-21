import AngleRightBigIcon from '@components/icons/AngleRightBigIcon';
import { Box, css, styled } from '@mui/material';
import NextLink from 'next/link';
import { PropsWithChildren } from 'react';

interface BannerTitleProps {
    href?: string;
    gutterBottom?: true;
}

const TitleContainer = styled('div')<{ gutterBottom?: true }>(({ theme, gutterBottom }) => css`
  padding: ${gutterBottom ? '1rem' : '1rem 1rem 0 1rem'};
  display: flex;
  align-items: center;
`);

const BannerTitle = ({ href, gutterBottom, children }: PropsWithChildren<BannerTitleProps>) => {

    return (
        <TitleContainer gutterBottom={gutterBottom}>
            {children}
            {href && (
                <>
                    <Box marginLeft={'auto'} />
                    <NextLink href={href}>
                        <a>
                            <AngleRightBigIcon color={'gray'} />
                        </a>
                    </NextLink>
                </>
            )}
        </TitleContainer>
    );
};

export default BannerTitle;