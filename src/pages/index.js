import React from "react";
import ImageGallery from "../components/ImageGallery";
import Layout from "./Layout"
import Image from "react-bootstrap/Image";
import "normalize.css";

export default function Homepage() {
  return (
    <Layout>
      <main>
        <div className="index-bio">
          <Image
            className="author-photo"
            src={"/images/author-photo.jpg"}
            rounded
          />
          <div className="bio-container">
            <h2 className="bio-heading">About</h2>
            <p>
              Dani Spinosa is a poet, scholar, educator, writer, and full-stack
              web developer. She is a Junior Software Engineer at Lighthouse Labs,
              a co-founding editor of Gap Riot Press, the Managing Editor of the
              Electronic Literature Directory, and the author of two books:
              <i> OO: Typewriter Poems</i> (Invisible Publishing, 2020) and
              <i>Anarchists in the Academy</i> (U of Alberta Press, 2018). She has
              published several chapbooks of poetry and several more peer-reviewed
              journal articles on poetry. She lives in Tkaronto/Toronto.
            </p>
          </div>
        </div>
        <div className="image-gallery">
          <ImageGallery />
        </div>
      </main>
    </Layout>
  );
}

export const Head = () => {
  return (
    <>
      <meta
        name="description"
        content="Personal website for digital humanities scholar, web developer, and poet"
      />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Cormorant:wght@500;600;700&family=Special+Elite&family=Varela+Round&display=swap"
        rel="stylesheet"
      />
      <title>Dani Spinosa</title>
    </>
  );
};
