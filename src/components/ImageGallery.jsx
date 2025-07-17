import { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import { images } from "../scripts/gallery/constants";

const ImageGallery = () => {
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
    const nextIndex = (selectedIndex + 1) % images.length;
    setSelectedIndex(nextIndex);
    setSelectedImage(images[nextIndex]);
  };

  const prevImage = () => {
    const prevIndex =
      selectedIndex === 0 ? images.length - 1 : selectedIndex - 1;
    setSelectedIndex(prevIndex);
    setSelectedImage(images[prevIndex]);
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

  return (
    <>
      <div className="gallery">
        {images.map((item, index) => (
          <button
            key={`${item.alt}-${index}`}
            className="gallery-item"
            onClick={() => openModal(item, index)}
          >
            <img className="gallery-image" alt={item.alt} src={item.src} />
          </button>
        ))}
      </div>

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
                  {selectedImage.author && (
                    <p className="mb-1 text-muted">{selectedImage.author}</p>
                  )}
                  <small className="text-muted">
                    {selectedIndex + 1} of {images.length}
                  </small>
                </div>
              </>
            )}
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ImageGallery;
