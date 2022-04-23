import { CacheProvider } from '@emotion/react';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useState } from 'react';
import { RecoilRoot } from 'recoil';
import createEmotionCache from '../src/mui/createEmotionCache';
import '../styles/globals.css';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
    // EmotionCache not properly typed, not working with import { EmotionCache } from '@emotion/utils';
    // EmotionCache@emotion/react !== EmotionCache@emotion/utils !== EmotionCache@emotion/cache
    // to fix later
    emotionCache?: any;
}

function MyApp({ Component, pageProps, emotionCache = clientSideEmotionCache }: MyAppProps) {
    const [theme, setTheme] = useState(createTheme());

    return (
        <CacheProvider value={emotionCache}>
            <Head>
                <meta name="viewport" content="initial-scale=1, width=device-width"/>
            </Head>
            <RecoilRoot>
                <ThemeProvider theme={theme}>
                    <CssBaseline/>
                    <Component {...pageProps} />
                </ThemeProvider>
            </RecoilRoot>
        </CacheProvider>
    );
}

export default MyApp;
