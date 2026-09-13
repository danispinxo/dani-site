import Book from "../../components/Book";
import TopNavbar from "../../components/Navbar";

const WhisperingGallery = () => {
  return (
    <>
      <TopNavbar />
      <main>
        <div className="page-content">
          <div className="page-container">
            <h1 className="page-title">Whispering Gallery</h1>

            <section className="writing-section">
              <Book
                cover="/images/WhisperingGallery.jpg"
                title="Whispering Gallery"
                date="forthcoming 13 October 2026"
                notes="with Assembly Press"
                linkType="sale"
                link="https://assemblypress.ca/shop/whispering-gallery"
              />

              <div className="book-praise">
                <h3 className="praise-heading">
                  Praise for Whispering Gallery
                </h3>

                <div className="praise-quote">
                  <p>
                    "This is Auntie Dani writing the world as it is and has
                    been, and as it could be, all for the sake of this new life,
                    an opening salvo of a mentorship, offered open-hearted,
                    without cover or expectation or bullshit."
                  </p>
                  <cite>rob mclennan</cite>
                </div>

                <div className="praise-quote">
                  <p>
                    "Beautiful and hypnotic, subtle and shocking,{" "}
                    <em>Whispering Gallery</em> is an instant classic. Dani
                    Spinosa&apos;s entrancing visual poems and vulnerable,
                    insightful prose poetry will echo through you long after you
                    read the last page."
                  </p>
                  <cite>
                    Helen Hajnoczky, author of <em>Frost &amp; Pollen</em>
                  </cite>
                </div>

                <div className="praise-quote">
                  <p>
                    "An incredibly punk holler; all grief and anxiety and fury
                    and exasperation, mind and body. Dani Spinosa ain&apos;t
                    keeping her voice down in this{" "}
                    <em>Whispering Gallery</em>, she&apos;s joined by a Greek
                    chorus of semi-feral voices. Medea, Pasiphae, Cassandra,
                    Hestia hold hands through the scary parts.{" "}
                    <em>Whispering Gallery</em> is all pussy, all riot."
                  </p>
                  <cite>
                    Derek Beaulieu, author of{" "}
                    <em>
                      Do It Wrong: How to Be a Poet In the Twenty-First Century
                    </em>
                  </cite>
                </div>

                <div className="praise-quote">
                  <p>
                    "In the captivating space of her prose poems&apos; justified
                    walls, Spinosa refigures the tragic heroines of Greek
                    mythology. Her companion visual poems weave word and flesh
                    in shades of black and red that recall a typewriter&apos;s
                    ribbon, bedecking and binding alike Glauke and Pasiphae,
                    along with Alkmene, Thetis, and other foremothers. These
                    poems do not hold captive, but rather encapsulate—offering
                    protection while revealing the ways the gazes of gods and
                    men disastrously hemmed them in. Nuanced and complex, the
                    voices that whisper here resonate in new and profound ways,
                    resisting any attempt to subsume their bodies by taking back
                    their own tongues. This is a spellbinding book."
                  </p>
                  <cite>
                    Amaranth Borsuk, author of <em>The Book</em>
                  </cite>
                </div>

                <h4 className="reviews-heading">
                  Reviews of and Press for Whispering Gallery
                </h4>

                <ul className="reviews-list">
                  <li>
                    mclennan, rob. "
                    <a
                      href="https://robmclennan.blogspot.com/2026/09/dani-spinosa-whispering-gallery-poems.html"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      Rev. of Dani Spinosa, <em>Whispering Gallery: Poems</em>
                    </a>
                    ." 11 September 2026.
                  </li>
                  <li>
                    Cade, Colleen. "
                    <a
                      href="https://alllitup.ca/two-poems-whispering-gallery/"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      Two Poems: Whispering Gallery
                    </a>
                    ." <em>All Lit Up</em>, 9 September 2026.
                  </li>
                  <li>
                    <i>Whispering Gallery</i> in the Quill & Quire{" "}
                    <a
                      href="https://quillandquire.com/omni/2026-fall-preview-short-fiction-graphic-novels-and-poetry/"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      Fall 2026 Preview
                    </a>
                  </li>
                  <li>
                    <i>Whispering Gallery</i> in the Publisher&apos;s Weekly{" "}
                    <a
                      href="https://www.publishersweekly.com/pw/by-topic/new-titles/adult-announcements/article/100723-fall-2026-fiction-nonfiction-preview-poetry.html"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      Fall 2026 Preview
                    </a>
                  </li>
                  <li>
                    <i>Whispering Gallery</i> in the 49th Shelf{" "}
                    <a
                      href="https://49thshelf.com/Blog/2026/08/06/Most-Anticipated-Our-2026-Fall-Poetry-Preview"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      Most Anticipated: Our 2026 Fall Poetry Preview
                    </a>
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

export default WhisperingGallery;
