import { Box, css, Grow, styled, Typography } from '@mui/material';

interface TooltipProps {
    align?: 'left' | 'center' | 'right';
    location?: 'up' | 'down';
}

const Tooltip = styled(Typography)<TooltipProps>(
    ({ theme, align, location }) => css`
        border-radius: 1rem;
        padding: 0.25rem 0.625rem;
        border-top-color: ${theme.palette.mode === 'dark' ? theme.palette.lightPink[600] : theme.palette.common.black};
        background-color: ${theme.palette.mode === 'dark' ? theme.palette.lightPink[600] : theme.palette.common.black};

        color: ${theme.palette.gray[100]};
        margin-bottom: 1rem;
        position: relative;

        &:after {
            content: '';
            position: absolute;
            color: ${theme.palette.lightPink[600]};

            ${location === 'up'
                ? {
                      borderBottom: '10px solid black',
                      borderBottomColor: 'inherit',
                      borderLeft: '10px solid transparent',
                      borderRight: '10px solid transparent',
                      top: '-0.625rem',
                  }
                : {
                      borderTop: '10px solid black',
                      borderTopColor: 'inherit',
                      borderLeft: '10px solid transparent',
                      borderRight: '10px solid transparent',
                      bottom: '-0.625rem',
                  }};

            ${align === 'left'
                ? {
                      left: '15%',
                  }
                : align === 'center'
                ? {
                      left: '45%',
                  }
                : {
                      right: '15%',
                  }};
        }
    `
);

interface HintBalloonProps {
    label: string;
    open: boolean;
    align: 'left' | 'center' | 'right';
    location: 'up' | 'down';
}

const HintBalloon = (props: HintBalloonProps) => {
    const { label, open, align, location } = props;
    return (
        <Grow
            in={open}
            style={{
                transitionDelay: '250ms',
            }}
            mountOnEnter
            timeout={1000}
            unmountOnExit>
            <Box display={'flex'} justifyContent={'center'}>
                <Tooltip variant={'body2'} align={align} location={location}>
                    {label}
                </Tooltip>
            </Box>
        </Grow>
    );
};

export default HintBalloon;
