import { CacheProvider } from '@emotion/react';
import { EmotionCache } from '@emotion/utils';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useState } from 'react';

import { RecoilRoot } from 'recoil';
import createEmotionCache from '../src/mui/createEmotionCache';
import '../styles/globals.css';
import { GlobalLayout } from '../src/components/global';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
    emotionCache?: EmotionCache;
}
function MyApp({
    Component,
    pageProps,
    emotionCache = clientSideEmotionCache,
}: MyAppProps) {
    const [theme, setTheme] = useState(createTheme());

    return (
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
    );
}

export default MyApp;
