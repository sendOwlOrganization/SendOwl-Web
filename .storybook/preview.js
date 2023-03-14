import { RouterContext } from 'next/dist/shared/lib/router-context';
import { useCallback, useEffect } from 'react';
import 'react-spring-bottom-sheet/dist/style.css';
import { RecoilRoot } from 'recoil';
import { useDarkMode } from 'storybook-dark-mode';
import '../styles/globals.css';
import { MLAB_NEUTRAL_PALETTE, MlabThemeProvider, useMlabThemeMode } from '../styles/mlabTheme';

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

export const decorators = [
    (Story) => {
        const isDark = useDarkMode();

        const ThemeToggler = useCallback(
            ({ children }) => {
                const { setMode } = useMlabThemeMode();
                useEffect(() => {
                    setMode(isDark ? 'dark' : 'light');
                }, [isDark]);
                return children;
            },
            [isDark]
        );

        return (
            <RecoilRoot>
                <MlabThemeProvider>
                    <ThemeToggler>
                        <Story />
                    </ThemeToggler>
                </MlabThemeProvider>
            </RecoilRoot>
        );
    },
];
