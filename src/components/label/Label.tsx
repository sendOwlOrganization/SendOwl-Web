import { css, darken, lighten, styled, Theme } from '@mui/material';
import { MLAB_BASE_PALETTE } from '@styles/sendOwlTheme';
import NextLink from 'next/link';
import { PropsWithChildren } from 'react';

export type LabelColor = 'default' | keyof typeof MLAB_BASE_PALETTE;
export type LabelVariant = 'default' | 'filled';

interface LabelProps {
    variant?: LabelVariant;
    color?: LabelColor;
    href?: string;
    onClick?: () => void;
}

interface LabelContainerProps extends Required<Omit<LabelProps, 'href' | 'onClick'>> {
    isClickable: boolean;
}

const labelCss = (theme: Theme) => css`
  display: inline-flex;
  border-radius: 4px;
  padding: 0 8px;
  font-weight: 700;
  font-size: ${theme.typography.body2.fontSize};
`;

const defaultLabelCss = (theme: Theme, color: LabelColor, isClickable: boolean) => css`
  background-color: ${color === 'default' ? theme.palette.grey6.main : lighten(theme.palette[color].main, 0.85)};
  color: ${color === 'default' ? theme.palette.grey3.main : theme.palette[color].dark};
  ${isClickable && css`
    :hover {
      cursor: pointer;
      background-color: ${color === 'default' ? theme.palette.grey6.dark : lighten(theme.palette[color].main, 0.75)};
      color: ${color === 'default' ? theme.palette.grey3.dark : darken(theme.palette[color].dark, 0.1)}
    }
  `}
`;

const filledLabelCss = (theme: Theme, color: LabelColor, isClickable: boolean) => css`
  background-color: ${color === 'default' ? theme.palette.grey3.main : theme.palette[color].main};
  color: ${color === 'default' ? theme.palette.grey3.contrastText : theme.palette[color].contrastText};
  ${isClickable && css`
    :hover {
      cursor: pointer;
      background-color: ${color === 'default' ? theme.palette.grey3.dark : theme.palette[color].dark};
    }
  `}
`;

const labelVariants = {
    default: defaultLabelCss,
    filled: filledLabelCss,
};

const LabelContainer = styled('span')<LabelContainerProps>(({ theme, variant, color, isClickable }) => css`
  ${labelCss(theme)}
  ${labelVariants[variant](theme, color, isClickable)}
`);

const Label = ({ color = 'default', children, variant = 'default', href, onClick }: PropsWithChildren<LabelProps>) => {
    return href
        ? (
            <NextLink href={href} passHref>
                <LabelContainer as={'a'} color={color} variant={variant} isClickable onClick={onClick}>
                    {children}
                </LabelContainer>
            </NextLink>
        ) : (
            <LabelContainer color={color} variant={variant} onClick={onClick} isClickable={!!onClick}>
                {children}
            </LabelContainer>
        );
};

export default Label;