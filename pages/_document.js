import Document, { Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    const GA_MEASUREMENT_ID = 'G-D7LKH09Y2E'; // Paste your GTAG here
    return (
      <html lang="en">
        <Head>
          <link rel="shortcut icon" type="image/x-icon" href="/static/favicon.ico" />
          <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          />
          <script
          //eslint-disable-next-line react/no danger
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer= window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js',new Date());
              gtag('config', '${GA_MEASUREMENT_ID}',{
                page_path: window.location.pathname,
              });
            `,
          }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
