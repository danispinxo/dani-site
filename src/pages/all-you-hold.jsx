import { useState, useEffect } from "react";
import TopNavbar from "../components/Navbar";
import {
  firstBlankEmojis,
  secondBlankEmojis,
} from "../scripts/all-you-hold/constants.js";

const PoemGenerator = () => {
  const [firstBlank, setFirstBlank] = useState("");
  const [secondBlank, setSecondBlank] = useState("");

  const updatePoem = () => {
    const firstIndex = Math.floor(Math.random() * firstBlankEmojis.length);
    const secondIndex = Math.floor(Math.random() * secondBlankEmojis.length);

    setFirstBlank(firstBlankEmojis[firstIndex]);
    setSecondBlank(secondBlankEmojis[secondIndex]);
  };

  useEffect(() => {
    updatePoem();
    const intervalId = setInterval(updatePoem, 4000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <TopNavbar />
      <div className="tech-grid" />
      <main>
        <div className="poem-page">
          <div className="poem-container">
            <h1 className="poem-title">All You Hold</h1>
            <div className="poem-content">
              <p className="poem-line">
                When all you hold is a{" "}
                <span className="emoji-slot" key={`first-${firstBlank}`}>
                  {firstBlank}
                </span>
                , everything looks like a{" "}
                <span className="emoji-slot" key={`second-${secondBlank}`}>
                  {secondBlank}
                </span>
                .
              </p>
            </div>
            <div className="poem-meta">
              <span className="poem-status">Updating every 4 seconds</span>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default PoemGenerator;

export async function getServerSideProps() {
  return { props: {} };
}
