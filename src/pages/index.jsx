import TopNavbar from '../components/Navbar';
import Image from 'react-bootstrap/Image';

export default function Homepage() {
  return (
    <>
      <TopNavbar />
      <main>
        <div className="index-bio">
          <Image
            className="author-photo"
            alt="Dani Spinosa Portrait"
            src={'/images/author-photo.jpg'}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            rounded
          />
          <div className="bio-container">
            <h2 className="bio-heading">About</h2>
            <p>
              Dani Spinosa is a poet, scholar, educator, writer, and full-stack web developer. She is a Junior Software Engineer at
              Lighthouse Labs, a co-founding editor of Gap Riot Press, the Managing Editor of the Electronic Literature Directory, and the
              author of two books:
              <i> OO: Typewriter Poems</i> (Invisible Publishing, 2020) and
              <i>Anarchists in the Academy</i> (U of Alberta Press, 2018). She has published several chapbooks of poetry and several more
              peer-reviewed journal articles on poetry. She lives in beautiful Wasaga Beach, Ontario.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
