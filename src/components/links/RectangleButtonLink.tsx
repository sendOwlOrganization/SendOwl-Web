import RectangleButton from '@components/buttons/RectangleButton';
import NextLink from 'next/link';
import { ComponentProps } from 'react';

interface RectangleButtonLinkProps extends ComponentProps<typeof RectangleButton> {
    href: string;
}

const RectangleButtonLink = ({ href, disabled, ...props }: RectangleButtonLinkProps) => {
    return disabled ? (
        <RectangleButton disabled {...props} />
    ) : (
        <NextLink href={href} passHref legacyBehavior>
            <RectangleButton as={'a'} {...props} />
        </NextLink>
    );
};

export default RectangleButtonLink;
