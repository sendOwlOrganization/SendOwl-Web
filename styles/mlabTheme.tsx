import { Global, ThemeProvider } from '@emotion/react';
import { ObjectUtil } from '@tools/objectUtil';
import { createContext, PropsWithChildren, useContext, useEffect, useState } from 'react';

const mlabColors = ['pink', 'blue', 'green', 'lightPink', 'purple', 'yellow', 'gray'] as const;
export type MlabColorType = typeof mlabColors[number];
type ColorMap = Record<100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 1000, string>;

export const MLAB_PALETTE: Record<Exclude<MlabColorType, 'gray'>, ColorMap> = {
    pink: {
        100: '#FDECEF',
        200: '#F9C6D0',
        300: '#f6a8b8',
        400: '#f17f96',
        500: '#EF6580',
        600: '#EB4869',
        700: '#CB405C',
        800: '#B83B54',
        900: '#A4354B',
        1000: '#8E2F42',
    },
    blue: {
        100: '#E9F0FE',
        200: '#CFDDFD',
        300: '#B6CBFC',
        400: '#A1BDFB',
        500: '#8CAEFA',
        600: '#749DF8',
        700: '#688DDE',
        800: '#5D7DC5',
        900: '#4E69A6',
        1000: '#405688',
    },
    green: {
        100: '#EDFEF1',
        200: '#DCFCE3',
        300: '#CAFBD4',
        400: '#B8F9C6',
        500: '#A7F8B8',
        600: '#91F5A6',
        700: '#81DA94',
        800: '#70BE81',
        900: '#60A26E',
        1000: '#51895D',
    },
    lightPink: {
        100: '#FEEEF1',
        200: '#FBD8DF',
        300: '#F8BECA',
        400: '#F6AAB9',
        500: '#F496A9',
        600: '#F17F96',
        700: '#D97287',
        800: '#BC6375',
        900: '#A05564',
        1000: '#864754',
    },
    purple: {
        100: '#EFE8FE',
        200: '#D9CBFC',
        300: '#CAB5FB',
        400: '#B99FF9',
        500: '#A482F7',
        600: '#9168F5',
        700: '#825DDB',
        800: '#7353C2',
        900: '#6347A6',
        1000: '#513A88',
    },
    yellow: {
        100: '#FFFBE8',
        200: '#FFF7D4',
        300: '#FFF2BD',
        400: '#FFEEA8',
        500: '#FFEA93',
        600: '#FFE57B',
        700: '#E5CE6F',
        800: '#C7B360',
        900: '#AD9B54',
        1000: '#8D7E44',
    },
} as const;

export const MLAB_NEUTRAL_PALETTE = {
    gray: {
        100: '#F4F4F4',
        200: '#DADADA',
        300: '#C5C5C6',
        400: '#A9A9AA',
        500: '#8D8D8F',
        600: '#7A7A7C',
        700: '#666769',
        800: '#535456',
        900: '#404143',
        1000: '#2D2E31',
    },
    white: '#FFFFFF',
    black: '#1A1B1E',
} as const;

export const MLAB_OPACITY_PALETTE: Record<'black' | 'white', ColorMap> = {
    black: {
        100: 'rgba(42, 50, 59, 0.1)',
        200: 'rgba(42, 50, 59, 0.2)',
        300: 'rgba(42, 50, 59, 0.3)',
        400: 'rgba(42, 50, 59, 0.4)',
        500: 'rgba(42, 50, 59, 0.5)',
        600: 'rgba(42, 50, 59, 0.6)',
        700: 'rgba(42, 50, 59, 0.7)',
        800: 'rgba(42, 50, 59, 0.8)',
        900: 'rgba(42, 50, 59, 0.9)',
        1000: '#1A1B1E',
    },
    white: {
        100: 'rgba(255, 255, 255, 0.1)',
        200: 'rgba(255, 255, 255, 0.2)',
        300: 'rgba(255, 255, 255, 0.3)',
        400: 'rgba(255, 255, 255, 0.4)',
        500: 'rgba(255, 255, 255, 0.5)',
        600: 'rgba(255, 255, 255, 0.6)',
        700: 'rgba(255, 255, 255, 0.7)',
        800: 'rgba(255, 255, 255, 0.8)',
        900: 'rgba(255, 255, 255, 0.9)',
        1000: '#FFFFFF',
    },
} as const;

export const MLAB_SEMANTIC_PALETTE = {
    negative: '#D84836',
    notice: '#E78A3E',
    positive: '#3E8C61',
    accent: '#5092EC',
} as const;

export const MLAB_THEME = {
    ...MLAB_PALETTE,
    ...MLAB_NEUTRAL_PALETTE,
    opacity: MLAB_OPACITY_PALETTE,
    semantic: MLAB_SEMANTIC_PALETTE,
} as const;

export const MLAB_ICON_COLORS = {
    balanceGame: 'purple',
    community: 'pink',
    insight: 'blue',
    notice: 'green',
    serviceCenter: 'yellow',
} as const;

