import TopNavbar from "../components/Navbar";

const Teaching = () => {
  return (
    <>
      <TopNavbar />
      <div className="tech-grid" />
      <main>
        <div className="page-content">
          <div className="page-container">
            <h1 className="page-title">Teaching</h1>

            <section className="writing-section">
              <h2 className="section-title">As Course Director</h2>

              <div className="teaching-institution">
                <h3 className="institution-name">Dalhousie University</h3>
                <div className="reading-list">
                  <ul className="bullet-list">
                    <li>CRWR3010/ENGL3098: Creative Writing: Poetry 1</li>
                    <li>CRWR3011/ENGL3099: Creative Writing: Poetry 2</li>
                    <li>CRWR2002: Introduction to Creative Writing</li>
                  </ul>
                </div>
              </div>

              <div className="teaching-institution">
                <h3 className="institution-name">Trent University</h3>
                <div className="reading-list">
                  <ul className="bullet-list">
                    <li>
                      ENGL4307H: Digital Adventures in English (2 sections)
                      (Nominee,{" "}
                      <a
                        href="https://showcase.trentonlineblog.ca/uncategorized/dani-spinosa-english/"
                        rel="noreferrer noopener"
                      >
                        Award for Excellence in Online Teaching
                      </a>
                      , Trent University)
                    </li>
                  </ul>
                </div>
              </div>

              <div className="teaching-institution">
                <h3 className="institution-name">York University</h3>
                <div className="reading-list">
                  <ul className="bullet-list">
                    <li>
                      EN2240 6.0: Introduction to Postcolonial Literature (4
                      sections)
                    </li>
                    <li>
                      EN4181 6.0: Studies in Contemporary Literature: Writers
                      and Drugs (4 sections)
                    </li>
                    <li>
                      EN4000 3.0: Studies in Literary Theory: Cultural Studies
                    </li>
                    <li>
                      EN2260 6.0: Introduction to World Literature (3 sections)
                    </li>
                    <li>EN3350 3.0: Harlem Renaissance</li>
                    <li>EN4400 6.0: Diaspora Literatures</li>
                    <li>EN2011 3.0: Gender Studies I</li>
                  </ul>
                </div>
              </div>

              <div className="teaching-institution">
                <h3 className="institution-name">Sheridan College</h3>
                <div className="reading-list">
                  <ul className="bullet-list">
                    <li>PUBL43576: Emergent Issues in Publishing</li>
                    <li>LITT10918G: World Mythology (5 sections)</li>
                    <li>
                      COMM19999: Essential Communication Skills (11 sections)
                    </li>
                    <li>ENGL17889: Composition and Rhetoric (5 sections)</li>
                    <li>HUMN18448G: Folk and Fairy Tales (2 sections)</li>
                    <li>LITT19798GD: Classical Mythology (5 sections)</li>
                    <li>LITT26367GD: Gender & Sexuality in Literature</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="writing-section">
              <h2 className="section-title">As Teaching Assistant</h2>

              <div className="teaching-institution">
                <h3 className="institution-name">York University</h3>
                <div className="reading-list">
                  <ul className="bullet-list">
                    <li>EN2010 6.0: Gender Studies</li>
                    <li>EN3100 6.0: Contemporary Literature</li>
                    <li>EN2002 3.0: Literary Theory 2</li>
                    <li>EN2001 3.0: Literary Theory 1</li>
                    <li>EN2100 6.0: Poetry</li>
                    <li>EN2220 6.0: Introduction to Canadian Literature</li>
                  </ul>
                </div>
              </div>

              <div className="teaching-institution">
                <h3 className="institution-name">Wilfrid Laurier University</h3>
                <div className="reading-list">
                  <ul className="bullet-list">
                    <li>EN121: Reading Drama</li>
                    <li>EN120: Reading Poetry</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="writing-section">
              <h2 className="section-title">As Marker/Grader</h2>

              <div className="teaching-institution">
                <h3 className="institution-name">York University</h3>
                <div className="reading-list">
                  <ul className="bullet-list">
                    <li>EN4400: Diaspora Literatures (2 sections)</li>
                    <li>EN2240: Introduction to Postcolonial Literature</li>
                    <li>EN2250: Introduction to British Literature</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="writing-section">
              <h2 className="section-title">Other Instructor Experience</h2>
              <div className="reading-list">
                <ul className="bullet-list">
                  <li>
                    Private Tutor: ESL Language Skills (Undergraduate & Graduate
                    Students)
                  </li>
                  <li>
                    TACT (Teaching Assistant Certificate in Teaching); SEDA
                    Accreditation
                  </li>
                  <li>
                    Private Tutor: Reading, Writing, &c (Grades 6-Undergraduate)
                  </li>
                </ul>
              </div>
            </section>
          </div>
        </div>
      </main>
    </>
  );
};

export default Teaching;
