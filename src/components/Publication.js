import * as React from "react";
import Image from "react-bootstrap/Image";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faLink,
  faBook,
  faComment,
  faCommentSlash,
  faLinkSlash,
} from "@fortawesome/free-solid-svg-icons";
import "./Publication.scss";

const determineIcon = (type) => {
  if (type === "shop") return faCartShopping;
  if (type === "link") return faLink;
  if (type === "read") return faBook;
  if (type === "talk") return faComment;
  if (type === "no-talk") return faCommentSlash;
  if (type === "no-link") return faLinkSlash;
};

export default function Publication({
  title,
  publication,
  press,
  date,
  notes,
  linkType,
  link,
}) {
  const pressLine = press ? `, ${press}` : "";
  return (
    <div className="publication-component">
      {link ? (
        <a
          className="icon"
          href={link}
          target="_blank"
          rel="noreferrer noopener"
        >
          <FontAwesomeIcon icon={determineIcon(linkType)} />
        </a>
      ) : (
        <FontAwesomeIcon className="icon" icon={determineIcon(linkType)} />
      )}

      <div className="publication-info">
        <h5 className="publication-title">{title}</h5>
        <p className="publication-press">
          <i>{publication}</i>
          {pressLine}
        </p>
        <p className="publication-notes">{notes}</p>
        <p className="publication-date">{date}</p>
      </div>
    </div>
  );
}
