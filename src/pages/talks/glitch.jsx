import TopNavbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const Glitch = () => {
  return (
    <>
      <TopNavbar />
      <div className="tech-grid" />
      <main>
        <div className="page-content">
          <iframe
            src="https://docs.google.com/presentation/d/1TGfqoMoNBmK2sx76AVuwuqozfOLpz9tlw7CmiabiU6w/embed?start=false&loop=false&delayms=3000"
            width="1280"
            height="749"
            allowfullscreen="true"
            mozallowfullscreen="true"
            webkitallowfullscreen="true"
          />
        </div>
        <Footer />
      </main>
    </>
  );
};

export default Glitch;
