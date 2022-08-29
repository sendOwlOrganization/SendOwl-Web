import { css, styled } from '@mui/material';
import NextLink from 'next/link';

const Span = styled('span')(({ theme }) => css`
  font-size: ${theme.typography.body1.fontSize};
  color: ${theme.palette.pink[600]};
  font-weight: 700;
  line-height: 1.76;
  margin: 0.625rem;
`)

const Anchor = styled('a')(({ theme }) => css`
  font-size: ${theme.typography.body1.fontSize};
  color: ${theme.palette.common.black};
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
    return active
        ? (
            <Span>
                {label}
            </Span>
        ) : (
            <NextLink href={href} passHref>
                <Anchor>
                    {label}
                </Anchor>
            </NextLink>
        );
};

export default GlobalNavigationBarButtonLink;