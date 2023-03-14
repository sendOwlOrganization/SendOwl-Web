import GlobalLayout from '@components/layout/GlobalLayout';
import { CacheProvider } from '@emotion/react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import '@styles/globals.css';
import { MlabThemeProvider } from '@styles/mlabTheme';
import createMlabMuiTheme from '@styles/muiTheme';
import { NextPage } from 'next';
import { SessionProvider } from 'next-auth/react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { PropsWithChildren, useState } from 'react';
import 'react-spring-bottom-sheet/dist/style.css';
import { RecoilRoot } from 'recoil';
import createEmotionCache from '../src/mui/createEmotionCache';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
    // EmotionCache not properly typed, not working with import { EmotionCache } from '@emotion/utils';
    // EmotionCache@emotion/react !== EmotionCache@emotion/utils !== EmotionCache@emotion/cache
    // to fix later
    emotionCache?: any;
    Component: NextPage & { getLayout?: ({ children }: PropsWithChildren<{}>) => JSX.Element };
}

function MyApp({ Component, pageProps: { session, ...pageProps }, emotionCache = clientSideEmotionCache }: MyAppProps) {
    const [theme, setTheme] = useState(createMlabMuiTheme());

    // TODO: 레이아웃 시스템 삭제하고 next13 app 폴더로 전환?
    const Layout = Component.getLayout ?? GlobalLayout;

    return (
        <SessionProvider session={session}>
            <CacheProvider value={emotionCache}>
                <Head>
                    <meta name='viewport' content='initial-scale=1, width=device-width' />
                </Head>
                <RecoilRoot>
                    <ThemeProvider theme={theme}>
                        <MlabThemeProvider>

                            <CssBaseline />
                            <Layout>
                                <Component {...pageProps} />
                            </Layout>
                        </MlabThemeProvider>
                    </ThemeProvider>
                </RecoilRoot>
            </CacheProvider>
        </SessionProvider>
    );
}

export default MyApp;
