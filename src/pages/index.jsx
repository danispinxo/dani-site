import TopNavbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";

export default function Homepage() {
  return (
    <>
      <TopNavbar />
      <div className="tech-grid" />
      <main>
        <div className="index-bio">
          <div className="bio-container">
            <h1 className="bio-heading">About</h1>
            <p>
              Dani Spinosa is a poet, scholar, educator, writer, and a trained
              full-stack developer. She is an adjunct professor, a software
              developer at Hatch Coding, a digital and creative project manager,
              a co-founding editor of{" "}
              <a
                href="https://www.gapriotpress.com/"
                target="_blank"
                rel="noreferrer noopener"
              >
                Gap Riot Press
              </a>
              , President of the feminist literary journal,{" "}
              <i>
                <a
                  href="https://www.canthius.com/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Canthius
                </a>
              </i>
              , the Managing Editor of the Electronic Literature Directory, and
              the author of two books:
              <i> OO: Typewriter Poems</i> (Invisible Publishing, 2020) and{" "}
              <i>Anarchists in the Academy</i> (U of Alberta Press, 2018). She
              has published several chapbooks of poetry and several more
              peer-reviewed journal articles on poetry. She lives in beautiful
              Wasaga Beach, Ontario.
            </p>
          </div>
          <Image
            className="author-photo"
            alt="Dani Spinosa Portrait"
            src={"/images/author-photo.jpg"}
            width={350}
            height={350}
            sizes="(max-width: 320px) 180px, (max-width: 360px) 200px, (max-width: 599px) 220px, (max-width: 959px) 260px, (max-width: 1279px) 300px, 350px"
            priority
          />
        </div>
        <Footer />
      </main>
    </>
  );
}
