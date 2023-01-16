import css from '@emotion/css';
import { styled } from '@mui/material';
import { MLAB_PALETTE } from '@styles/mlabTheme';

const AnimatedGradientBackground = styled('div')(
    ({}) => css`
        padding: 0;
        background: linear-gradient(
            -45deg,
            ${MLAB_PALETTE.yellow[600]},
            ${MLAB_PALETTE.blue[600]},
            ${MLAB_PALETTE.pink[600]},
            ${MLAB_PALETTE.green[600]}
        );
        background-size: 600% 600%;
        animation: gradient 5s ease infinite;
        padding-bottom: 48px;

        @keyframes gradient {
            0% {
                background-position: 0 50%;
            }
            50% {
                background-position: 100% 50%;
            }
            100% {
                background-position: 0 50%;
            }
        }
    `
);

export default AnimatedGradientBackground;
