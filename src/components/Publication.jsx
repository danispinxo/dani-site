import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faLink,
  faBook,
  faComment,
  faCommentSlash,
  faLinkSlash,
  faStar,
  faHashtag,
} from "@fortawesome/free-solid-svg-icons";

const determineIcon = (type) => {
  switch (type) {
    case "shop":
      return faCartShopping;
    case "link":
      return faLink;
    case "read":
      return faBook;
    case "talk":
      return faComment;
    case "no-talk":
      return faCommentSlash;
    case "no-link":
      return faLinkSlash;
    case "social":
      return faHashtag;
    default:
      return faStar;
  }
};

const Publication = ({
  title,
  publication,
  press,
  date,
  notes,
  linkType,
  link,
}) => {
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
          <FontAwesomeIcon icon={determineIcon(linkType)} title={title} />
        </a>
      ) : (
        <FontAwesomeIcon
          className={`icon ${linkType === "no-link" ? "no-link" : ""}`}
          icon={determineIcon(linkType)}
          title={title}
        />
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
};

export default Publication;
