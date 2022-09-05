import { CssBaseline, ThemeProvider } from '@mui/material'
import { ThemeProvider as Emotion10ThemeProvider } from 'emotion-theming'
import { RouterContext } from 'next/dist/shared/lib/router-context'
import '../styles/globals.css'
import { MLAB_NEUTRAL_PALETTE } from '../styles/mlabTheme'
import createMlabMuiTheme from '../styles/muiTheme'

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    nextRouter: {
        Provider: RouterContext.Provider,
        path: '/',
        asPath: '/',
        query: {},
        push() {
        },
    },
    backgrounds: {
        default: 'gray200',
        values: Object.entries(MLAB_NEUTRAL_PALETTE.gray).map(([name, value]) => ({
            name: `gray${name}`,
            value,
        })).concat([
            {
                name: 'white',
                value: MLAB_NEUTRAL_PALETTE.white,
            },
            {
                name: 'black',
                value: MLAB_NEUTRAL_PALETTE.black,
            },
        ]),
    },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
}

const theme = createMlabMuiTheme()

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