import { useState, useCallback } from "react";
import Link from "next/link";
import { Image } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faBookOpenReader,
  faHeadphones,
  faLink,
} from "@fortawesome/free-solid-svg-icons";

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

const Book = ({
  cover,
  title,
  press,
  date,
  notes,
  linkType,
  link,
  detailHref,
}) => {
  const icon = link ? (
    <FontAwesomeIcon icon={determineIcon(linkType)} />
  ) : null;

  const externalLabel =
    linkType === "sale"
      ? "Purchase or view publisher page"
      : linkType === "listen"
        ? "Open audio link"
        : "Open external link";

  const [coverIsLandscape, setCoverIsLandscape] = useState(false);

  const handleCoverLoad = useCallback((e) => {
    const { naturalWidth, naturalHeight } = e.currentTarget;
    setCoverIsLandscape(naturalWidth > naturalHeight);
  }, []);

  const coverClassName =
    "book-cover" + (coverIsLandscape ? " book-cover--landscape" : "");

  const coverImage = (
    <Image
      className={coverClassName}
      src={cover}
      alt={title}
      title={title}
      onLoad={handleCoverLoad}
    />
  );

  return (
    <div className="book-component">
      {detailHref ? coverImage : <a href={cover} target="_blank" rel="noreferrer noopener">{coverImage}</a>}
      <div className="book-info">
        <h5 className="book-title">{title}</h5>
        {link &&
          (detailHref ? (
            <button
              type="button"
              className="icon book-external-icon"
              aria-label={externalLabel}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                window.open(link, "_blank", "noopener,noreferrer");
              }}
            >
              {icon}
            </button>
          ) : (
            <a
              className="icon"
              href={link}
              target="_blank"
              rel="noreferrer noopener"
            >
              {icon}
            </a>
          ))}
        <i className="book-press">{press}</i>
        <p className="book-notes">{notes}</p>
        <p className="book-date">{date}</p>
      </div>
    </div>
  );
};

const BookWithOptionalLink = (props) => {
  const { detailHref, ...rest } = props;
  const inner = <Book {...rest} detailHref={detailHref} />;
  if (!detailHref) return inner;
  return (
    <Link href={detailHref} className="book-detail-link">
      {inner}
    </Link>
  );
};

export default BookWithOptionalLink;
