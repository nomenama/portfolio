import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html lang="en">
            <Head />
                <link rel="shortcut icon" href="/assets/img/favicon.ico" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
                <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800&display=swap" rel="stylesheet" />
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}
