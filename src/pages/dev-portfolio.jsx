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
      src: "/images/js-guide.jpg",
      alt: "Udemy: JavaScript - The Complete Guide 2025 (Beginner + Advanced)",
    },
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
                  link="https://www.danispinosa.dev"
                  title="Personal Website"
                  github="https://github.com/danispinxo/dani-site"
                  linkType="devLink"
                  date="2025"
                  notes="This website showcases my portfolio, todo list app, and full CV."
                />
                <Book
                  cover="/images/jesse-site.png"
                  link="https://www.jptherapystudios.com"
                  title="Jesse Pajuäär Therapy Studios Website"
                  github="https://github.com/danispinxo/jesse-site"
                  linkType="devLink"
                  date="2025"
                  notes="A personal website for a therapist, featuring info and contact form."
                />
                <Book
                  cover="/images/lexiforge.png"
                  title="LexiForge"
                  link="https://lexiforge.netlify.app/"
                  github="https://github.com/danispinxo/lexiforge"
                  linkType="devLink"
                  date="2025"
                  notes="React Rails app for creating constraint-based poems from open-source and public domain texts."
                />
                <Book
                  cover="/images/CS.png"
                  title="Custom Studio by Hatch Coding"
                  notes="Hatch Coding Custom AI Application Builder"
                  date="2025"
                />
                <Book
                  cover="/images/HC-SC.png"
                  title="Science Studio/Science Corner by Hatch Coding"
                  notes="Hatch Coding LMS"
                  date="2024-2025"
                />
                <Book
                  cover="/images/compass.png"
                  title="Compass by Lighthouse Labs"
                  notes="Lighthouse Labs LMS"
                  date="2023-2024"
                />
                <Book
                  cover="/images/rudder.png"
                  title="Rudder by Lighthouse Labs"
                  notes="Lighthouse Labs Mentor Assistance Queue"
                  date="2022-2024"
                />
                <Book
                  cover="/images/artify.png"
                  title="Artify"
                  notes="Lighthouse Labs Final Group Project built in Express.js and React, website that allows artists to share and sell their work."
                  github="https://github.com/danispinxo/artify"
                  date="2022"
                />
                <Book
                  cover="/images/quizzes-mobile.png"
                  title="FAAQ U. Quizzes"
                  notes="Lighthouse Labs Group Midterm Project, Express.js and EJS app that allows users to create and take quizzes."
                  github="https://github.com/danispinxo/faaq-u-quizzes"
                  date="2022"
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
