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
    rounded?: boolean;
    padding?: number;
    size?: number;
}

interface LabelContainerProps extends Required<Omit<LabelProps, 'href' | 'onClick'>> {
    isClickable: boolean;
}

const labelCss = (theme: Theme, rounded: boolean, size: number, padding: number) => css`
  display: inline-flex;
  border-radius: ${rounded ? 4 * size * padding : 4}px;
  padding: ${padding * 4}px ${padding * 8}px;
  font-weight: 700;
  font-size: ${12 * size}px;
  transition: all 100ms ${theme.transitions.easing.easeInOut};
`;

const defaultLabelCss = (theme: Theme, color: LabelColor, isClickable: boolean) => css`
  background-color: ${color === 'default' ? theme.palette.gray[200] : theme.palette[color][200]};
  color: ${color === 'default' ? theme.palette.gray[800] : theme.palette[color][700]};
  ${isClickable && css`
    :hover {
      cursor: pointer;
      background-color: ${color === 'default' ? theme.palette.gray[300] : theme.palette[color][500]};
      color: ${color === 'default' ? theme.palette.gray[800] : theme.palette[color][1000]}
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

const LabelContainer = styled('span')<LabelContainerProps>
(({ theme, variant, color, isClickable, rounded, size, padding }) => css`
  ${labelCss(theme, rounded, size, padding)}
  ${labelVariants[variant](theme, color, isClickable)}
`);

const Label = ({
                   color = 'default',
                   children,
                   variant = 'default',
                   href,
                   onClick,
                   rounded = false,
                   padding = 1,
                   size = 1,
               }: PropsWithChildren<LabelProps>) => {
    return href
        ? (
            <NextLink href={href} passHref>
                <LabelContainer padding={padding} size={size} rounded={rounded} as={'a'} color={color} variant={variant}
                                isClickable
                                onClick={onClick}>
                    {children}
                </LabelContainer>
            </NextLink>
        ) : (
            <LabelContainer padding={padding} size={size} rounded={rounded} color={color} variant={variant}
                            onClick={onClick}
                            isClickable={!!onClick}>
                {children}
            </LabelContainer>
        );
};

export default Label;