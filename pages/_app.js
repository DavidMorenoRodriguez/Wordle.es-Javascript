import Head from "next/head";
import React from "react";
import { CookiesProvider } from "react-cookie";
import SiteConfig from "../lib/config";
import "../styles/globals.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <CookiesProvider>
        <Head>
          <title>{SiteConfig.title}</title>
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width"
          />
        </Head>

        <Component {...pageProps} />
      </CookiesProvider>
    </>
  );
}