export type TypographyVariant =
    | 'header'
    | 'header2'
    | 'header3'
    | 'title'
    | 'title2'
    | 'title3'
    | 'subtitle'
    | 'subtitle2'
    | 'subtitle3'
    | 'subtitle4'
    | 'body'
    | 'body2'
    | 'body3'
    | 'caption'
    | 'caption2'
    | 'caption3';

export interface MlabTheme extends MlabCommonTheme, MlabModeTheme {}

export interface MlabCommonTheme {
    color: Record<MlabColorType | 'white' | 'black', ColorMap>;
    typography: Record<TypographyVariant, { fontSize?: string; lineHeight?: number; fontWeight?: string }>;
}

export interface MlabModeTheme {
    palette: {
        primary: string;
        text: {
            primary: string;
            secondary: string;
            disabled: string;
        };
        background: {
            default: string;
            paper: string;
        };
    };
}

const mlabLightTheme: MlabModeTheme = {
    palette: {
        primary: MLAB_PALETTE.pink[600],
        text: {
            primary: MLAB_NEUTRAL_PALETTE.black,
            secondary: MLAB_NEUTRAL_PALETTE.gray[1000],
            disabled: MLAB_NEUTRAL_PALETTE.gray[700],
        },
        background: {
            default: MLAB_NEUTRAL_PALETTE.gray[200],
            paper: MLAB_NEUTRAL_PALETTE.white,
        },
    },
};

const mlabDarkTheme: MlabModeTheme = {
    palette: {
        primary: MLAB_PALETTE.pink[400],
        text: {
            primary: MLAB_NEUTRAL_PALETTE.white,
            secondary: MLAB_NEUTRAL_PALETTE.gray[200],
            disabled: MLAB_NEUTRAL_PALETTE.gray[600],
        },
        background: {
            default: MLAB_NEUTRAL_PALETTE.gray[900],
            paper: MLAB_NEUTRAL_PALETTE.black,
        },
    },
};

export const mlabTheme: MlabTheme = {
    palette: ObjectUtil.assignFlattenKey({
        obj: Object.assign({}, mlabLightTheme),
        transformer: (v) => `var(--${v})`,
    }).palette,
    color: {
        ...MLAB_PALETTE,
        ...MLAB_NEUTRAL_PALETTE,
        ...MLAB_OPACITY_PALETTE,
    },
    typography: {
        header: {
            fontSize: '2.625rem',
            lineHeight: 1.5,
            fontWeight: 'bold',
        },
        header2: {
            fontSize: '1.75rem',
            lineHeight: 1.29,
            fontWeight: 'bold',
        },
        header3: {
            fontSize: '1.5rem',
            lineHeight: 1.33,
            fontWeight: 'bold',
        },
        title: {
            fontSize: '1.125rem',
            lineHeight: 1.33,
            fontWeight: 'bold',
        },
        title2: {
            fontSize: '1rem',
            lineHeight: 1.33,
            fontWeight: 'bold',
        },
        title3: {
            fontSize: '0.875rem',
            lineHeight: 1.43,
            fontWeight: 'bold',
        },
        subtitle: {
            fontSize: '1.125rem',
            lineHeight: 1.33,
            fontWeight: 'bold',
        },
        subtitle2: {
            fontSize: '1rem',
            lineHeight: 1.5,
            fontWeight: 'bold',
        },
        subtitle3: {
            fontSize: '0.875rem',
            lineHeight: 1.43,
            fontWeight: 'bold',
        },
        subtitle4: {
            fontSize: '0.75rem',
            lineHeight: 1.5,
            fontWeight: 'bold',
        },
        body: {
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
        caption: {
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
};

const toCssVariable = (obj: object): string =>
    Object.entries(ObjectUtil.flattenObject({ obj }))
        .map(([key, value]) => `--${key}: ${value};`)
        .join('\n');

export const mlabGlobalCss = `
    body {
        color: ${mlabTheme.palette.text.primary};
        background-color: ${mlabTheme.palette.background.default};
    }
    .dark {
        ${toCssVariable(mlabDarkTheme)}
    }
    .light {
        ${toCssVariable(mlabLightTheme)}
    }
`;

const ThemeModeContext = createContext<{
    mode: 'light' | 'dark';
    setMode: (mode: 'light' | 'dark') => void;
    toggleMode: () => void;
}>({
    mode: 'light',
    setMode: (mode) => {},
    toggleMode: () => {},
});

export const MlabThemeProvider = ({ children }: PropsWithChildren<{}>) => {
    const [mode, setMode] = useState<'light' | 'dark'>('light');

    useEffect(() => {
        document.body.classList.toggle('light', mode === 'light');
        document.body.classList.toggle('dark', mode === 'dark');
    }, [mode]);

    return (
        <ThemeModeContext.Provider
            value={{ mode, setMode, toggleMode: () => setMode(mode === 'dark' ? 'light' : 'dark') }}>
            <Global styles={mlabGlobalCss} />
            <ThemeProvider theme={mlabTheme}>{children}</ThemeProvider>
        </ThemeModeContext.Provider>
    );
};

export const useMlabThemeMode = () => useContext(ThemeModeContext);
