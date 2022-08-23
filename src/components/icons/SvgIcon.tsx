import { css, styled } from '@mui/material';
import { MlabColorType } from '@styles/mlabTheme';
import { PropsWithChildren } from 'react';

export interface SvgIconProps {
    color?: MlabColorType | 'gray';
    onClick?: () => void;
    clickable?: boolean;
}

const Svg = styled('svg')<{ color: MlabColorType | 'gray', clickable: boolean }>(({ theme, color, clickable }) => css`
  path {
    fill: ${theme.palette[color][600]};
  }

  ${clickable
          ? css`
            cursor: pointer;

            :hover path {
              fill: ${theme.palette[color][700]};
            }

            :active path {
              fill: ${theme.palette[color][800]};
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