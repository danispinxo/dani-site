import { useState, useEffect } from 'react';
import TopNavbar from '../components/Navbar';
import { lines } from '../scripts/swift-sonnets/constants.js';

const SwiftSonnets = () => {
  const shuffle = (array) => [...array].sort(() => Math.random() - 0.5);

  const generateSonnet = () => {
    const { a, b, c } = lines;
    const sA = shuffle(a).slice(0, 6);
    const sB = shuffle(b).slice(0, 6);
    const sC = shuffle(c).slice(0, 1);

    return [sA[0], sB[0], sA[1], sB[1], '', sA[2], sB[2], sA[3], sB[3], '', sA[4], sB[4], sA[5], sB[5], '', sC[0]];
  };

  const [sonnet, setSonnet] = useState([]);

  useEffect(() => {
    setSonnet(generateSonnet());
  }, []);

  const regenerateSonnet = () => setSonnet(generateSonnet());

  return (
    <>
      <TopNavbar />
      <main>
        <div className="c">
          <h4 className="swift-poem-title">12:01am, Friday, December 13th</h4>
          {sonnet.length > 0 &&
            sonnet.map((line, index) =>
              line === '' ? (
                <br key={index} />
              ) : (
                <div key={index} className="swift-line">
                  {line}
                </div>
              ),
            )}
        </div>
        <div className="swift-button-holder">
          <button className="swift-button" onClick={regenerateSonnet}>
            again
          </button>
        </div>
        <div className="taper-note">
          A smaller version of this poem was published in <i>Taper</i> volume 13 on Superstitions. You can read that version{' '}
          <a href="https://taper.badquar.to/13/swift_sonnets.html" target="_blank" rel="noreferrer noopener">
            here
          </a>
          .
        </div>
      </main>
    </>
  );
};

export default SwiftSonnets;
