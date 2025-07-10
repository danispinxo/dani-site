import Head from "next/head";
import { StrictMode } from "react";
import "normalize.css";
import "../styles/styles.scss";
import "../styles/Navbar.scss";
import "../styles/Book.scss";
import "../styles/Budget.scss";
import "../styles/Contact.scss";
import "../styles/Gallery.scss";
import "../styles/ListPages.scss";
import "../styles/ListHistory.scss";
import "../styles/Publication.scss";
import "../styles/When.scss";
import "../styles/Swift.scss";
import "../styles/ToDo.scss";
import "../styles/Poems.scss";
import "../styles/Error.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { Cormorant, Special_Elite, Varela_Round } from "next/font/google";

const cormorant = Cormorant({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});
const specialElite = Special_Elite({ subsets: ["latin"], weight: ["400"] });
const varelaRound = Varela_Round({ subsets: ["latin"], weight: ["400"] });

function MyApp({ Component, pageProps }) {
  return (
    <StrictMode>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link rel="icon" href="/favicon.ico" />
        <title>Dani Spinosa: Poet Dev && Dev Poet</title>
      </Head>
      <Component
        {...pageProps}
        fonts={{ cormorant, specialElite, varelaRound }}
      />
    </StrictMode>
  );
}

export default MyApp;
