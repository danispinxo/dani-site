import Book from "../../components/Book";
import TopNavbar from "../../components/Navbar";

const WhisperingGallery = () => {
  return (
    <>
      <TopNavbar />
      <div className="tech-grid" />
      <main>
        <div className="page-content">
          <div className="page-container">
            <h1 className="page-title">Whispering Gallery</h1>

            <section className="writing-section">
              <Book
                cover="/images/ariadne.jpeg"
                title="Whispering Gallery"
                date="forthcoming 13 October 2026"
                notes="with Assembly Press"
              />
            </section>
          </div>
        </div>
      </main>
    </>
  );
};

export default WhisperingGallery;
