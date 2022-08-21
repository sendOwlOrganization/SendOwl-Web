import { css, styled, Theme } from '@mui/material';
import { MLAB_PALETTE } from '@styles/mlabTheme';
import NextLink from 'next/link';
import { PropsWithChildren } from 'react';

export type LabelColor = 'default' | keyof typeof MLAB_PALETTE;
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
  padding: 4px 8px;
  font-weight: 700;
  font-size: ${theme.typography.body2.fontSize};
`;

const defaultLabelCss = (theme: Theme, color: LabelColor, isClickable: boolean) => css`
  background-color: ${color === 'default' ? theme.palette.gray[200] : theme.palette[color][200]};
  color: ${color === 'default' ? theme.palette.gray[800] : theme.palette[color][600]};
  ${isClickable && css`
    :hover {
      cursor: pointer;
      background-color: ${color === 'default' ? theme.palette.gray[300] : theme.palette[color][500]};
      color: ${color === 'default' ? theme.palette.gray[800] : theme.palette[color][900]}
    }
  `}
`;

const filledLabelCss = (theme: Theme, color: LabelColor, isClickable: boolean) => css`
  background-color: ${color === 'default'
          ? theme.palette.gray[600]
          : theme.palette[color][600]};
  color: ${color === 'default'
          ? theme.palette.getContrastText(theme.palette.gray[600]!)
          : theme.palette.getContrastText(theme.palette[color][600]!)};
  ${isClickable && css`
    :hover {
      cursor: pointer;
      background-color: ${color === 'default'
              ? theme.palette.gray[700]
              : theme.palette[color][700]};
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