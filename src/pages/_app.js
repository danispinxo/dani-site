import Head from "next/head";
import { StrictMode } from "react";
import "normalize.css";
import "../styles/styles.scss";
import "../styles/Navbar.scss";
import "../styles/Book.scss";
import "../styles/Contact.scss";
import "../styles/Gallery.scss";
import "../styles/ListPages.scss";
import "../styles/ListHistory.scss";
import "../styles/Publication.scss";
import "../styles/When.scss";
import "../styles/Swift.scss";
import "../styles/Poems.scss";
import "../styles/Error.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { Syne, Source_Serif_4 } from "next/font/google";

const syne = Syne({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-display",
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
});

function MyApp({ Component, pageProps }) {
  return (
    <StrictMode>
      <Head>
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes, viewport-fit=cover"
        />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link rel="icon" href="/favicon.ico" />
        <title>Dani Spinosa</title>
      </Head>
      <div className={`${syne.variable} ${sourceSerif.variable}`}>
        <Component
          {...pageProps}
          fonts={{ display: syne, body: sourceSerif }}
        />
      </div>
    </StrictMode>
  );
}

export default MyApp;
