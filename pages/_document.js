import React from "react";
import NextDocument, { Html, Head, Main, NextScript } from "next/document";

export default class Document extends NextDocument {
  render() {
    return (
      <Html>
        <Head>
          <link
            rel="preload"
            href="/fonts/Suisse/SuisseIntl-Regular-WebS.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/fonts/SuisseMono/SuisseIntlMono-Regular-WebS.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />

          <link rel="icon" href="/favicons/favicon-16x16.png" sizes="16x16" />
          <link rel="icon" href="/favicons/favicon-32x32.png" sizes="32x32" />
          <link rel="icon" href="/favicons/favicon-96x96.png" sizes="96x96" />
          <link
            rel="icon"
            href="/favicons/android-chrome-192x192.png"
            sizes="192x192"
          />

          <link rel="shortcut icon" href="/favicons/favicon.ico" />

          <link
            rel="apple-touch-icon"
            href="/favicons/apple-icon-120x120.png"
            sizes="120x120"
          />
          <link
            rel="apple-touch-icon"
            href="/favicons/apple-icon-152x152.png"
            sizes="152x152"
          />
          <link
            rel="apple-touch-icon"
            href="/favicons/apple-icon-180x180.png"
            sizes="180x180"
          />

          <meta name="msapplication-TileColor" content="#FFFFFF" />
          <meta
            name="msapplication-TileImage"
            content="/favicons/ms-icon-144x144.png"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
