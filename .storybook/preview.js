import { CssBaseline, ThemeProvider } from '@mui/material'
import { ThemeProvider as Emotion10ThemeProvider } from 'emotion-theming'
import '../styles/globals.css'
import { MLAB_THEME } from '../styles/mlabTheme'
import createSendOwlTheme from '../styles/sendOwlTheme'

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    backgrounds: {
        default: 'gray200',
        values: Object.entries(MLAB_THEME.gray).map(([name, value]) => ({
            name: `gray${name}`,
            value,
        })),
    },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
}

const theme = createSendOwlTheme()

// https://mui.com/material-ui/guides/migration-v4/#storybook-emotion-with-v5
export const decorators = [
    (Story) => (
        <Emotion10ThemeProvider theme={theme}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Story />
            </ThemeProvider>
        </Emotion10ThemeProvider>
    ),
]