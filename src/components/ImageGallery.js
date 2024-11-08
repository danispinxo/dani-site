import Image from 'react-bootstrap/Image';

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
    author: 'Photo credit Jesse Pajuäär',
  },
  {
    src: '/images/gap-riot-logo.jpg',
    alt: 'Gap Riot Logo',
    author: 'Design credit Stace Schmidt McLean',
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
    src: '/images/keynote-flyer.jpg',
    alt: 'Keynote flyer for Where From Here Conference (Guelph, ON)',
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
    alt: 'Article on Aperture in Quill and Quire',
  },
  {
    src: '/images/vispo-middle.jpg',
    alt: 'Visual Poetry for Women',
  },
  {
    src: '/images/woman-e-lit.jpg',
    alt: 'Women in E-literature',
  },
  {
    src: '/images/to-whom-cover.jpeg',
    alt: 'Cover of To Whom Shall I Write (Noir:Z)',
  },
  {
    src: '/images/schmaltz-interview.png',
    alt: 'Interview in The Angle Screenshot',
  },
  {
    src: '/images/reading-flyer-1.jpg',
    alt: 'Reading Flyer from The Printed Word (Dundas, ON)',
  },
  {
    src: '/images/q-and-q-artcle.jpg',
    alt: 'Quill & Quire Article on OO: Typewriter Poems',
  },
  {
    src: '/images/keynote-1.jpg',
    alt: 'Keynote address at Where From Here Conference (Guelph, ON)',
  },
  {
    src: '/images/poem.png',
    alt: 'Typewriter Poem from OO: Typewriter Poems',
  },
  {
    src: '/images/lost-launches-flyer.jpg',
    alt: 'Flyer from Art Bar Lost Launches Event',
  },
  {
    src: '/images/dene-package.jpg',
    alt: 'Poetry sent to Dene Grigar',
  },
  {
    src: '/images/minor-seeds.jpg',
    alt: "Seed paper card from Abby Minor's chapbook",
  },
  {
    src: '/images/glosa.jpg',
    alt: 'Image from Glosas for Tired Eyes Vol. 1 Cover',
  },
  {
    src: '/images/karaoke.jpg',
    alt: 'Just sneaking a quick karaoke shot in there',
  },
  {
    src: '/images/keynote-2.jpg',
    alt: 'Keynote address at Where From Here Conference (Guelph, ON)',
  },
  {
    src: '/images/english-dept-art.jpg',
    alt: 'Collaborative Art Being Installed in the English Department at York University',
  },
  {
    src: '/images/gap-riot.webp',
    alt: 'At Fertile Fest 2022 (Photo Credit Kirby)',
  },
  {
    src: '/images/kate-launch-reading.jpg',
    alt: "Launch of Kate Siklosi's Selvage (Photo Credit Kirby)",
  },
];

const ImageGallery = () => {
  return (
    <div className="gallery">
      {images.map((item) => (
        <a key={item.alt} href={item.src} target="_blank" rel="noreferrer noopener">
          <img className="gallery-image" alt={item.alt} src={item.src} />
        </a>
      ))}
    </div>
  );
};

export default ImageGallery;
