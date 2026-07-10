import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <p className="footer-tagline">poet · scholar · maker</p>
        </div>

        <div className="footer-section">
          <ul className="footer-links">
            <li>
              <Link
                href="/contact"
                className="footer-link footer-link--icon"
                aria-label="Contact"
              >
                <FontAwesomeIcon icon={faEnvelope} aria-hidden="true" />
              </Link>
            </li>
            <li>
              <a
                href="https://github.com/danispinxo"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link footer-link--icon"
                aria-label="GitHub"
              >
                <FontAwesomeIcon icon={faGithub} aria-hidden="true" />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/dani-spinosa-dev/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link footer-link--icon"
                aria-label="LinkedIn"
              >
                <FontAwesomeIcon icon={faLinkedin} aria-hidden="true" />
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <p className="footer-copyright">© {currentYear} Dani Spinosa</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
