import App from 'next/app';
import 'normalize.css';
import '../styles/styles.scss';
import '../styles/Navbar.scss';
import '../styles/Book.scss';
import '../styles/Contact.scss';
import '../styles/ListPages.scss';
import '../styles/Publication.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

const MyApp = ({ Component, pageProps }) => <Component {...pageProps} />;

export default MyApp;
