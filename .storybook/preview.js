import { CssBaseline, ThemeProvider } from '@mui/material';
import { useGlobals } from '@storybook/addons';
import { ThemeProvider as Emotion10ThemeProvider } from 'emotion-theming';
import { RouterContext } from 'next/dist/shared/lib/router-context';
import { useEffect, useState } from 'react';
import 'react-spring-bottom-sheet/dist/style.css';
import { RecoilRoot } from 'recoil';
import { useDarkMode } from 'storybook-dark-mode';
import { updateReactSpringBottomSheetTheme } from '../src/tools/updateReactSpringBottomSheetTheme';
import '../styles/globals.css';
import { MLAB_NEUTRAL_PALETTE } from '../styles/mlabTheme';
import createMlabMuiTheme from '../styles/muiTheme';

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    nextRouter: {
        Provider: RouterContext.Provider,
        path: '/',
        asPath: '/',
        query: {},
        push() {},
    },
    backgrounds: {
        values: Object.entries(MLAB_NEUTRAL_PALETTE.gray)
            .map(([name, value]) => ({
                name: `gray${name}`,
                value,
            }))
            .concat([
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
};

// https://mui.com/material-ui/guides/migration-v4/#storybook-emotion-with-v5
export const decorators = [
    (Story) => {
        const isDark = useDarkMode();
        const [theme, setTheme] = useState(() => createMlabMuiTheme(isDark ? 'dark' : 'light'));
        const [globals, updateGlobals] = useGlobals();

        useEffect(() => {
            const mode = isDark ? 'dark' : 'light';
            setTheme(createMlabMuiTheme(mode));
        }, [isDark]);

        useEffect(() => {
            /*
             NOTE: need to investigate why update globals does not properly change background colors sometimes
             seems to work when background color is updated with timeout.
             */
            const timeout = setTimeout(() => {
                updateGlobals({
                    backgrounds: {
                        value:
                            theme.palette.mode === 'dark' ? MLAB_NEUTRAL_PALETTE.black : MLAB_NEUTRAL_PALETTE.gray[100],
                    },
                });
            }, 100);
            updateReactSpringBottomSheetTheme(theme);

            return () => {
                clearTimeout(timeout);
            };
        }, [theme.palette.mode]);

        return (
            <RecoilRoot>
                <Emotion10ThemeProvider theme={theme}>
                    <ThemeProvider theme={theme}>
                        <CssBaseline />
                        <Story />
                    </ThemeProvider>
                </Emotion10ThemeProvider>
            </RecoilRoot>
        );
    },
];
