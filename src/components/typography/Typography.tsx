import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { MlabTheme, TypographyVariant } from '@styles/mlabTheme';
import { ComponentProps, ElementType, PropsWithChildren } from 'react';

const VariantMapping: Partial<Record<TypographyVariant, ElementType>> = {
    header: 'h1',
    header2: 'h2',
    header3: 'h3',
    title: 'h4',
    title2: 'h4',
    title3: 'h4',
    subtitle: 'h5',
    subtitle2: 'h5',
    subtitle3: 'h6',
    subtitle4: 'h6',
    caption: 'span',
    caption2: 'span',
    caption3: 'span',
};

interface TypographyProps extends Omit<ComponentProps<'p'>, 'color'> {
    as?: ElementType;
    variant?: TypographyVariant;
    color?: 'primary' | 'secondary' | 'disabled' | ((color: MlabTheme['color']) => string) | string;
    fontWeight?: 'normal' | 'bold' | string | number;
}

const Typography = ({
    variant = 'body',
    as = VariantMapping[variant] || 'p',
    fontWeight,
    children,
    color,
    ...pProps
}: PropsWithChildren<TypographyProps>) => {
    const theme = useTheme();
    return (
        <Paragraph as={as} variant={variant} fontWeight={fontWeight} colorOverride={color} {...pProps}>
            {children}
        </Paragraph>
    );
};

const Paragraph = styled.p<{
    variant: NonNullable<TypographyProps['variant']>;
    fontWeight: TypographyProps['fontWeight'];
    colorOverride?: ((color: MlabTheme['color']) => string) | string;
}>(({ theme, variant, fontWeight, colorOverride }) => ({
    ...theme.typography[variant],
    fontWeight,
    color: colorOverride
        ? typeof colorOverride === 'string'
            ? colorOverride === 'primary' || colorOverride === 'secondary' || colorOverride === 'disabled'
                ? theme.palette.text[colorOverride]
                : colorOverride
            : colorOverride(theme.color)
        : theme.palette.text.primary,
}));

export default Typography;
