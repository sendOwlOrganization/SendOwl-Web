import { createTheme } from '@mui/material';
import { MLAB_NEUTRAL_PALETTE, MLAB_OPACITY_PALETTE, MLAB_PALETTE, MLAB_SEMANTIC_PALETTE } from '@styles/mlabTheme';
import { CSSProperties } from 'react';

declare module '@mui/material/styles' {
    interface Color {
        1000: string;
    }

    interface ColorPartial {
        100?: string;
        200?: string;
        300?: string;
        400?: string;
        500?: string;
        600?: string;
        700?: string;
        800?: string;
        900?: string;
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


const createMlabMuiTheme = () => createTheme({
    palette: {
        primary: {
            main: MLAB_PALETTE.pink['500'],
        },
        secondary: {
            main: MLAB_PALETTE.purple['500'],
        },
        common: {
            white: MLAB_NEUTRAL_PALETTE.white,
            black: MLAB_NEUTRAL_PALETTE.black,
        },
        success: {
            main: MLAB_SEMANTIC_PALETTE.positive,
        },
        error: {
            main: MLAB_SEMANTIC_PALETTE.negative,
        },
        info: {
            main: MLAB_SEMANTIC_PALETTE.accent,
        },
        warning: {
            main: MLAB_SEMANTIC_PALETTE.notice,
        },
        ...MLAB_PALETTE,
        gray: MLAB_NEUTRAL_PALETTE.gray,
        contrastThreshold: 1,
        background: {
            default: MLAB_NEUTRAL_PALETTE.gray[200],
        },
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
        MuiDialog: {
            styleOverrides: {
                container: {
                    backgroundColor: MLAB_OPACITY_PALETTE.black[100],
                    backdropFilter: 'blur(5px)',
                },
            },
        },
    },
});

export default createMlabMuiTheme;