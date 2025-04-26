import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChampagneGlasses } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';

const SuccessMessage = () => {
  const [cat, setCat] = useState(null);

  const getCongratsCat = async () => {
    try {
      const response = await fetch('https://api.thecatapi.com/v1/images/search');
      const data = await response.json();

      if (data && data[0] && data[0].url) {
        setCat(data[0].url);
      } else {
        setCat(null);
      }
    } catch (error) {
      setCat(null);
    }
  };
  useEffect(() => {
    getCongratsCat();
  }, []);

  return (
    <div className="completed-list-success-message">
      <h2>
        <FontAwesomeIcon icon={faChampagneGlasses} className="fa" />
        Congratulations
        <FontAwesomeIcon icon={faChampagneGlasses} className="fa" />
      </h2>
      <p>You have completed all your tasks for the day. Here's a kitty.</p>
      {cat && <img src={cat} alt="Congratulations Cat" className="congrats-cat" />}
    </div>
  );
};

export default SuccessMessage;
