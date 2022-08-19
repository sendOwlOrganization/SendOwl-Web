import { css, lighten, styled, Theme } from '@mui/material';
import { MLAB_BASE_PALETTE } from '@styles/sendOwlTheme';
import { PropsWithChildren } from 'react';

export type LabelColor = 'default' | keyof typeof MLAB_BASE_PALETTE;
export type LabelVariant = 'default' | 'filled';

interface LabelProps {
    variant?: LabelVariant;
    color?: LabelColor;
}

const labelCss = (theme: Theme) => css`
  border-radius: 4px;
  padding: 2px 8px;
  font-weight: 700;
  font-size: ${theme.typography.body2.fontSize};
`;

const defaultLabelCss = (theme: Theme, color: LabelColor) => css`
  background-color: ${color === 'default' ? theme.palette.grey6.main : lighten(theme.palette[color].main, 0.85)};
  color: ${color === 'default' ? theme.palette.grey3.main : theme.palette[color].dark}
`;

const filledLabelCss = (theme: Theme, color: LabelColor) => css`
  background-color: ${color === 'default' ? theme.palette.grey3.main : theme.palette[color].main};
  color: ${color === 'default' ? theme.palette.grey3.contrastText : theme.palette[color].contrastText}
`;

const labelVariants = {
    default: defaultLabelCss,
    filled: filledLabelCss,
};

const LabelContainer = styled('span')<Required<LabelProps>>(({ theme, variant, color }) => css`
  ${labelCss(theme)}
  ${labelVariants[variant](theme, color)}
`);

const Label = ({ color = 'default', children, variant = 'default' }: PropsWithChildren<LabelProps>) => {
    return (
        <LabelContainer color={color} variant={variant}>
            {children}
        </LabelContainer>
    );
};

export default Label;