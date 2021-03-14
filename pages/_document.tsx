import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="pt-BR">
        <Head>
          <meta name="theme-color" content="#72ec95" />
          <meta name="description" content="Coffee break para todos relaxarem e se divertirem com aquele lanche especial."/>

          <link rel="shortcut icon" href="/favicon.png" type="image/png"/>
          <link 
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&family=Ubuntu:wght@700&display=swap"
            rel="stylesheet"
          ></link>
          
          <script data-ad-client="ca-pub-7903729949301030" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
