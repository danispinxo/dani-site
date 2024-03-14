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

export default function When() {
  return (
    <>
      <TopNavbar />
      <main className="page-content">
        <h1 className="title">When</h1>
        <p className="subtitle">Poem by Andy Weaver, Programming by Dani Spinosa</p>

        <p>{lineOne()}</p>
        <p>{lineTwo()}</p>
        <p>{lineThree()}</p>
        <p>{lineFour()}</p>
        <p>{lineFive()}</p>
        <p>{lineSix()}</p>
        <p>{lineSeven()}</p>
        <p>{lineEight()}</p>
        <p>{lineNine()}</p>
        <p>{lineTen()}</p>
        <p>{lineEleven()}</p>
        <p>{lineTwelve()}</p>
        <p>{lineThirteen()}</p>
        <p>{lineFourteen()}</p>
        <p>{lineFifteen()}</p>
        <p>{lineSixteen()}</p>
        <p>{lineSeventeen()}</p>
        <p>{lineEighteen()}</p>
        <p>{lineNineteen()}</p>
        <p>{lineTwenty()}</p>
        <p>{lineTwentyOne()}</p>
        <p>{lineTwentyTwo()}</p>
        <p>{lineTwentyThree()}</p>
        <p>{lineTwentyFour()}</p>
        <p>{lineTwentyFive()}</p>
        <p>{lineTwentySix()}</p>
        <p>{lineTwentySeven()}</p>
      </main>
    </>
  );
}
