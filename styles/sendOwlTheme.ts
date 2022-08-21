import { createTheme } from '@mui/material';
import { ColorPartial } from '@mui/material/styles/createPalette';
import { MLAB_THEME } from '@styles/mlabTheme';
import { CSSProperties } from 'react';

declare module '@mui/material/styles' {
    interface Color {
        1000?: string;
    }

    // allow configuration using `createTheme`
    interface PaletteOptions {
        pink?: ColorPartial;
        lightPink?: ColorPartial;
        yellow?: ColorPartial;
        green?: ColorPartial;
        blue?: ColorPartial;
        purple?: ColorPartial;
        gray?: ColorPartial;
    }

    // allow configuration using `createTheme`
    interface TypographyVariantsOptions {
        subtitle3?: CSSProperties;
        subtitle4?: CSSProperties;
    }

    interface TypographyVariants {
        subtitle3: CSSProperties;
        subtitle4: CSSProperties;
    }

    interface Palette {
        pink: ColorPartial;
        lightPink: ColorPartial;
        yellow: ColorPartial;
        green: ColorPartial;
        blue: ColorPartial;
        purple: ColorPartial;
        gray: ColorPartial;
    }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
    interface TypographyPropsVariantOverrides {
        subtitle3: true;
        subtitle4: true;
        h4: false;
        h5: false;
        h6: false;
    }
}

const mlabColorTypes = [
    'pink',
    'blue',
    'green',
    'lightPink',
    'purple',
    'yellow',
    'gray',
] as const;

type MlabColorTypes = typeof mlabColorTypes[number];

const MLAB_PALETTE: Record<MlabColorTypes, ColorPartial> = {
    pink: MLAB_THEME.pink,
    lightPink: MLAB_THEME.lightPink,
    yellow: MLAB_THEME.yellow,
    green: MLAB_THEME.green,
    blue: MLAB_THEME.blue,
    purple: MLAB_THEME.purple,
    gray: MLAB_THEME.gray,
};

const createSendOwlTheme = () => createTheme({
    palette: {
        primary: {
            main: MLAB_THEME.pink['500'],
        },
        secondary: {
            main: MLAB_THEME.purple['500'],
        },
        common: {
            white: MLAB_THEME.white,
            black: MLAB_THEME.black,
        },
        success: {
            main: MLAB_THEME.semantic.positive,
        },
        error: {
            main: MLAB_THEME.semantic.negative,
        },
        info: {
            main: MLAB_THEME.semantic.accent,
        },
        warning: {
            main: MLAB_THEME.semantic.notice,
        },
        ...MLAB_PALETTE,
    },
    shape: {
        borderRadius: 20,
    },
    typography: {
        fontFamily: [
            'Pretendard',
        ].join(','),
        h1: {
            fontWeight: 'bold',
            fontSize: '2.5rem',
            lineHeight: 1,
        },
        h2: {
            fontWeight: 'bold',
            fontSize: '2.25rem',
            lineHeight: 1,
        },
        h3: {
            fontWeight: 'bold',
            fontSize: '2rem',
            lineHeight: 1,
        },
        h4: undefined,
        h5: undefined,
        h6: undefined,
        subtitle1: {
            fontWeight: 'bold',
            fontSize: '1.5rem',
            lineHeight: 1,
        },
        subtitle2: {
            fontWeight: 'bold',
            fontSize: '1.5rem',
            lineHeight: 1,
        },
        subtitle3: {
            fontWeight: 'bold',
            fontSize: '1.25rem',
            lineHeight: 1,
        },
        subtitle4: {
            fontWeight: 'bold',
            fontSize: '1rem',
            lineHeight: 1,
        },
        body1: {
            fontSize: '1rem',
            lineHeight: 1,
        },
        body2: {
            fontSize: '0.75rem',
            lineHeight: 1,
        },
        caption: {
            fontSize: '0.5rem',
            lineHeight: 1,
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                // contained: {
                //     color: 'white',
                //     background: 'linear-gradient(239deg, rgba(40,35,206,1) 0%, rgba(125,178,255,1) 100%)',
                //     border: '1px solid',
                //     borderImage: 'linear-gradient(239deg, rgba(40,35,206,1) 0%, rgba(125,178,255,1) 100%) 1',
                // },
            },
        },
    },
});

export default createSendOwlTheme;