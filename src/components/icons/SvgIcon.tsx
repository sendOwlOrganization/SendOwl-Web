import { css, styled, useTheme } from '@mui/material';
import { MLAB_NEUTRAL_PALETTE, MLAB_OPACITY_PALETTE, MlabColorType } from '@styles/mlabTheme';
import { PropsWithChildren } from 'react';

const SPACING = 4;
const ICON_CONTAINER_SIZE = 20;
const MIN_ICON_CONTAINER_SIZE = 10;

type SvgIconColorType = MlabColorType | 'gray' | 'white' | 'black'
type SvgIconColorKey = 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 1000;

export interface SvgIconProps {
    color?: SvgIconColorType;
    colorkey?: SvgIconColorKey;
    onClick?: () => void;
    disableHoverBackground?: boolean;
    clickable?: boolean;
    spacing?: number;
    scale?: number;
    badge?: MlabColorType;
    roundedBorder?: boolean;
    width?: number;
    height?: number;
    alignItems?: string;
    minimum?: boolean;
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

const Svg = styled('svg', {
    shouldForwardProp: name => ![
        'color',
        'colorkey',
        'scale',
        'minimum',
    ].includes(name as string),
})<{
    color: SvgIconColorType,
    colorkey: SvgIconColorKey,
    scale: number,
    minimum?: boolean,
}>(({
        theme,
        color,
        colorkey,
        scale,
        minimum,
    }) => css`
  height: ${minimum ? ICON_CONTAINER_SIZE*scale : MIN_ICON_CONTAINER_SIZE*scale } px;
  width:  ${minimum ? ICON_CONTAINER_SIZE*scale : MIN_ICON_CONTAINER_SIZE*scale } px;

  path {
    fill: ${(color === 'white' || color === 'black')
            ? commonPalette[color].main
            : theme.palette[color][colorkey]};
  }
`);


const Span = styled('span', {
    shouldForwardProp: name => ![
        'spacing',
        'scale',
        'minimum',
    ].includes(name as string),
})<{ spacing: number, scale: number, minimum?: boolean }>(({ spacing, theme, scale, minimum }) => css`
  background-color: transparent;
  height: ${minimum ? MIN_ICON_CONTAINER_SIZE * scale + (SPACING * spacing * 2) : ICON_CONTAINER_SIZE * scale + (SPACING * spacing * 2)}px;
  width: ${minimum ? MIN_ICON_CONTAINER_SIZE * scale + (SPACING * spacing * 2) : ICON_CONTAINER_SIZE * scale + (SPACING * spacing * 2)}px;
  padding: ${theme.spacing(spacing / 2)};
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`);


const Button = styled('button', {
    shouldForwardProp: (name) => ![
        'disableHoverBackground',
        'rounded',
        'colorkey',
        'color',
        'scale',
        'spacing',
        'alignItems',
        'minimum',
    ].includes(name as string),
})<{
    color: SvgIconColorType,
    colorkey: SvgIconColorKey,
    scale: number,
    spacing: number,
    disableHoverBackground: boolean,
    rounded: boolean,
    minimum?: boolean,
}>(({
        theme,
        color,
        colorkey,
        spacing,
        scale,
        disableHoverBackground,
        rounded,
        minimum,
    }) => css`
  border: none;
  cursor: pointer;
  border-radius: ${rounded ? 16 : 4}px;
  background-color: transparent;
  height: ${minimum ? MIN_ICON_CONTAINER_SIZE * scale + (SPACING * spacing * 2) : ICON_CONTAINER_SIZE * scale + (SPACING * spacing * 2)}px;
  width: ${minimum ? MIN_ICON_CONTAINER_SIZE * scale + (SPACING * spacing * 2) : ICON_CONTAINER_SIZE * scale + (SPACING * spacing * 2)}px;
  padding: ${theme.spacing(spacing / 2)};
  display: flex;
  align-items: center;
  justify-content: center;
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
            : theme.palette[color][(Math.min(colorkey + 100, 1000)) as SvgIconColorKey]};
  }

  :active path {
    fill: ${(color === 'white' || color === 'black')
            ? commonPalette[color].active
            : theme.palette[color][(Math.min(colorkey + 200, 1000)) as SvgIconColorKey]};
  }
`);

const Badge = styled('span', {
    shouldForwardProp: name => name !== 'color',
})<{ color: MlabColorType }>(({ theme, color }) => css`
  position: absolute;
  height: 0.5rem;
  width: 0.5rem;
  top: 1px;
  right: 1px;
  border-radius: 50%;
  background-color: ${theme.palette[color][600]};
`);

const SvgIcon = ({
                     color,
                     colorkey = 600,
                     onClick,
                     clickable,
                     children,
                     spacing = 0,
                     scale = 1,
                     disableHoverBackground,
                     badge,
                     width,
                     height,
                     roundedBorder,
                     minimum,
                 }: PropsWithChildren<SvgIconProps>) => {
    const theme = useTheme();
    const fixedColor = color || (theme.palette.mode === 'dark' ? 'white' : 'black');

    return onClick || clickable
        ? (
            <Button rounded={!!roundedBorder}
                    onClick={onClick}
                    scale={scale}
                    color={fixedColor}
                    colorkey={colorkey}
                    spacing={spacing}
                    disableHoverBackground={!!disableHoverBackground}
                    minimum={minimum}
            >
                <Svg color={fixedColor}
                     colorkey={colorkey}
                     scale={scale}
                     xmlns='http://www.w3.org/2000/svg'
                     viewBox={`0 0 ${minimum ? MIN_ICON_CONTAINER_SIZE : ICON_CONTAINER_SIZE} ${minimum ? MIN_ICON_CONTAINER_SIZE : ICON_CONTAINER_SIZE}`}
                     fill='none'
                     minimum={minimum}
                >
                    {children}
                </Svg>
                {badge && <Badge color={badge} />}
            </Button>
        ) : (
            <Span spacing={spacing} scale={scale} minimum={minimum}>
                <Svg color={fixedColor}
                     colorkey={colorkey}
                     xmlns='http://www.w3.org/2000/svg'
                     scale={scale}
                     viewBox={`0 0 ${minimum ? MIN_ICON_CONTAINER_SIZE : ICON_CONTAINER_SIZE} ${minimum ? MIN_ICON_CONTAINER_SIZE : ICON_CONTAINER_SIZE}`}
                     fill='none'
                     minimum={minimum}
                >
                    {children}
                </Svg>
                {badge && <Badge color={badge} />}
            </Span>
        );
};

export default SvgIcon;