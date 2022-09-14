import { css, styled, useTheme } from '@mui/material';
import { MLAB_NEUTRAL_PALETTE, MLAB_OPACITY_PALETTE, MlabColorType } from '@styles/mlabTheme';
import { PropsWithChildren } from 'react';

const SPACING = 4;
const ICON_CONTAINER_SIZE = 24;

type SvgIconColorType = MlabColorType | 'gray' | 'white' | 'black'
type SvgIconColorKey = 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 1000;

export interface SvgIconProps {
    color?: SvgIconColorType;
    colorKey?: SvgIconColorKey;
    onClick?: () => void;
    disableHoverBackground?: boolean;
    clickable?: boolean;
    spacing?: number;
    scale?: number;
    badge?: MlabColorType;
    roundedBorder?: boolean;
    width?: number;
    height?: number;
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
    color: SvgIconColorType,
    colorKey: SvgIconColorKey,
    spacing: number,
    scale: number
}>(({
        theme,
        color,
        colorKey,
        spacing,
        scale,
    }) => css`
  height: ${ICON_CONTAINER_SIZE + spacing * 2 * SPACING}px;
  width: ${ICON_CONTAINER_SIZE + spacing * 2 * SPACING}px;
  padding: ${spacing * SPACING - (1 + scale) * spacing}px;

  path {
    fill: ${(color === 'white' || color === 'black')
            ? commonPalette[color].main
            : theme.palette[color][colorKey]};
  }
`);


const Span = styled('span')<{ spacing: number }>(({ spacing }) => css`
  background-color: transparent;
  height: ${ICON_CONTAINER_SIZE + spacing * 2 * SPACING}px;
  width: ${ICON_CONTAINER_SIZE + spacing * 2 * SPACING}px;
  padding: 0;
  position: relative;
`);


const Button = styled('button', {
    shouldForwardProp: (name) => !['disableHoverBackground', 'rounded'].includes(name as string),
})<{
    color: SvgIconColorType,
    colorKey: SvgIconColorKey,
    spacing: number,
    disableHoverBackground: boolean,
    rounded: boolean,
}>(({
        theme,
        color,
        colorKey,
        spacing,
        disableHoverBackground,
        rounded,
    }) => css`
  border: none;
  cursor: pointer;
  border-radius: ${rounded ? 16 : 4}px;
  background-color: transparent;
  height: ${ICON_CONTAINER_SIZE + spacing * 2 * SPACING}px;
  width: ${ICON_CONTAINER_SIZE + spacing * 2 * SPACING}px;
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
            : theme.palette[color][(Math.min(colorKey + 100, 1000)) as SvgIconColorKey]};
  }

  :active path {
    fill: ${(color === 'white' || color === 'black')
            ? commonPalette[color].active
            : theme.palette[color][(Math.min(colorKey + 200, 1000)) as SvgIconColorKey]};
  }
`);

const Badge = styled('span')<{ color: MlabColorType }>(({ theme, color }) => css`
  position: absolute;
  height: 0.5rem;
  width: 0.5rem;
  top: 2px;
  right: 2px;
  border-radius: 50%;
  background-color: ${theme.palette[color][600]};
`);

const SvgIcon = ({
                     color,
                     colorKey = 600,
                     onClick,
                     clickable,
                     children,
                     spacing = 0,
                     scale = 0,
                     width = ICON_CONTAINER_SIZE,
                     height = ICON_CONTAINER_SIZE,
                     disableHoverBackground,
                     badge,
                     roundedBorder,
                 }: PropsWithChildren<SvgIconProps>) => {
    const theme = useTheme();
    const fixedColor = color || (theme.palette.mode === 'dark' ? 'white' : 'black');


    return onClick || clickable
        ? (
            <Button rounded={!!roundedBorder} onClick={onClick} color={fixedColor} colorKey={colorKey} spacing={spacing}
                    disableHoverBackground={!!disableHoverBackground}>
                <Svg color={fixedColor}
                     colorKey={colorKey}
                     spacing={spacing}
                     scale={scale}
                     xmlns='http://www.w3.org/2000/svg'
                     viewBox={`0 0 ${width} ${height}`}
                     fill='none'>
                    {children}
                </Svg>
                {badge && <Badge color={badge} />}
            </Button>
        ) : (
            <Span spacing={spacing}>
                <Svg color={fixedColor}
                     colorKey={colorKey}
                     xmlns='http://www.w3.org/2000/svg'
                     spacing={spacing}
                     scale={scale}
                     viewBox={`0 0 ${width} ${height}`}
                     fill='none'>
                    {children}
                </Svg>
                {badge && <Badge color={badge} />}
            </Span>
        );
};

export default SvgIcon;