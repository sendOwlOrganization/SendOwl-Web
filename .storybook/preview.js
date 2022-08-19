import { CssBaseline, ThemeProvider } from '@mui/material'
import { ThemeProvider as Emotion10ThemeProvider } from 'emotion-theming'
import '../styles/globals.css'
import createSendOwlTheme, { MLAB_PALETTE } from '../styles/sendOwlTheme'

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    backgrounds: {
        default: 'grey8',
        values: Object.entries(MLAB_PALETTE).map(([name, value]) => ({
            name,
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