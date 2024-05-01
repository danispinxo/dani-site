import Carousel from 'react-material-ui-carousel';

const itemData = [
  {
    img: '/images/gap-riot-table.jpg',
    title: 'Gap Riot Table',
  },
  {
    img: '/images/gap-riot-books.png',
    title: 'Gap Riot Books',
  },
  {
    img: '/images/fertile-fest-claren.jpg',
    title: 'Fertile Fest with Claren',
  },
  {
    img: '/images/guest-cover.jpg',
    title: 'Guest Cover',
  },
  {
    img: '/images/glosas-1.jpg',
    title: 'Glosas v.1 Cover',
  },
  {
    img: '/images/reading-b-and-w.jpg',
    title: 'Reading Black and White',
    author: 'Jesse Pajuäär',
  },
  {
    img: '/images/gap-riot-logo.jpg',
    title: 'Gap Riot Logo',
    author: 'Stace Schmidt McLean',
  },
  {
    img: '/images/fertile-fest-isla.jpg',
    title: 'Fertile Fest with Isla',
  },
  {
    img: '/images/vispo-cover.jpg',
    title: 'Cover of Visual Poetry for Women',
  },
  {
    img: '/images/h-of-a-night.jpg',
    title: 'H of a Night Reading',
  },
  {
    img: '/images/talk-flyer.jpg',
    title: 'Design Talk Flyer',
  },
  {
    img: '/images/oo-cover.jpg',
    title: 'OO Cover',
  },
  {
    img: '/images/gap-riot-mic.jpg',
    title: 'Gap Riot Introduction',
  },
  {
    img: '/images/lost-launches.jpg',
    title: 'Reading at Lost Launches Art Bar',
  },
  {
    img: '/images/kate-launch.jpg',
    title: "Launch of Kate Siklosi's Selvage",
  },
  {
    img: '/images/keynote-2.jpg',
    title: 'Keynote at Where From Here',
  },
  {
    img: '/images/gary-reading.png',
    title: 'milkmag Flyer',
  },
  {
    img: '/images/gap-riot-more-books.jpg',
    title: 'Gap Riot Publications',
  },
  {
    img: '/images/amanda-package.jpg',
    title: 'Poems for Friends',
  },
  {
    img: '/images/derek-article.jpg',
    title: 'Article in Quill and Quire',
  },
];

const ImageGallery = () => {
  return (
    <Carousel>
      {itemData.map((item) => (
        <img src={item.img} alt={item.title} width={300} />
      ))}
    </Carousel>
  );
};

export default ImageGallery;
