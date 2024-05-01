import { useState, useEffect } from 'react';
import TopNavbar from '../components/Navbar';
import { firstBlankEmojis, secondBlankEmojis } from '../scripts/all-you-hold/constants.js';

const PoemGenerator = () => {
  const [firstBlank, setFirstBlank] = useState('');
  const [secondBlank, setSecondBlank] = useState('');

  const updatePoem = () => {
    const firstIndex = Math.floor(Math.random() * firstBlankEmojis.length);
    const secondIndex = Math.floor(Math.random() * secondBlankEmojis.length);

    setFirstBlank(firstBlankEmojis[firstIndex]);
    setSecondBlank(secondBlankEmojis[secondIndex]);
  };

  useEffect(() => {
    updatePoem();
    const intervalId = setInterval(updatePoem, 1500);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <TopNavbar />
      <main className="page-content">
        <h1 className="title">All You Hold</h1>
        <p className="when-line">
          When all you hold is a {firstBlank}, everything looks like a {secondBlank}
        </p>
      </main>
    </>
  );
};

export default PoemGenerator;
