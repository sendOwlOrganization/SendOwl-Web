import { createTheme, PaletteColor, PaletteColorOptions } from '@mui/material';

declare module '@mui/material/styles' {
    // allow configuration using `createTheme`
    interface PaletteOptions {
        pink?: PaletteColorOptions;
        coralPink?: PaletteColorOptions;
        yellow?: PaletteColorOptions;
        lightGreen?: PaletteColorOptions;
        skyBlue?: PaletteColorOptions;
        violet?: PaletteColorOptions;
        grey1?: PaletteColorOptions;
        grey2?: PaletteColorOptions;
        grey3?: PaletteColorOptions;
        grey4?: PaletteColorOptions;
        grey5?: PaletteColorOptions;
        grey6?: PaletteColorOptions;
        grey7?: PaletteColorOptions;
        grey8?: PaletteColorOptions;
        grey9?: PaletteColorOptions;
    }

    interface Palette {
        pink: PaletteColor;
        coralPink: PaletteColor;
        yellow: PaletteColor;
        lightGreen: PaletteColor;
        skyBlue: PaletteColor;
        violet: PaletteColor;
        grey1: PaletteColor;
        grey2: PaletteColor;
        grey3: PaletteColor;
        grey4: PaletteColor;
        grey5: PaletteColor;
        grey6: PaletteColor;
        grey7: PaletteColor;
        grey8: PaletteColor;
        grey9: PaletteColor;
    }

    interface ButtonPropsColorOverrides {
        pink: true;
        coralPink: true;
        yellow: true;
        lightGreen: true;
        skyBlue: true;
        violet: true;
        grey1: true;
        grey2: true;
        grey3: true;
        grey4: true;
        grey5: true;
        grey6: true;
        grey7: true;
        grey8: true;
        grey9: true;
    }
}

declare module '@mui/material/Button' {
    interface ButtonPropsColorOverrides {
        pink: true;
        coralPink: true;
        yellow: true;
        lightGreen: true;
        skyBlue: true;
        violet: true;
        grey1: true;
        grey2: true;
        grey3: true;
        grey4: true;
        grey5: true;
        grey6: true;
        grey7: true;
        grey8: true;
        grey9: true;
    }
}

const mlabColorTypes = [
    'pink',
    'coralPink',
    'yellow',
    'lightGreen',
    'skyBlue',
    'violet',
    'grey1',
    'grey2',
    'grey3',
    'grey4',
    'grey5',
    'grey6',
    'grey7',
    'grey8',
    'grey9',
] as const;

type MlabColorTypes = typeof mlabColorTypes[number];

export const MLAB_PALETTE: Record<MlabColorTypes, string> = {
    pink: '#EB4869',
    coralPink: '#FF9C9C',
    yellow: '#FFE269',
    lightGreen: '#91F5A6',
    skyBlue: '#749DF8',
    violet: '#9168F5',
    grey1: '#2A323B',
    grey2: '#3A4552',
    grey3: '#666F7B',
    grey4: '#A8AEB8',
    grey5: '#C5C8CD',
    grey6: '#E9EBEE',
    grey7: '#F2F4F6',
    grey8: '#F8F9FB',
    grey9: '#FFFFFF',
};

const mlabPalette: Record<MlabColorTypes, PaletteColorOptions> = Object.entries(MLAB_PALETTE)
    .reduce((acc, [k, v]) => ({ ...acc, [k]: { main: v } }), {}) as Record<MlabColorTypes, PaletteColorOptions>;

const createSendOwlTheme = () => createTheme({
    palette: {
        ...mlabPalette,
        primary: mlabPalette.pink,
        secondary: mlabPalette.violet,
    },
    shape: {
        borderRadius: 20,
    },
    typography: {
        fontFamily: [
            'Noto Sans KR',
        ].join(','),
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