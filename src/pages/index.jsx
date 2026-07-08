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
              Dani Spinosa is a poet, scholar, educator, writer, and a computer
              programmer. She is sometimes an adjunct professor, a software developer, a
              digital and creative project manager, a co-founding editor of{" "}
              <a
                href="https://www.gapriotpress.com/"
                target="_blank"
                rel="noreferrer noopener"
              >
                Gap Riot Press
              </a>
              , President of{" "}
              <i>
                <a
                  href="https://www.canthius.com/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Canthius
                </a>
              </i>
              , the Managing Editor of the <i>Electronic Literature Directory</i>, and a member of the
              editorial collective for the <i>Electronic Literature Collection Volume 5</i>.
              She is the author of two books of poetry:
              <i> Whispering Gallery</i> (Assembly Press, 2026) and
              <i> OO: Typewriter Poems</i> (Invisible Publishing, 2020) and one scholarly book:
              <i>Anarchists in the Academy</i> (U of Alberta Press, 2018). She
              has published several chapbooks of poetry and several more
              peer-reviewed journal articles on poetry and technology. She lives in beautiful
              Wasaga Beach, Ontario with one beautiful man, two lovely cats, and one very silly dog.
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
