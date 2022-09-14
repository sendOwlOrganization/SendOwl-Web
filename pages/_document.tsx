import createEmotionServer from '@emotion/server/create-instance';
import Document, { Head, Html, Main, NextScript } from 'next/document';
import createEmotionCache from '../src/mui/createEmotionCache';

export default class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <link rel='shortcut icon' href='/static/favicon.ico' />
                    <link
                        rel='stylesheet'
                        href='https://fonts.googleapis.com/css?family=Roboto:300,600&display=swap'
                    />
                    <link rel='stylesheet' as='style' crossOrigin={'true'}
                          href='https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.5/dist/web/static/pretendard-dynamic-subset.css' />
                    {/* Inject MUI styles first to match with the prepend: true configuration. */}
                    {(this.props as any).emotionStyleTags}

                </Head>
                <body>
                <Main />
                <NextScript />
                </body>
            </Html>
        );
    }
}

MyDocument.getInitialProps = async (ctx) => {
    const originalRenderPage = ctx.renderPage;

    const cache = createEmotionCache();
    const { extractCriticalToChunks } = createEmotionServer(cache);

    ctx.renderPage = () =>
        originalRenderPage({
            enhanceApp: (App: any) =>
                function EnhanceApp(props) {
                    return <App emotionCache={cache} {...props} />;
                },
        });

    const initialProps = await Document.getInitialProps(ctx);
    // This is important. It prevents emotion to render invalid HTML.
    // See https://github.com/mui/material-ui/issues/26561#issuecomment-855286153
    const emotionStyles = extractCriticalToChunks(initialProps.html);
    const emotionStyleTags = emotionStyles.styles.map((style) => (
        <style
            data-emotion={`${style.key} ${style.ids.join(' ')}`}
            key={style.key}
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{ __html: style.css }}
        />
    ));

    return {
        ...initialProps,
        emotionStyleTags,
    };
};