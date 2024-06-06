import ImageGallery from 'react-image-gallery';

const itemData = [
  {
    original: '/images/gap-riot-table.jpg',
    title: 'Gap Riot Table',
  },
  {
    original: '/images/gap-riot-books.png',
    title: 'Gap Riot Books',
  },
  {
    original: '/images/fertile-fest-claren.jpg',
    title: 'Fertile Fest with Claren',
  },
  {
    original: '/images/guest-cover.jpg',
    title: 'Guest Cover',
  },
  {
    original: '/images/glosas-1.jpg',
    title: 'Glosas v.1 Cover',
  },
  {
    original: '/images/reading-b-and-w.jpg',
    title: 'Reading Black and White',
    author: 'Jesse Pajuäär',
  },
  {
    original: '/images/gap-riot-logo.jpg',
    title: 'Gap Riot Logo',
    author: 'Stace Schmidt McLean',
  },
  {
    original: '/images/fertile-fest-isla.jpg',
    title: 'Fertile Fest with Isla',
  },
  {
    original: '/images/vispo-cover.jpg',
    title: 'Cover of Visual Poetry for Women',
  },
  {
    original: '/images/h-of-a-night.jpg',
    title: 'H of a Night Reading',
  },
  {
    original: '/images/talk-flyer.jpg',
    title: 'Design Talk Flyer',
  },
  {
    original: '/images/oo-cover.jpg',
    title: 'OO Cover',
  },
  {
    original: '/images/gap-riot-mic.jpg',
    title: 'Gap Riot Introduction',
  },
  {
    original: '/images/lost-launches.jpg',
    title: 'Reading at Lost Launches Art Bar',
  },
  {
    original: '/images/kate-launch.jpg',
    title: "Launch of Kate Siklosi's Selvage",
  },
  {
    original: '/images/keynote-2.jpg',
    title: 'Keynote at Where From Here',
  },
  {
    original: '/images/gary-reading.png',
    title: 'milkmag Flyer',
  },
  {
    original: '/images/gap-riot-more-books.jpg',
    title: 'Gap Riot Publications',
  },
  {
    original: '/images/amanda-package.jpg',
    title: 'Poems for Friends',
  },
  {
    original: '/images/derek-article.jpg',
    title: 'Article in Quill and Quire',
  },
];

const Gallery = () => {
  return <ImageGallery items={itemData} infinite autoplay={true} sizes={100} />;
};

export default Gallery;
