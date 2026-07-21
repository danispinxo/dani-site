import ImageGallery from "../components/ImageGallery";
import TopNavbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Gallery() {
  return (
    <>
      <TopNavbar />
      <main>
        <div className="page-content">
          <div className="page-container">
            <h1 className="page-title">Gallery</h1>
            <ImageGallery />
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
}
