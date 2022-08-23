import { css, styled } from '@mui/material';
import { MLAB_NEUTRAL_PALETTE, MLAB_OPACITY_PALETTE, MlabColorType } from '@styles/mlabTheme';
import { PropsWithChildren } from 'react';

const SPACING = 4;

export interface SvgIconProps {
    color?: MlabColorType | 'gray' | 'white' | 'black';
    onClick?: () => void;
    disableHoverBackground?: boolean;
    clickable?: boolean;
    spacing?: number;
    scale?: number;
    badge?: boolean;
    badgeColor?: MlabColorType;
}

const commonPalette = {
    white: {
        main: MLAB_NEUTRAL_PALETTE.white,
        hover: MLAB_NEUTRAL_PALETTE.gray[200],
        active: MLAB_NEUTRAL_PALETTE.gray[300],
    },
    black: {
        main: MLAB_NEUTRAL_PALETTE.black,
        hover: MLAB_NEUTRAL_PALETTE.gray[1000],
        active: MLAB_NEUTRAL_PALETTE.gray[900],
    },
};
const Svg = styled('svg')<{
    color: MlabColorType | 'gray' | 'white' | 'black',
    spacing: number,
    scale: number
}>(({
        theme,
        color,
        spacing,
        scale,
    }) => css`
  height: ${24 + spacing * 2 * SPACING}px;
  width: ${24 + spacing * 2 * SPACING}px;
  padding: ${spacing * SPACING - (1 + scale) * spacing}px;

  path {
    fill: ${(color === 'white' || color === 'black')
            ? commonPalette[color].main
            : theme.palette[color][600]};
  }
`);


const Span = styled('span')<{ spacing: number }>(({ theme, spacing }) => css`
  background-color: transparent;
  height: ${24 + spacing * 2 * SPACING}px;
  width: ${24 + spacing * 2 * SPACING}px;
  padding: 0;
  position: relative;
`);


const Button = styled('button')<{
    color: MlabColorType | 'gray' | 'white' | 'black',
    spacing: number,
    disableHoverBackground: boolean,
}>(({
        theme,
        color,
        spacing,
        disableHoverBackground,
    }) => css`
  border: none;
  cursor: pointer;
  border-radius: 4px;
  background-color: transparent;
  height: ${24 + spacing * 2 * SPACING}px;
  width: ${24 + spacing * 2 * SPACING}px;
  padding: 0;
  position: relative;

  ${disableHoverBackground
          ? ''
          : css`
            :hover {
              background-color: ${MLAB_OPACITY_PALETTE.black[100]};
            }

            :active {
              background-color: ${MLAB_OPACITY_PALETTE.black[200]};
            }
          `}
  :hover path {
    fill: ${(color === 'white' || color === 'black')
            ? commonPalette[color].hover
            : theme.palette[color][700]};
  }

  :active path {
    fill: ${(color === 'white' || color === 'black')
            ? commonPalette[color].active
            : theme.palette[color][800]};
  }
`);

const Badge = styled('span')<{ color: MlabColorType }>(({ theme, color }) => css`
  position: absolute;
  height: 0.5rem;
  width: 0.5rem;
  top: 0;
  right: 0;
  border-radius: 50%;
  background-color: ${theme.palette[color][600]};
`);

const SvgIcon = ({
                     color = 'gray',
                     onClick,
                     clickable,
                     children,
                     spacing = 0,
                     scale = 0,
                     disableHoverBackground,
                     badge,
                     badgeColor = 'pink',
                 }: PropsWithChildren<SvgIconProps>) => {
    return onClick || clickable
        ? (
            <Button onClick={onClick} color={color} spacing={spacing} disableHoverBackground={!!disableHoverBackground}>
                <Svg color={color}
                     spacing={spacing}
                     scale={scale}
                     xmlns='http://www.w3.org/2000/svg'
                     viewBox='0 0 24 24'
                     fill='none'>
                    {children}
                </Svg>
                {badge && <Badge color={badgeColor} />}
            </Button>
        ) : (
            <Span spacing={spacing}>
                <Svg color={color}
                     xmlns='http://www.w3.org/2000/svg'
                     spacing={spacing}
                     scale={scale}
                     viewBox='0 0 24 24'
                     fill='none'>
                    {children}
                </Svg>
                {badge && <Badge color={badgeColor} />}
            </Span>
        );
};

export default SvgIcon;