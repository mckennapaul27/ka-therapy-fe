import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }

    render() {
        return (
            <Html>
                <Head>
                    {/* <meta
                        name='viewport'
                        content='width=device-width, initial-scale=1, shrink-to-fit=no'
                    /> */}
                    {/* <link
                        rel='icon'
                        type='image/png'
                        href={require('../images/favicon.png')}></link> */}
                    <link
                        rel='stylesheet'
                        type='text/css'
                        href='/animate.min.css'
                    />
                    <link
                        rel='stylesheet'
                        type='text/css'
                        href='/bootstrap.min.css'
                    />
                    {/* <link rel='stylesheet' type='text/css' href='/icofont.min.css'/>
                    <link rel='stylesheet' type='text/css' href='/pe-icon-7-stroke.css'/> */}
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
