import dynamic from "next/dynamic";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDice,
  faDiceOne,
  faDiceTwo,
  faDiceThree,
  faDiceFour,
  faDiceFive,
  faDiceSix,
  faSquareCheck,
} from "@fortawesome/free-solid-svg-icons";

const RandomTask = ({
  rerolls,
  handleReroll,
  handleDoneFromRandom,
  randomTask,
}) => {
  const getDiceIcon = (rerolls) => {
    if (rerolls > 6) {
      return faDice;
    } else if (rerolls === 6) {
      return faDiceSix;
    } else if (rerolls === 5) {
      return faDiceFive;
    } else if (rerolls === 4) {
      return faDiceFour;
    } else if (rerolls === 3) {
      return faDiceThree;
    } else if (rerolls === 2) {
      return faDiceTwo;
    } else if (rerolls === 1) {
      return faDiceOne;
    }
    return faDiceOne; // Default fallback
  };

  if (!randomTask) return null;

  return (
    <div className="random-task">
      <h2>Currently Working On...</h2>
      <p className="current-task">
        {rerolls > 0 ? (
          <button
            className="save-button"
            onClick={() => handleReroll(randomTask)}
            type="button"
          >
            <FontAwesomeIcon icon={getDiceIcon(rerolls)} />
          </button>
        ) : (
          <button className="save-button" disabled type="button">
            <FontAwesomeIcon icon={faDiceOne} />
          </button>
        )}
        <button
          className="done-button"
          onClick={() => handleDoneFromRandom(randomTask)}
          type="button"
        >
          <FontAwesomeIcon icon={faSquareCheck} />
        </button>
        {randomTask.text}
      </p>
    </div>
  );
};

// Export as a dynamic component with no SSR
export default dynamic(() => Promise.resolve(RandomTask), { ssr: false });
