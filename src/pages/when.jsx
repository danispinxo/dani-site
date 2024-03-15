import { useState, useEffect } from 'react';
import TopNavbar from '../components/Navbar';
import {
  lineOne,
  lineTwo,
  lineThree,
  lineFour,
  lineFive,
  lineSix,
  lineSeven,
  lineEight,
  lineNine,
  lineTen,
  lineEleven,
  lineTwelve,
  lineThirteen,
  lineFourteen,
  lineFifteen,
  lineSixteen,
  lineSeventeen,
  lineEighteen,
  lineNineteen,
  lineTwenty,
  lineTwentyOne,
  lineTwentyTwo,
  lineTwentyThree,
  lineTwentyFour,
  lineTwentyFive,
  lineTwentySix,
  lineTwentySeven,
} from '../scripts/when/lines.js';

const When = () => {
  const [lines, setLines] = useState([]);

  useEffect(() => {
    setLines([
      lineOne(),
      lineTwo(),
      lineThree(),
      lineFour(),
      lineFive(),
      lineSix(),
      lineSeven(),
      lineEight(),
      lineNine(),
      lineTen(),
      lineEleven(),
      lineTwelve(),
      lineThirteen(),
      lineFourteen(),
      lineFifteen(),
      lineSixteen(),
      lineSeventeen(),
      lineEighteen(),
      lineNineteen(),
      lineTwenty(),
      lineTwentyOne(),
      lineTwentyTwo(),
      lineTwentyThree(),
      lineTwentyFour(),
      lineTwentyFive(),
      lineTwentySix(),
      lineTwentySeven(),
    ]);
  }, []);

  return (
    <>
      <TopNavbar />
      <main className="page-content">
        <h1 className="title">When</h1>
        <p className="subtitle">Poem by Andy Weaver, Programming by Dani Spinosa</p>

        {lines.map((line, index) => (
          <p key={index}>{line}</p>
        ))}
      </main>
    </>
  );
};

export default When;
