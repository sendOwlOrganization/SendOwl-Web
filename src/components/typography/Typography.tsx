import styled from '@emotion/styled';
import { TypographyVariant } from '@styles/mlabTheme';
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

interface TypographyProps extends ComponentProps<'p'> {
    as?: ElementType;
    variant?: TypographyVariant;
    fontWeight?: 'normal' | 'bold' | string | number;
}

const Typography = ({
    variant = 'body',
    as = VariantMapping[variant] || 'p',
    fontWeight,
    children,
    ...pProps
}: PropsWithChildren<TypographyProps>) => {
    return (
        <Paragraph as={as} variant={variant} fontWeight={fontWeight} {...pProps}>
            {children}
        </Paragraph>
    );
};

const Paragraph = styled.p<{
    variant: NonNullable<TypographyProps['variant']>;
    fontWeight: TypographyProps['fontWeight'];
}>(({ theme, variant, fontWeight }) => ({
    ...theme.typography[variant],
    fontWeight,
}));

export default Typography;
