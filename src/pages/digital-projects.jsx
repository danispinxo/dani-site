import TopNavbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";

const DigitalProjects = () => {
  return (
    <>
      <TopNavbar />
      <div className="tech-grid" />
      <main>
        <div className="page-content">
          <div className="page-container">
            <h1 className="page-title">Digital Writing</h1>

            <section className="writing-section">
              <h2 className="section-title">
                Interactive Poetry & Digital Literature
              </h2>

              <div className="digital-projects-grid">
                <div className="project-card">
                  <Link href="/when" className="project-link">
                    <div className="project-content">
                      <h3 className="project-title">When</h3>
                      <p className="project-description">
                        An interactive digital poem made through a crowd-sourced
                        lexicon built around a scaffold originally written by
                        Andy Weaver.
                      </p>
                      <div className="project-tech">
                        <span className="tech-indicator">
                          ▶ Interactive Poetry
                        </span>
                      </div>
                    </div>
                  </Link>
                </div>

                <div className="project-card">
                  <Link href="/form" className="project-link">
                    <div className="project-content">
                      <h3 className="project-title">Form</h3>
                      <p className="project-description">
                        A poem originally written by Andy Weaver, continually
                        rendered line by line on button click.
                      </p>
                      <div className="project-tech">
                        <span className="tech-indicator">
                          ▶ Interactive Poetry
                        </span>
                      </div>
                    </div>
                  </Link>
                </div>

                <div className="project-card">
                  <Link href="/all-you-hold" className="project-link">
                    <div className="project-content">
                      <h3 className="project-title">All You Hold</h3>
                      <p className="project-description">
                        An poem that regenerates itself and rewrites the axiom
                        "When all you hold is a hammer, everything looks like a
                        nail."
                      </p>
                      <div className="project-tech">
                        <span className="tech-indicator">
                          ▶ Generative Text
                        </span>
                      </div>
                    </div>
                  </Link>
                </div>

                <div className="project-card">
                  <Link href="/swift-sonnets" className="project-link">
                    <div className="project-content">
                      <h3 className="project-title">The Swift Sonnets</h3>
                      <p className="project-description">
                        13-line sonnet generator made from Taylor Swift lyrics,
                        originally published in the journal Taper.
                      </p>
                      <div className="project-tech">
                        <span className="tech-indicator">
                          ▶ Digital Sonnets
                        </span>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </section>
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
};

export default DigitalProjects;
