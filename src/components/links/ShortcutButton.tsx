import { SvgIconProps } from '@components/icons/SvgIcon';
import { css, styled, Typography } from '@mui/material';
import { MlabColorType } from '@styles/mlabTheme';
import NextLink from 'next/link';
import { cloneElement, ReactElement, useMemo } from 'react';

interface ColorProps {
    color: MlabColorType | 'gray';
    colorKey?: SvgIconProps['colorKey'];
}

interface ShortcutButtonProps extends ColorProps {
    href: string;
    icon: ReactElement;
    text: string;
}

const Anchor = styled('a')<Required<ColorProps>>(({ theme, color, colorkey }) => css`
  width: 9.75rem;
  height: 3.25rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: ${theme.shape.borderRadius}px;
  background-color: ${theme.palette.background.paper};

  & > * {
    margin-right: 0.354rem;
  }

  & > *:last-child {
    margin-right: 0;
  }

  &:hover {
    color: ${theme.palette.text.secondary};
  }

  &:active {
    color: ${theme.palette[color][colorkey]};
  }
`);

const ShortcutButton = ({ href = '#', color, colorKey = 600, text, icon }: ShortcutButtonProps) => {
    const coloredIcon = useMemo(() => cloneElement(icon, { color, colorKey: colorkey }), [color, colorKey, icon]);
    return (
        <NextLink href={href} passHref>
            <Anchor color={color} colorKey={colorKey}>
                {coloredIcon}
                <Typography variant={'subtitle3'} fontWeight={'bold'} color={'inherit'}>
                    {text}
                </Typography>
            </Anchor>
        </NextLink>
    );
};

export default ShortcutButton;
