import { createTheme, PaletteMode, PaletteOptions } from '@mui/material';
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
        title1?: CSSProperties;
        title2?: CSSProperties;
        title3?: CSSProperties;
        subtitle3?: CSSProperties;
        subtitle4?: CSSProperties;
        body3?: CSSProperties;
        caption1?: CSSProperties;
        caption2?: CSSProperties;
        caption3?: CSSProperties;
    }

    interface TypographyVariants {
        title1: CSSProperties;
        title2: CSSProperties;
        title3: CSSProperties;
        subtitle3: CSSProperties;
        subtitle4: CSSProperties;
        body3: CSSProperties;
        caption1: CSSProperties;
        caption2: CSSProperties;
        caption3: CSSProperties;
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
        title1: true;
        title2: true;
        title3: true;
        subtitle3: true;
        subtitle4: true;
        h4: false;
        h5: false;
        h6: false;
        body3: true;
        caption: false;
        caption1: true;
        caption2: true;
        caption3: true;
    }
}

const PALETTE_OPTIONS: Record<PaletteMode, PaletteOptions> = {
    light: {
        text: {
            primary: MLAB_NEUTRAL_PALETTE.gray[1000],
            secondary: MLAB_NEUTRAL_PALETTE.gray[500],
            disabled: MLAB_NEUTRAL_PALETTE.gray[200],
        },
        background: {
            default: MLAB_NEUTRAL_PALETTE.gray[100],
            paper: MLAB_NEUTRAL_PALETTE.white,
        },
    },
    dark: {
        text: {
            primary: MLAB_NEUTRAL_PALETTE.gray[100],
            secondary: MLAB_NEUTRAL_PALETTE.gray[500],
            disabled: MLAB_NEUTRAL_PALETTE.gray[600],
        },
        background: {
            default: MLAB_NEUTRAL_PALETTE.black,
            paper: MLAB_NEUTRAL_PALETTE.gray[1000],
        },
    },
};


const createMlabMuiTheme = (mode: PaletteMode = 'light') => createTheme({
    palette: {
        mode: mode,
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
        ...PALETTE_OPTIONS[mode],
    },
    shape: {
        borderRadius: 20,
    },
    typography: {
        fontWeightBold: 600,
        fontWeightRegular: 300,
        fontFamily: [
            'Pretendard',
        ].join(','),
        h1: {
            fontWeight: 'bold',
            fontSize: '2.625rem',
            lineHeight: 1.5,
        },
        h2: {
            fontWeight: 'bold',
            fontSize: '1.75rem',
            lineHeight: 1.29,
        },
        h3: {
            fontWeight: 'bold',
            fontSize: '1.5rem',
            lineHeight: 1.33,
        },
        h4: undefined,
        h5: undefined,
        h6: undefined,
        title1: {
            fontSize: '1.125rem',
            fontWeight: 'bold',
            lineHeight: 1.33,
        },
        title2: {
            fontSize: '1rem',
            fontWeight: 'bold',
            lineHeight: 1.33,
        },
        title3: {
            fontSize: '0.875rem',
            fontWeight: 'bold',
            lineHeight: 1.43,
        },
        subtitle1: {
            fontWeight: 'bold',
            fontSize: '1.125rem',
            lineHeight: 1.33,
        },
        subtitle2: {
            fontWeight: 'bold',
            fontSize: '1rem',
            lineHeight: 1.5,
        },
        subtitle3: {
            fontWeight: 'bold',
            fontSize: '0.875rem',
            lineHeight: 1.43,
        },
        subtitle4: {
            fontWeight: 'bold',
            fontSize: '0.75rem',
            lineHeight: 1.5,
        },
        body1: {
            fontSize: '1rem',
            lineHeight: 1.5,
        },
        body2: {
            fontSize: '0.875rem',
            lineHeight: 1.43,
        },
        body3: {
            fontSize: '0.75rem',
            lineHeight: 1.5,
        },
        caption1: {
            fontSize: '0.75rem',
            lineHeight: 1.5,
        },
        caption2: {
            fontSize: '0.625rem',
            lineHeight: 1.2,
        },
        caption3: {
            fontSize: '0.5rem',
            lineHeight: 1.25,
        },
    },
    components: {
        MuiTypography: {
            defaultProps: {
                variantMapping: {
                    h1: 'h1',
                    h2: 'h2',
                    h3: 'h3',
                    subtitle1: 'h2',
                    subtitle2: 'h2',
                    subtitle3: 'h3',
                    subtitle4: 'h3',
                },
            },
        },
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
        MuiBackdrop: {
            styleOverrides: {
                root: {
                    backgroundColor: MLAB_OPACITY_PALETTE.black[400],
                    backdropFilter: 'blur(2px)',
                },
            },
        },
        MuiDivider: {
            styleOverrides: {
                root: {
                    margin: '0 16px 0 16px',
                }
            }
        },
    },
});

export default createMlabMuiTheme;