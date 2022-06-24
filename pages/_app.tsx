import { CacheProvider } from '@emotion/react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { SessionProvider } from 'next-auth/react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useState } from 'react';
import { RecoilRoot } from 'recoil';
import { GlobalLayout } from '../src/components/global';
import createEmotionCache from '../src/mui/createEmotionCache';
import '../styles/globals.css';
import createSendOwlTheme from '../styles/sendOwlTheme';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
    // EmotionCache not properly typed, not working with import { EmotionCache } from '@emotion/utils';
    // EmotionCache@emotion/react !== EmotionCache@emotion/utils !== EmotionCache@emotion/cache
    // to fix later
    emotionCache?: any;
}

function MyApp({
                   Component,
                   pageProps: { session, ...pageProps },
                   emotionCache = clientSideEmotionCache,
               }: MyAppProps) {
    const [theme, setTheme] = useState(createSendOwlTheme());

    return (
        <SessionProvider session={session}>
            <CacheProvider value={emotionCache}>
                <Head>
                    <meta
                        name='viewport'
                        content='initial-scale=1, width=device-width'
                    />
                </Head>
                <RecoilRoot>
                    <ThemeProvider theme={theme}>
                        <CssBaseline />
                        <GlobalLayout>
                            <Component {...pageProps} />
                        </GlobalLayout>
                    </ThemeProvider>
                </RecoilRoot>
            </CacheProvider>
        </SessionProvider>
    );
}

export default MyApp;
