import Typography from '@components/mlab-ds/Typography';
import styled from '@emotion/styled';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
    title: 'components/mlab-ds/Typography',
    component: Typography,
    argTypes: {
        fontWeight: {
            control: {
                type: 'select',
            },
            options: ['bold', 'normal'],
        },
        as: {
            table: {
                disable: true,
            },
        },
        variant: {
            table: {
                disable: true,
            },
        },
    },
} as ComponentMeta<typeof Typography>;

const Template: ComponentStory<typeof Typography> = ({ children, ...args }) => (
    <>
        {(
            [
                'header',
                'header2',
                'header3',
                'title',
                'title2',
                'title3',
                'subtitle',
                'subtitle2',
                'subtitle3',
                'subtitle4',
                'body',
                'body2',
                'body3',
                'caption',
                'caption2',
                'caption3',
            ] as const
        ).map((variant) => (
            <Typography key={variant} variant={variant} color={'secondary'} {...args}>
                {variant} {children}
            </Typography>
        ))}
    </>
);

export const Example = Template.bind({});
Example.args = {
    children: 'The quick brown fox jumps over the lazy dog 다람쥐 헌 쳇바퀴에 타고파 0123456789 !@#$%^&*()_+-=<>,.?/;',
};

const Container = styled.div`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`;
