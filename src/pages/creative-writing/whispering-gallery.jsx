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
              />

              <div className="book-praise">
                <h3 className="praise-heading">
                  Praise for Whispering Gallery
                </h3>

                <h4 className="reviews-heading">
                  Reviews of and Press for Whispering Gallery
                </h4>

                <ul className="reviews-list">
                  <li>
                    <i>Whisper Gallery</i> in the Publisher's Weekly <a href="https://www.publishersweekly.com/pw/by-topic/new-titles/adult-announcements/article/100723-fall-2026-fiction-nonfiction-preview-poetry.html" target="_blank" rel="noreferrer noopener">Fall 2026 Preview</a>
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
