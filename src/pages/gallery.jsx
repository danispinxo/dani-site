import ImageGallery from "../components/ImageGallery";
import TopNavbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Gallery() {
  return (
    <>
      <TopNavbar />
      <div className="tech-grid" />
      <main>
        <div className="page-content">
          <div className="page-container">
            <h1 className="page-title">Gallery</h1>
            <p className="gallery-subtitle">
              A visual collection of readings, events, publications, and other
              moments
            </p>

            <ImageGallery />
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
}
