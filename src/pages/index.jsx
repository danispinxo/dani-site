import TopNavbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";
import Link from "next/link";

export default function Homepage() {
  return (
    <>
      <TopNavbar />
      <main>
        <section className="home-hero" aria-label="Whispering Gallery preorder">
          <div className="home-hero-copy">
            <h1 className="home-brand">Dani Spinosa</h1>
            <p className="home-tagline">
              Preorder <i>Whispering Gallery</i> now from Assembly Press.
              My new collection of poems out October 13, 2026.
            </p>
            <div className="home-ctas">
              <a
                href="https://assemblypress.ca/shop/whispering-gallery"
                className="home-cta home-cta--primary"
                target="_blank"
                rel="noreferrer noopener"
              >
                Preorder now
              </a>
              <Link
                href="/creative-writing/whispering-gallery"
                className="home-cta home-cta--secondary"
              >
                About the book
              </Link>
            </div>
          </div>
          <div className="home-hero-photo">
            <Image
              alt="Dani Spinosa smiling, hands in hair, wearing a denim jacket"
              src={"/images/author-photo.jpg"}
              fill
              sizes="(max-width: 959px) 100vw, 42vw"
              priority
            />
          </div>
        </section>

        <section className="home-below" aria-label="About and upcoming book">
          <div className="home-below-inner">
            <div className="home-bio">
              <h2>About</h2>
              <p>
                Dani Spinosa is a poet, scholar, educator, writer, and a computer
                programmer. She is sometimes an adjunct professor, a software
                developer, a digital and creative project manager, a co-founding
                editor of{" "}
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
                , the Managing Editor of the{" "}
                <i>Electronic Literature Directory</i>, and a member of the
                editorial collective for the{" "}
                <i>Electronic Literature Collection Volume 5</i>. She is the
                author of two books of poetry:
                <i> Whispering Gallery</i> (Assembly Press, 2026) and
                <i> OO: Typewriter Poems</i> (Invisible Publishing, 2020) and one
                scholarly book:
                <i> Anarchists in the Academy</i> (U of Alberta Press, 2018). She
                has published several chapbooks of poetry and several more
                peer-reviewed journal articles on poetry and technology. She
                lives in beautiful Wasaga Beach, Ontario with one beautiful man,
                two lovely cats, and one very silly dog.
              </p>
            </div>
            <div className="home-book">
              <a
                href="https://assemblypress.ca/shop/whispering-gallery"
                target="_blank"
                rel="noreferrer noopener"
              >
                <Image
                  src="/images/WhisperingGallery.jpg"
                  alt="Cover of Whispering Gallery by Dani Spinosa"
                  width={341}
                  height={500}
                  sizes="(max-width: 959px) 80vw, 320px"
                />
                <p className="home-book-label">Preorder from Assembly Press</p>
                <p className="home-book-title">Whispering Gallery</p>
              </a>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}
