import { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import TopNavbar from "../components/Navbar";

export default function Portfolio() {
  const projects = [
    {
      cover: "/images/dani-site.png",
      link: "https://www.danispinosa.dev",
      title: "Personal Website",
      github: "https://github.com/danispinxo/dani-site",
      date: "2025",
      notes: "This website showcases my portfolio, todo list app, and full CV.",
    },
    {
      cover: "/images/jesse-site.png",
      link: "https://www.jptherapystudios.com",
      title: "Jesse Pajuäär Therapy Studios Website",
      github: "https://github.com/danispinxo/jesse-site",
      date: "2025",
      notes:
        "A personal website for a therapist, featuring info and contact form.",
    },
    {
      cover: "/images/lexiforge.png",
      title: "LexiForge",
      link: "https://lexiforge.netlify.app/",
      github: "https://github.com/danispinxo/lexiforge",
      date: "2025",
      notes:
        "React Rails app for creating constraint-based poems from open-source and public domain texts.",
    },
    {
      cover: "/images/CS.png",
      title: "Custom Studio by Hatch Coding",
      notes: "Hatch Coding Custom AI Application Builder",
      date: "2025",
    },
    {
      cover: "/images/HC-SC.png",
      title: "Science Studio/Science Corner by Hatch Coding",
      notes: "Hatch Coding LMS",
      date: "2024-2025",
    },
    {
      cover: "/images/compass.png",
      title: "Compass by Lighthouse Labs",
      notes: "Lighthouse Labs LMS",
      date: "2023-2024",
    },
    {
      cover: "/images/rudder.png",
      title: "Rudder by Lighthouse Labs",
      notes: "Lighthouse Labs Mentor Assistance Queue",
      date: "2022-2024",
    },
    {
      cover: "/images/artify.png",
      title: "Artify",
      notes:
        "Lighthouse Labs Final Group Project built in Express.js and React, website that allows artists to share and sell their work.",
      github: "https://github.com/danispinxo/artify",
      date: "2022",
    },
    {
      cover: "/images/quizzes-mobile.png",
      title: "FAAQ U. Quizzes",
      notes:
        "Lighthouse Labs Group Midterm Project, Express.js and EJS app that allows users to create and take quizzes.",
      github: "https://github.com/danispinxo/faaq-u-quizzes",
      date: "2022",
    },
  ];

  const certificates = [
    {
      src: "/images/lighthouse.jpg",
      alt: "Lighthouse Labs Web Development Bootcamp",
    },
    { src: "/images/pmi.jpg", alt: "Project Management Institute: CAPM" },
    {
      src: "/images/js-guide.jpg",
      alt: "Udemy: JavaScript - The Complete Guide 2025 (Beginner + Advanced)",
    },
    {
      src: "/images/python-fundamentals.jpg",
      alt: "Udemy: Python Fundamentals",
    },
    {
      src: "/images/complete-python.jpg",
      alt: "Udemy: The Complete Python Developer",
    },
    {
      src: "/images/python-django.jpg",
      alt: "Udemy: Python Django - The Practical Guide",
    },
    {
      src: "/images/ucss.jpg",
      alt: "Udemy: CSS - The Complete Guide 2025 (incl. Flexbox, Grid & Sass)",
    },
    {
      src: "/images/nvidia-tech.jpg",
      alt: "NVIDIA Networking Technical Curriculum",
    },
    {
      src: "/images/nvidia-desk.jpg",
      alt: "NVIDIA Virtual Desktops Technical Curriculum",
    },
    {
      src: "/images/nvidia-ai.jpg",
      alt: "NVIDIA AI Technical Curriculum",
    },
    {
      src: "/images/nvidia-compute.jpg",
      alt: "NVIDIA Compute Technical Curriculum",
    },
    {
      src: "/images/storyline-udemy.jpg",
      alt: "Udemy: Learn Articulate Storyline from Scratch",
    }
  ];

  const allImages = [
    ...projects.map((project) => ({ src: project.cover, alt: project.title })),
    ...certificates,
  ];

  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const openModal = (image, index) => {
    setSelectedImage(image);
    setSelectedIndex(index);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedImage(null);
  };

  const nextImage = () => {
    const nextIndex = (selectedIndex + 1) % allImages.length;
    setSelectedIndex(nextIndex);
    setSelectedImage(allImages[nextIndex]);
  };

  const prevImage = () => {
    const prevIndex =
      selectedIndex === 0 ? allImages.length - 1 : selectedIndex - 1;
    setSelectedIndex(prevIndex);
    setSelectedImage(allImages[prevIndex]);
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowRight") nextImage();
    if (e.key === "ArrowLeft") prevImage();
  };

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (showModal) handleKeyDown(e);
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [showModal, selectedIndex]);

  const ProjectCard = ({ project, imageIndex }) => {
    return (
      <div className="project-card">
        <button
          onClick={() => openModal(allImages[imageIndex], imageIndex)}
          className="project-image-button"
        >
          <img
            className="project-cover"
            src={project.cover}
            alt={project.title}
            title={project.title}
          />
        </button>
        <div className="project-info">
          <h5 className="project-title">{project.title}</h5>
          {project.link && (
            <a
              className="icon"
              href={project.link}
              target="_blank"
              rel="noreferrer noopener"
            >
              <FontAwesomeIcon icon={faLink} />
            </a>
          )}
          {project.github && (
            <a
              className="icon"
              href={project.github}
              target="_blank"
              rel="noreferrer noopener"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
          )}
          <p className="project-notes">{project.notes}</p>
          <p className="project-date">{project.date}</p>
        </div>
      </div>
    );
  };

  return (
    <>
      <TopNavbar />
      <div className="tech-grid" />
      <main>
        <div className="page-content">
          <div className="page-container">
            <h1 className="page-title">Dev Portfolio</h1>

            <section className="writing-section">
              <h2 className="section-title">Projects</h2>
              <div className="projects-grid">
                {projects.map((project, index) => (
                  <ProjectCard
                    key={project.title}
                    project={project}
                    imageIndex={index}
                  />
                ))}
              </div>
            </section>

            <section className="writing-section">
              <h2 className="section-title">Course Certificates</h2>
              <div className="certificates-gallery">
                {certificates.map((item, index) => (
                  <button
                    key={item.src}
                    onClick={() => openModal(item, projects.length + index)}
                    className="certificate-link"
                  >
                    <img
                      className="certificate-image"
                      alt={item.alt}
                      src={item.src}
                    />
                  </button>
                ))}
              </div>
            </section>
          </div>
        </div>
      </main>

      <Modal
        show={showModal}
        onHide={closeModal}
        centered
        size="xl"
        className="image-modal-bootstrap"
        contentClassName="image-modal-content"
      >
        <Modal.Body className="p-0 position-relative">
          <button
            className="custom-close-btn position-absolute"
            style={{ top: "15px", right: "15px", zIndex: 10 }}
            onClick={closeModal}
          >
            ×
          </button>

          <button
            className="custom-nav-btn custom-prev-btn position-absolute top-50 translate-middle-y"
            onClick={prevImage}
          >
            ❮
          </button>

          <button
            className="custom-nav-btn custom-next-btn position-absolute top-50 translate-middle-y"
            onClick={nextImage}
          >
            ❯
          </button>

          <div className="text-center p-3">
            {selectedImage && (
              <>
                <img
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className="img-fluid"
                  style={{ maxHeight: "70vh", objectFit: "contain" }}
                />
                <div className="mt-3 text-white">
                  <h5 className="mb-2">{selectedImage.alt}</h5>
                  <small className="text-muted">
                    {selectedIndex + 1} of {allImages.length}
                  </small>
                </div>
              </>
            )}
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
