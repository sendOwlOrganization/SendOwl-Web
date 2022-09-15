import { styled, Typography } from '@mui/material';
import NextLink from 'next/link';
import { ReactNode } from 'react';

interface SideMenuLinkProps {
    href: string;
    icon: ReactNode;
    title: string;
}

const Anchor = styled('a')`
  display: flex;
  align-items: center;
  margin-top: 1rem;
  margin-bottom: 1rem;

  & > *:first-child {
    margin-right: 0.375rem;
  }
`;


const SideMenuLink = ({ href, title, icon }: SideMenuLinkProps) => {

    return (
        <NextLink href={href} passHref>
            <Anchor>
                {icon}
                <Typography variant={'subtitle3'} fontWeight={'bold'}>{title}</Typography>
            </Anchor>
        </NextLink>
    );
};

export default SideMenuLink;