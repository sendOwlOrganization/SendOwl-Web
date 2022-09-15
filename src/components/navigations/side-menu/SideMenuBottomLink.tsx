import { styled } from '@mui/material';
import NextLink from 'next/link';
import { PropsWithChildren } from 'react';

interface SideMenuBottomLinkProps {
    href: string;
}

const Anchor = styled('a')(({ theme }) => ({
    ...theme.typography.subtitle3,
    fontWeight: 'bold',
    margin: '0.625rem 0',
    color: theme.palette.gray[700],
}));

const SideMenuBottomLink = ({ href, children }: PropsWithChildren<SideMenuBottomLinkProps>) => {
    return href.startsWith('/') ? (
        <NextLink href={href} passHref>
            <Anchor>
                {children}
            </Anchor>
        </NextLink>
    ) : (
        <Anchor>
            {children}
        </Anchor>
    );
};

export default SideMenuBottomLink;