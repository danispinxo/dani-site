import * as React from "react";
import Image from "react-bootstrap/Image";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faBookOpenReader,
  faHeadphones,
} from "@fortawesome/free-solid-svg-icons";
import "./Book.scss";

const determineIcon = (type) => {
  if (type === "sale") return faCartShopping;
  if (type === "visit") return faBookOpenReader;
  if (type === "listen") return faHeadphones;
};

export default function Book({
  cover,
  title,
  press,
  date,
  notes,
  linkType,
  link,
}) {
  return (
    <div className="book-component">
      <Image className="book-cover" src={cover} />
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
        <i className="book-press">{press}</i>
        <p className="book-notes">{notes}</p>
        <p className="book-date">{date}</p>
      </div>
    </div>
  );
}
