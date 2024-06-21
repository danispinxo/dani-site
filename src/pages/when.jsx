import { useState, useEffect } from 'react';
import Marquee from 'react-fast-marquee';
import TopNavbar from '../components/Navbar';
import { contributors } from '../scripts/when/constants.js';
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

  const marqueeContent = contributors.join(' && ');

  return (
    <>
      <TopNavbar />
      <main className="page-content">
        <div className="text">
          <h1 className="title">When</h1>
          <p className="subtitle">Poem by Andy Weaver, Programming by Dani Spinosa, with lexicon contributions from</p>
          <Marquee pauseOnHover={true} direction={'left'} speed={30} gradient={true}>
            <p className="subtitle">{marqueeContent} </p>
          </Marquee>
          {lines.map((line, index) => (
            <p key={index} className="when-line">
              {line}
            </p>
          ))}
        </div>
      </main>
    </>
  );
};

export default When;
