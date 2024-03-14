import App from 'next/app';
import '../styles/styles.scss';
import "../styles/Navbar.scss";
import "../styles/Book.scss";
import "../styles/Contact.scss";
import "../styles/ListPages.scss";
import "../styles/Publication.scss";

function MyApp({ Component, pageProps }) {
  return 
  <>
    <Component {...pageProps} />
  </>;
}

export default MyApp;
