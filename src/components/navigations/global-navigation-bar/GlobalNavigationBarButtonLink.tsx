import { css, styled } from '@mui/material';
import NextLink from 'next/link';

const Anchor = styled('a')<{ active: boolean }>(({ theme, active }) => css`
  font-size: ${theme.typography.body1.fontSize};
  color: ${active
          ? theme.palette.pink[600]
          : theme.palette.common.black};
  font-weight: 700;
  line-height: 1.76;
  margin: 0.625rem;

  :hover {
    color: ${theme.palette.gray[900]};
  }

  :active {
    color: ${theme.palette.gray[1000]};
  }

`);

interface GlobalNavigationBarButtonLinkProps {
    href: string;
    label: string;
    active?: boolean;
}

const GlobalNavigationBarButtonLink = ({ href, label, active }: GlobalNavigationBarButtonLinkProps) => {
    return (
        <NextLink href={href} passHref>
            <Anchor active={!!active}>
                {label}
            </Anchor>
        </NextLink>
    );
};

export default GlobalNavigationBarButtonLink;