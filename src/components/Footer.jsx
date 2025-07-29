import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <p className="footer-tagline">
            {">> writer. researcher. developer. <<"}
          </p>
        </div>

        <div className="footer-section">
          <div className="footer-links">
            <Link href="/contact" className="footer-link">
              contact
            </Link>
            <span className="footer-separator">•</span>
            <a
              href="https://github.com/danispinxo"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
              aria-label="GitHub"
            >
              github
            </a>
            <span className="footer-separator">•</span>
            <a
              href="https://www.linkedin.com/in/dani-spinosa-dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
              aria-label="LinkedIn"
            >
              linkedin
            </a>
          </div>
        </div>

        <div className="footer-section">
          <p className="footer-copyright">
            © {currentYear} Dani Spinosa. Built with Next.js & caffeine.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
