import { Image } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faBookOpenReader,
  faHeadphones,
  faLink,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const determineIcon = (type) => {
  switch (type) {
    case "sale":
      return faCartShopping;
    case "visit":
      return faBookOpenReader;
    case "listen":
      return faHeadphones;
    case "devLink":
      return faLink;
  }
};

const Book = ({ cover, title, press, date, notes, linkType, link, github }) => {
  return (
    <div className="book-component">
      <a href={cover} target="_blank" rel="noreferrer noopener">
        <Image className="book-cover" src={cover} alt={title} title={title} />
      </a>
      <div className="book-info">
        <h5 className="book-title">{title}</h5>
        {link && (
          <a
            className="icon"
            href={link}
            target="_blank"
            rel="noreferrer noopener"
          >
            <FontAwesomeIcon icon={determineIcon(linkType)} />
          </a>
        )}
        {github && (
          <a
            className="icon"
            href={github}
            target="_blank"
            rel="noreferrer noopener"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        )}
        <i className="book-press">{press}</i>
        <p className="book-notes">{notes}</p>
        <p className="book-date">{date}</p>
      </div>
    </div>
  );
};

export default Book;
