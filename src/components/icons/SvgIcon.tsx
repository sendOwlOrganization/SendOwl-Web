import { css, styled } from '@mui/material';
import { MLAB_NEUTRAL_PALETTE, MlabColorType } from '@styles/mlabTheme';
import { PropsWithChildren } from 'react';

export interface SvgIconProps {
    color?: MlabColorType | 'gray' | 'white' | 'black';
    onClick?: () => void;
    clickable?: boolean;
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

const Svg = styled('svg')<{ color: MlabColorType | 'gray' | 'white' | 'black', clickable: boolean }>(({
                                                                                                          theme,
                                                                                                          color,
                                                                                                          clickable,
                                                                                                      }) => css`
  path {
    fill: ${(color === 'white' || color === 'black')
            ? commonPalette[color].main
            : theme.palette[color][600]};
  }

  ${clickable
          ? css`
            cursor: pointer;

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
          `
          : ''}
`);

const SvgIcon = ({ color = 'gray', onClick, clickable, children }: PropsWithChildren<SvgIconProps>) => {
    return (
        <Svg color={color}
             clickable={clickable || !!onClick}
             onClick={onClick}
             xmlns='http://www.w3.org/2000/svg'
             width='24'
             height='24'
             viewBox='0 0 24 24'
             fill='none'>
            {children}
        </Svg>
    );
};

export default SvgIcon;