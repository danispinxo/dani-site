import TopNavbar from "../components/Navbar";
import Book from "../components/Book";
import Publication from "../components/Publication";

export default function Portfolio() {
  const images = [
    {
      src: "/images/lighthouse.jpg",
      alt: "Lighthouse Labs Web Development Bootcamp",
    },
    { src: "/images/pmi.jpg", alt: "Project Management Institute: CAPM" },
    {
      src: "/images/python-fundamentals.jpg",
      alt: "Udemy: Python Fundamentals",
    },
    {
      src: "/images/complete-python.jpg",
      alt: "Udemy: The Complete Python Developer",
    },
    {
      src: "/images/python-django.jpg",
      alt: "Udemy: Python Django - The Practical Guide",
    },
  ];

  return (
    <>
      <TopNavbar />
      <main>
        <div className="page-content">
          <h1 className="title">Dev Portfolio</h1>
          <p className="subtitle">Projects</p>
          <Book
            cover="/images/personal-site.png"
            title="www.danispinosa.dev"
            notes="Personal Website"
            link="https://github.com/danispinxo/dani-site"
            linkType="devLink"
          />
          <Book
            cover="/images/jesse-site.png"
            title="www.jptherapystudios.com"
            notes="Jesse Pajuäär Therapy Studios Website"
            link="https://github.com/danispinxo/jesse-site"
            linkType="devLink"
          />
          <Book
            cover="/images/artify.png"
            title="Artify"
            notes="Lighthouse Labs Final Project"
            link="https://github.com/danispinxo/artify"
            linkType="devLink"
          />
          <Book
            cover="/images/quizzes-mobile.png"
            title="FAAQ U. Quizzes"
            notes="Lighthouse Labs Midterm Project"
            link="https://github.com/danispinxo/faaq-u-quizzes"
            linkType="devLink"
          />
          <p className="subtitle">Course Certificates</p>
          <div className="gallery">
            {images.map((item) => (
              <a
                key={item.src}
                href={item.src}
                target="_blank"
                rel="noreferrer noopener"
              >
                <img
                  className="cover-gallery-image"
                  alt={item.alt}
                  src={item.src}
                />
              </a>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
