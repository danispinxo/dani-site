import { useState, useEffect } from 'react';
import Marquee from 'react-fast-marquee';
import TopNavbar from '../components/Navbar';
import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
dotenv.config();

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

const supabaseUrl = process.env.NEXT_PUBLIC_DATABASE_URL;
const key = process.env.NEXT_PUBLIC_SUPABASE_KEY;
const supabase = createClient(supabaseUrl, key);

const When = () => {
  const [lines, setLines] = useState([]);
  const [contributors, setContributors] = useState([]);

  useEffect(() => {
    const fetchContributors = async () => {
      const { data: contributorData, error: contributorError } = await supabase.from('when_contributors').select('name');

      if (contributorError) console.error('Error fetching contributors:', contributorError);
      else setContributors(contributorData.map((contributor) => contributor.name));
    };

    fetchContributors();
  }, []);

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
