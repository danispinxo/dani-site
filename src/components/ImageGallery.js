import { Gallery } from 'react-grid-gallery';

const images = [
  {
    src: '/images/gap-riot-table.jpg',
    alt: 'Gap Riot Table',
  },
  {
    src: '/images/gap-riot-books.png',
    alt: 'Gap Riot Books',
  },
  {
    src: '/images/fertile-fest-claren.jpg',
    alt: 'Fertile Fest with Claren',
  },
  {
    src: '/images/guest-cover.jpg',
    alt: 'Guest Cover',
  },
  {
    src: '/images/glosas-1.jpg',
    alt: 'Glosas v.1 Cover',
  },
  {
    src: '/images/reading-b-and-w.jpg',
    alt: 'Reading Black and White',
    author: 'Jesse Pajuäär',
  },
  {
    src: '/images/gap-riot-logo.jpg',
    alt: 'Gap Riot Logo',
    author: 'Stace Schmidt McLean',
  },
  {
    src: '/images/fertile-fest-isla.jpg',
    alt: 'Fertile Fest with Isla',
  },
  {
    src: '/images/vispo-cover.jpg',
    alt: 'Cover of Visual Poetry for Women',
  },
  {
    src: '/images/h-of-a-night.jpg',
    alt: 'H of a Night Reading',
  },
  {
    src: '/images/talk-flyer.jpg',
    alt: 'Design Talk Flyer',
  },
  {
    src: '/images/oo-cover.jpg',
    alt: 'OO Cover',
  },
  {
    src: '/images/gap-riot-mic.jpg',
    alt: 'Gap Riot Introduction',
  },
  {
    src: '/images/lost-launches.jpg',
    alt: 'Reading at Lost Launches Art Bar',
  },
  {
    src: '/images/kate-launch.jpg',
    alt: "Launch of Kate Siklosi's Selvage",
  },
  {
    src: '/images/keynote-2.jpg',
    alt: 'Keynote at Where From Here',
  },
  {
    src: '/images/gary-reading.png',
    alt: 'milkmag Flyer',
  },
  {
    src: '/images/gap-riot-more-books.jpg',
    alt: 'Gap Riot Publications',
  },
  {
    src: '/images/amanda-package.jpg',
    alt: 'Poems for Friends',
  },
  {
    src: '/images/derek-article.jpg',
    alt: 'Article in Quill and Quire',
  },
];

const ImageGallery = () => {
  return <Gallery images={images} enableImageSelection={false} />;
};

export default ImageGallery;
