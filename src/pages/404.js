import Link from "next/link";
import TopNavbar from "../components/Navbar";

const NotFoundPage = () => {
  return (
    <>
      <TopNavbar />
      <div className="tech-grid" />
      <main>
        <div className="error-page">
          <div className="error-container">
            <h1 className="error-code">404</h1>
            <h2 className="error-title">Page Not Found</h2>
            <p className="error-message">
              Sorry! It looks like the page you are trying to visit doesn&apos;t
              exist. The link may be broken or the page may have been moved.
            </p>
            <Link href="/" className="error-home-link">
              Return Home
            </Link>
          </div>
        </div>
      </main>
    </>
  );
};

export default NotFoundPage;
