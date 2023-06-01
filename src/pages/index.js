import React from "react";
import "normalize.css";
import "./styles.scss";

export default function Homepage() {
  return (
    <main>
      <div className="index-bio">
        <p>
          Dani Spinosa is a poet, scholar, educator, writer, and full-stack web
          developer. She's a co-founding editor of Gap Riot Press, the Managing
          Editor of the Electronic Literature Directory, and the author of two
          books: <i>OO: Typewriter Poems</i> (Invisible Publishing, 2020) and
          <i>Anarchists in the Academy</i> (U of Alberta Press, 2018). She has
          published several chapbooks of poetry and several more peer-reviewed
          journal articles on poetry. She lives in Tkaronto/Toronto.
        </p>
      </div>
    </main>
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
