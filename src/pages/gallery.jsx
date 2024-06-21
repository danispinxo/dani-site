import ImageGallery from '../components/ImageGallery';
import TopNavbar from '../components/Navbar';

export default function Homepage() {
  return (
    <>
      <TopNavbar />
      <main>
        <h1 className="title">Image Gallery</h1>

        <ImageGallery />
      </main>
    </>
  );
}
