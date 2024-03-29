import css from '@emotion/css';
import styled from '@emotion/styled';
import { MLAB_NEUTRAL_PALETTE, MLAB_OPACITY_PALETTE, MlabColorType, useMlabThemeMode } from '@styles/mlabTheme';
import { PropsWithChildren } from 'react';

const SPACING = 4;
const ICON_CONTAINER_SIZE = 20;

type SvgIconColorType = MlabColorType | 'gray' | 'white' | 'black';
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

const Svg = styled('svg', {
    shouldForwardProp: (name) => !['color', 'colorKey', 'scale'].includes(name as string),
})<{
    color: SvgIconColorType;
    colorKey: SvgIconColorKey;
    scale: number;
}>(
    ({ theme, color, colorKey, scale }) => css`
        height: ${ICON_CONTAINER_SIZE * scale}px;
        width: ${ICON_CONTAINER_SIZE * scale}px;

        path {
            fill: ${theme.color[color][colorKey]};
        }
    `
);

const Span = styled('span', {
    shouldForwardProp: (name) => !['spacing', 'scale'].includes(name as string),
})<{ spacing: number; scale: number }>(
    ({ spacing, scale }) => css`
        background-color: transparent;
        height: ${ICON_CONTAINER_SIZE * scale + SPACING * spacing * 2}px;
        width: ${ICON_CONTAINER_SIZE * scale + SPACING * spacing * 2}px;
        padding: ${spacing * 4}px;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
    `
);

const Button = styled('button', {
    shouldForwardProp: (name) =>
        !['disableHoverBackground', 'rounded', 'colorKey', 'color', 'scale', 'spacing'].includes(name as string),
})<{
    color: SvgIconColorType;
    colorKey: SvgIconColorKey;
    scale: number;
    spacing: number;
    disableHoverBackground: boolean;
    rounded: boolean;
}>(
    ({ theme, color, colorKey, spacing, scale, disableHoverBackground, rounded }) => css`
        border: none;
        cursor: pointer;
        border-radius: ${rounded ? 16 : 4}px;
        background-color: transparent;
        height: ${ICON_CONTAINER_SIZE * scale + SPACING * spacing * 2}px;
        width: ${ICON_CONTAINER_SIZE * scale + SPACING * spacing * 2}px;
        padding: ${spacing * 4}px;
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
            fill: ${theme.color[color][Math.min(colorKey + 100, 1000) as SvgIconColorKey]};
        }

        :active path {
            fill: ${theme.color[color][Math.min(colorKey + 200, 1000) as SvgIconColorKey]};
        }
    `
);

const Badge = styled('span', {
    shouldForwardProp: (name) => name !== 'color',
})<{ color: MlabColorType }>(
    ({ theme, color }) => css`
        position: absolute;
        height: 0.5rem;
        width: 0.5rem;
        top: 1px;
        right: 1px;
        border-radius: 50%;
        background-color: ${theme.color[color][600]};
    `
);

const SvgIcon = ({
    color,
    colorKey = 600,
    onClick,
    clickable,
    children,
    spacing = 0,
    scale = 1,
    width = ICON_CONTAINER_SIZE,
    height = ICON_CONTAINER_SIZE,
    disableHoverBackground,
    badge,
    roundedBorder,
}: PropsWithChildren<SvgIconProps>) => {
    const { mode } = useMlabThemeMode();
    const fixedColor = color || (mode === 'dark' ? 'white' : 'black');

    return onClick || clickable ? (
        <Button
            rounded={!!roundedBorder}
            onClick={onClick}
            scale={scale}
            color={fixedColor}
            colorKey={colorKey}
            spacing={spacing}
            disableHoverBackground={!!disableHoverBackground}>
            <Svg
                color={fixedColor}
                colorKey={colorKey}
                scale={scale}
                xmlns='http://www.w3.org/2000/svg'
                viewBox={`0 0 ${width} ${height}`}
                fill='none'>
                {children}
            </Svg>
            {badge && <Badge color={badge} />}
        </Button>
    ) : (
        <Span spacing={spacing} scale={scale}>
            <Svg
                color={fixedColor}
                colorKey={colorKey}
                xmlns='http://www.w3.org/2000/svg'
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
