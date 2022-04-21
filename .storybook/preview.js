import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { ThemeProvider as Emotion10ThemeProvider } from 'emotion-theming';

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
};

const theme = createTheme();

// https://mui.com/material-ui/guides/migration-v4/#storybook-emotion-with-v5
export const decorators = [
    (Story) => (
        <Emotion10ThemeProvider theme={theme}>
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                <Story/>
            </ThemeProvider>
        </Emotion10ThemeProvider>
    ),
];