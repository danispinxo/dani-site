import TopNavbar from "../components/Navbar";
import Book from "../components/Book";

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
      <div className="tech-grid" />
      <main>
        <div className="page-content">
          <div className="page-container">
            <h1 className="page-title">Dev Portfolio</h1>

            <section className="writing-section">
              <h2 className="section-title">Projects</h2>
              <div className="books-grid">
                <Book
                  cover="/images/dani-site.png"
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
              </div>
            </section>

            <section className="writing-section">
              <h2 className="section-title">Course Certificates</h2>
              <div className="certificates-gallery">
                {images.map((item) => (
                  <a
                    key={item.src}
                    href={item.src}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="certificate-link"
                  >
                    <img
                      className="certificate-image"
                      alt={item.alt}
                      src={item.src}
                    />
                  </a>
                ))}
              </div>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}
