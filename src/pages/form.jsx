import { useState } from "react";
import Button from "@mui/material/Button";
import { fonts, lines } from "../scripts/form/constants";
import TopNavbar from "../components/Navbar";

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
      <main className="page-content">
        <div className="text">
          <h1 className="title">Form</h1>
          <p className="subtitle">
            Poem by Andy Weaver, Programming by Dani Spinosa
          </p>
          <Button variant="outlined" onClick={buttonClickHandler}>
            {buttonText}
          </Button>
          <div id="poem-placeholder">{poemLines}</div>
        </div>
      </main>
    </>
  );
};

export default Form;
