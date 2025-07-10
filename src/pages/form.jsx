import { useState } from "react";
import Button from "@mui/material/Button";
import { fonts, lines } from "../scripts/form/constants";
import TopNavbar from "../components/Navbar";
import Footer from "../components/Footer";

const Form = () => {
  const [buttonText, setButtonText] = useState("Add another line!");
  const [poemLines, setPoemLines] = useState([]);

  const lineSelector = () => lines[Math.floor(Math.random() * lines.length)];
  const fontSelector = () => fonts[Math.floor(Math.random() * fonts.length)];
  const sizeSelector = () => Math.floor(Math.random() * 38);

  const buttonClickHandler = () => {
    setButtonText("Added!");
    setTimeout(() => setButtonText("Add another line!"), 1500);
    writePoem();
  };

  const writePoem = () => {
    const newLine = lineSelector();
    const fontSize = sizeSelector();
    const fontFamily = fontSelector();

    const lineElement = (
      <p key={poemLines.length} style={{ fontFamily, fontSize }}>
        {newLine}
      </p>
    );

    setPoemLines((prevLines) => [lineElement, ...prevLines]);
  };

  return (
    <>
      <TopNavbar />
      <div className="tech-grid" />
      <main>
        <div className="page-content">
          <div className="page-container">
            <h1 className="page-title">Form</h1>
            <p className="poem-attribution">
              Poem by Andy Weaver, Programming by Dani Spinosa
            </p>

            <div className="poem-interface">
              <Button
                variant="outlined"
                onClick={buttonClickHandler}
                className="poem-button"
              >
                {buttonText}
              </Button>

              <div className="poem-display" id="poem-placeholder">
                {poemLines}
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
};

export default Form;
