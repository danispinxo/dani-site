import Link from "next/link";
import TopNavbar from "../components/Navbar";

const NotFoundPage = () => {
  return (
    <>
      <TopNavbar />
      <main className="page-content">
        <div className="about-me">
          <div className="about-me-text">
            <h1 className="about-me-title">Page Not Found</h1>
            <h2 className="about-me-name">
              Sorry! It looks like the page you are trying to visit doesn&apos;t
              exist.
            </h2>
            <h4 className="about-me-text">
              <Link href="/">Go home</Link>.
            </h4>
          </div>
        </div>
      </main>
    </>
  );
};

export default NotFoundPage;
