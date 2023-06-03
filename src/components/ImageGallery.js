import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function ImageGallery() {
  return (
    <ImageList
      sx={{width: 600, height: 400}}
      variant="quilted"
      cols={6}
      rowHeight={100}
    >
      {itemData.map((item) => (
        <ImageListItem
          key={item.img}
          cols={item.cols || 1}
          rows={item.rows || 1}
        >
          <img
            {...srcset(item.img, 100, item.rows, item.cols)}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: "/images/gap-riot-table.jpg",
    title: "Gap Riot Table",
    rows: 2,
    cols: 2,
  },
  {
    img: "/images/gap-riot-books.png",
    title: "Gap Riot Books",
  },
  {
    img: "/images/fertile-fest-claren.jpg",
    title: "Fertile Fest with Claren",
  },
  {
    img: "/images/guest-cover.jpg",
    title: "Guest Cover",
    rows: 2,
    cols: 2,
  },
  {
    img: "/images/glosas-1.jpg",
    title: "Glosas v.1 Cover",
  },
  {
    img: "/images/reading-b-and-w.jpg",
    title: "Reading Black and White",
    author: "Jesse Pajuäär",
  },
  {
    img: "/images/gap-riot-logo.jpg",
    title: "Gap Riot Logo",
    author: "Stace Schmidt McLean",
  },
  {
    img: "/images/fertile-fest-isla.jpg",
    title: "Fertile Fest with Isla",
  },
  {
    img: "/images/vispo-cover.jpg",
    title: "Cover of Visual Poetry for Women",
  },
  {
    img: "/images/h-of-a-night.jpg",
    title: "H of a Night Reading",
  },
  {
    img: "/images/talk-flyer.jpg",
    title: "Design Talk Flyer",
    rows: 2,
    cols: 2,
  },
  {
    img: "/images/oo-cover.jpg",
    title: "OO Cover",
  },
  {
    img: "/images/gap-riot-mic.jpg",
    title: "Gap Riot Introduction",
  },
  {
    img: "/images/lost-launches.jpg",
    title: "Reading at Lost Launches Art Bar",
  },
  {
    img: "/images/kate-launch.jpg",
    title: "Launch of Kate Siklosi's Selvage",
    rows: 2,
  },
  {
    img: "/images/keynote-2.jpg",
    title: "Keynote at Where From Here",
  },
  {
    img: "/images/gary-reading.png",
    title: "milkmag Flyer",
  },
  {
    img: "/images/gap-riot-more-books.jpg",
    title: "Gap Riot Publications",
  },
  {
    img: "/images/amanda-package.jpg",
    title: "Poems for Friends",
  },
  {
    img: "/images/derek-article.jpg",
    title: "Article in Quill and Quire",
  },
];
