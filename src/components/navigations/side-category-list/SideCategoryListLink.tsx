import Label from '@components/label/Label';
import { css, styled, Typography } from '@mui/material';
import NextLink from 'next/link';

interface SideCategoryListLinkProps {
    href: string;
    label: string;
    count: number;
    active?: boolean;
}

const Link = styled('a')(({ theme }) => css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: bold;
  margin: 0 -8px;
  padding: 8px;
  border-radius: 8px;
  transition: all 100ms ${theme.transitions.easing.easeInOut};

  :hover {
    background-color: ${theme.palette.gray[200]};
  }
`);

const SideCategoryListLink = ({ label, count, href, active }: SideCategoryListLinkProps) => {

    return (
        <NextLink href={href} passHref>
            <Link>
                <Typography variant={'body1'}
                            fontWeight={active ? 'bold' : 'normal'}>
                    {label}
                </Typography>
                <Label color={'lightPink'} variant={'default'}>{count.toLocaleString()}</Label>
            </Link>
        </NextLink>
    );
};

export default SideCategoryListLink;