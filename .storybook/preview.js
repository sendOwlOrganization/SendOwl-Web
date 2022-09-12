import { CssBaseline, ThemeProvider } from '@mui/material'
import { useGlobals } from '@storybook/addons'
import { ThemeProvider as Emotion10ThemeProvider } from 'emotion-theming'
import { RouterContext } from 'next/dist/shared/lib/router-context'
import { useEffect, useState } from 'react'
import { useDarkMode } from 'storybook-dark-mode'
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

// https://mui.com/material-ui/guides/migration-v4/#storybook-emotion-with-v5
export const decorators = [
    (Story) => {
        const isDark = useDarkMode()
        const [theme, setTheme] = useState(isDark ? createMlabMuiTheme('dark') : createMlabMuiTheme('light'))

        useEffect(() => {
            setTheme(isDark ? createMlabMuiTheme('dark') : createMlabMuiTheme('light'))
        }, [isDark, theme])

        const [globals, updateGlobals] = useGlobals()

        useEffect(() => {
            updateGlobals({
                backgrounds: {
                    value: theme.palette.mode === 'dark' ? MLAB_NEUTRAL_PALETTE.gray[1000] : MLAB_NEUTRAL_PALETTE.gray[300],
                },
            })
        }, [theme])

        return (
            <Emotion10ThemeProvider theme={theme}>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <Story />
                </ThemeProvider>
            </Emotion10ThemeProvider>
        )
    },
]