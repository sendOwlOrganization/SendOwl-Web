import { createTheme, PaletteColor, PaletteColorOptions } from '@mui/material';

declare module '@mui/material/styles' {
    // allow configuration using `createTheme`
    interface PaletteOptions {
        orange?: PaletteColorOptions;
        violet?: PaletteColorOptions;
        blue?: PaletteColorOptions;
        green?: PaletteColorOptions;
    }

    interface Palette {
        orange: PaletteColor;
        violet: PaletteColor;
        blue: PaletteColor;
        green: PaletteColor;
    }

    interface ButtonPropsColorOverrides {
        orange: true;
        violet: true;
        blue: true;
        green: true;
    }
}

declare module '@mui/material/Button' {
    interface ButtonPropsColorOverrides {
        orange: true;
        violet: true;
        blue: true;
        green: true;
    }
}

export const MLAB_PALETTE: Record<'orange' | 'violet' | 'blue' | 'green', string> = {
    orange: '#FDBD5F',
    violet: '#B488F8',
    blue: '#3FC4EA',
    green: '#83D9A6',
};

const mlabPalette: Record<string, PaletteColorOptions> = Object.entries(MLAB_PALETTE)
    .reduce((acc, [k, v]) => ({ ...acc, [k]: { main: v } }), {});

const createSendOwlTheme = () => createTheme({
    palette: {
        ...mlabPalette,
        primary: mlabPalette.violet,
        secondary: mlabPalette.green,
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