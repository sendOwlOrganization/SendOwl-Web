const mlabColors = ['pink', 'blue', 'green', 'lightPink', 'purple', 'yellow'] as const;
export type MlabColorType = typeof mlabColors[number];

export const MLAB_PALETTE = {
    pink: {
        200: '#F9C6D0',
        500: '#EF6580',
        600: '#EB4869',
        700: '#CB405C',
        800: '#B83B54',
        900: '#A4354B',
        1000: '#8E2F42',
    },
    blue: {
        200: '#CFDDFD',
        500: '#8CAEFA',
        600: '#749DF8',
        700: '#688DDE',
        800: '#5D7DC5',
        900: '#4E69A6',
        1000: '#405688',
    },
    green: {
        200: '#DCFCE3',
        500: '#A7F8B8',
        600: '#91F5A6',
        700: '#81DA94',
        800: '#70BE81',
        900: '#60A26E',
        1000: '#51895D',
    },
    lightPink: {
        200: '#FBD8DF',
        500: '#F496A9',
        600: '#F17F96',
        700: '#D97287',
        800: '#BC6375',
        900: '#A05564',
        1000: '#864754',
    },
    purple: {
        200: '#D9CBFC',
        500: '#A482F7',
        600: '#9168F5',
        700: '#825DDB',
        800: '#7353C2',
        900: '#6347A6',
        1000: '#513A88',
    },
    yellow: {
        200: '#FFF7D4',
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
        200: '#F3F4F4',
        300: '#E4E6E9',
        400: '#CED1D7',
        500: '#B7BCC4',
        600: '#A8AEB8',
        700: '#868D97',
        800: '#6F7680',
        900: '#5B626C',
        1000: '#414952',
    },
    white: '#FFFFFF',
    black: '#2A323B',
} as const;

export const MLAB_OPACITY_PALETTE = {
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
    },
} as const;

export const MLAB_SEMANTIC_PALETTE = {
    negative: '#D84836',
    notice: '#E78A3E',
    positive: '#3E8C61',
    accent: '#5092EC',
};

export const MLAB_THEME = {
    ...MLAB_PALETTE,
    ...MLAB_NEUTRAL_PALETTE,
    opacity: MLAB_OPACITY_PALETTE,
    semantic: MLAB_SEMANTIC_PALETTE,
} as const;