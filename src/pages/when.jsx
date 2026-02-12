import { useState, useEffect } from "react";
import Marquee from "react-fast-marquee";
import TopNavbar from "../components/Navbar";
import Footer from "../components/Footer";
import supabase from "../lib/supabaseClient";

const When = () => {
  const [contributors, setContributors] = useState([]);
  const [lights, setLights] = useState([]);
  const [wordOut, setWordOut] = useState([]);
  const [before, setBefore] = useState([]);
  const [darkness, setDarkness] = useState([]);
  const [turnedOn, setTurnedOn] = useState([]);
  const [uncheckedLove, setUncheckedLove] = useState([]);
  const [dandelions, setDandelions] = useState([]);
  const [went, setWent] = useState([]);
  const [uncheckedLoveTwo, setUncheckedLoveTwo] = useState([]);
  const [darknessTwo, setDarknessTwo] = useState([]);
  const [eternalImmanence, setEternalImmanence] = useState([]);
  const [considered, setConsidered] = useState([]);
  const [alive, setAlive] = useState([]);
  const [lurking, setLurking] = useState([]);
  const [light, setLight] = useState([]);
  const [darkHairedStranger, setDarkhairedStranger] = useState([]);
  const [greeted, setGreeted] = useState([]);
  const [mutteredFrenchAndGerman, setMutteredFrenchAndGerman] = useState([]);
  const [knittedUsBlankets, setKnittedUsBlankets] = useState([]);
  const [kidHair, setKidHair] = useState([]);
  const [blanketed, setBlanketed] = useState([]);
  const [blankness, setBlankness] = useState([]);

  useEffect(() => {
    const fetchContributors = async () => {
      const { data, error } = await supabase
        .from("when_contributors")
        .select("name");
      if (error) console.error("Error fetching contributors:", error);
      else setContributors(data.map((contributor) => contributor.name));
    };

    const fetchContent = async (blank, setter) => {
      const { data, error } = await supabase
        .from("when_lexicon")
        .select("content")
        .eq("blank", blank);
      if (error) console.error("Error fetching term:", error);
      else setter(data.map((word) => word.content));
    };

    fetchContributors();
    fetchContent("lights", setLights);
    fetchContent("wordOut", setWordOut);
    fetchContent("before", setBefore);
    fetchContent("darkness", setDarkness);
    fetchContent("turnedOn", setTurnedOn);
    fetchContent("uncheckedLove", setUncheckedLove);
    fetchContent("dandelions", setDandelions);
    fetchContent("went", setWent);
    fetchContent("uncheckedLoveTwo", setUncheckedLoveTwo);
    fetchContent("darknessTwo", setDarknessTwo);
    fetchContent("eternalImmanence", setEternalImmanence);
    fetchContent("considered", setConsidered);
    fetchContent("alive", setAlive);
    fetchContent("lurking", setLurking);
    fetchContent("light", setLight);
    fetchContent("darkHairedStranger", setDarkhairedStranger);
    fetchContent("greeted", setGreeted);
    fetchContent("mutteredFrenchAndGerman", setMutteredFrenchAndGerman);
    fetchContent("knittedUsBlankets", setKnittedUsBlankets);
    fetchContent("kidHair", setKidHair);
    fetchContent("blanketed", setBlanketed);
    fetchContent("blankness", setBlankness);
  }, []);

  const selectRandomString = (array) => {
    const shuffledArray = [...array].sort(() => Math.random() - 0.5);
    return shuffledArray[0];
  };

  return (
    <>
      <TopNavbar />
      <div className="tech-grid" />
      <main>
        <div className="page-content">
          <div className="page-container">
            <div className="poem-header">
              <h1 className="poem-title">When</h1>
              <p className="poem-subtitle">
                Poem by Andy Weaver, Programming by Dani Spinosa, with lexicon
                contributions from
              </p>
              <div className="contributors-marquee">
                <Marquee
                  pauseOnHover={true}
                  direction={"left"}
                  speed={30}
                  gradient={true}
                  gradientColor="#1a1a1a"
                >
                  <p className="contributors-text">
                    {contributors.join(" && ")}{" "}
                  </p>
                </Marquee>
              </div>
            </div>

            <div className="poem-container">
              <div className="poem-text">
                <p className="when-line">When the lights went out</p>
                <p className="when-line">
                  When the {selectRandomString(lights)} went out and before
                </p>
                <p className="when-line">
                  When the {selectRandomString(lights)} went{" "}
                  {selectRandomString(wordOut)} and before the darkness
                </p>
                <p className="when-line">
                  When the {selectRandomString(lights)} went{" "}
                  {selectRandomString(wordOut)} and {selectRandomString(before)}{" "}
                  the darkness turned on
                </p>
                <p className="when-line">
                  When the {selectRandomString(lights)} went{" "}
                  {selectRandomString(wordOut)} and {selectRandomString(before)}{" "}
                  the {selectRandomString(darkness)} turned on us
                </p>
                <p className="when-line">
                  When the {selectRandomString(lights)} went{" "}
                  {selectRandomString(wordOut)} and {selectRandomString(before)}{" "}
                  the {selectRandomString(darkness)}{" "}
                  {selectRandomString(turnedOn)} us and our unchecked love
                </p>
                <p className="when-line">
                  When the {selectRandomString(lights)} went{" "}
                  {selectRandomString(wordOut)} and {selectRandomString(before)}{" "}
                  the {selectRandomString(darkness)}{" "}
                  {selectRandomString(turnedOn)} us and our{" "}
                  {selectRandomString(uncheckedLove)} of dandelions
                </p>
                <p className="when-line">
                  When the {selectRandomString(lights)} went{" "}
                  {selectRandomString(wordOut)} and {selectRandomString(before)}{" "}
                  the {selectRandomString(darkness)}{" "}
                  {selectRandomString(turnedOn)} us and our{" "}
                  {selectRandomString(uncheckedLove)} of{" "}
                  {selectRandomString(dandelions)} did nothing
                </p>
                <p className="when-line">
                  When the {selectRandomString(lights)}{" "}
                  {selectRandomString(went)} {selectRandomString(wordOut)} and{" "}
                  {selectRandomString(before)} the{" "}
                  {selectRandomString(darkness)} {selectRandomString(turnedOn)}{" "}
                  us and our {selectRandomString(uncheckedLove)} of{" "}
                  {selectRandomString(dandelions)} did nothing to save them
                </p>
                <p className="when-line">
                  When the {selectRandomString(lights)}{" "}
                  {selectRandomString(went)} {selectRandomString(wordOut)} and{" "}
                  {selectRandomString(before)} the{" "}
                  {selectRandomString(darkness)} {selectRandomString(turnedOn)}{" "}
                  us and our {selectRandomString(uncheckedLove)} of{" "}
                  {selectRandomString(dandelions)} did nothing to save them from
                  our unchecked love
                </p>
                <p className="when-line">
                  When the {selectRandomString(lights)}{" "}
                  {selectRandomString(went)} {selectRandomString(wordOut)} and{" "}
                  {selectRandomString(before)} the{" "}
                  {selectRandomString(darkness)} {selectRandomString(turnedOn)}{" "}
                  us and our {selectRandomString(uncheckedLove)} of{" "}
                  {selectRandomString(dandelions)} did nothing to save them from
                  our {selectRandomString(uncheckedLoveTwo)} of the darkness
                </p>
                <p className="when-line">
                  When the {selectRandomString(lights)}{" "}
                  {selectRandomString(went)} {selectRandomString(wordOut)} and{" "}
                  {selectRandomString(before)} the{" "}
                  {selectRandomString(darkness)} {selectRandomString(turnedOn)}{" "}
                  us and our {selectRandomString(uncheckedLove)} of{" "}
                  {selectRandomString(darknessTwo)} inside the eternal immanence
                </p>
                <p className="when-line">
                  When the {selectRandomString(lights)}{" "}
                  {selectRandomString(went)} {selectRandomString(wordOut)} and{" "}
                  {selectRandomString(before)} the{" "}
                  {selectRandomString(darkness)} {selectRandomString(turnedOn)}{" "}
                  us and our {selectRandomString(uncheckedLove)} of{" "}
                  {selectRandomString(darknessTwo)} inside the{" "}
                  {selectRandomString(eternalImmanence)} we considered
                </p>
                <p className="when-line">
                  When the {selectRandomString(lights)}{" "}
                  {selectRandomString(went)} {selectRandomString(wordOut)} and{" "}
                  {selectRandomString(before)} the{" "}
                  {selectRandomString(darkness)} {selectRandomString(turnedOn)}{" "}
                  us and our {selectRandomString(uncheckedLove)} of{" "}
                  {selectRandomString(darknessTwo)} inside the{" "}
                  {selectRandomString(eternalImmanence)} we{" "}
                  {selectRandomString(considered)} and refused
                </p>
                <p className="when-line">
                  When the {selectRandomString(lights)}{" "}
                  {selectRandomString(went)} {selectRandomString(wordOut)} and{" "}
                  {selectRandomString(before)} the{" "}
                  {selectRandomString(darkness)} {selectRandomString(turnedOn)}{" "}
                  us and our {selectRandomString(uncheckedLove)} of{" "}
                  {selectRandomString(darknessTwo)} inside the{" "}
                  {selectRandomString(eternalImmanence)} we{" "}
                  {selectRandomString(considered)} and refused to believe was
                  alive
                </p>
                <p className="when-line">
                  When the {selectRandomString(lights)}{" "}
                  {selectRandomString(went)} {selectRandomString(wordOut)} and{" "}
                  {selectRandomString(before)} the{" "}
                  {selectRandomString(darkness)} {selectRandomString(turnedOn)}{" "}
                  us and our {selectRandomString(uncheckedLove)} of{" "}
                  {selectRandomString(darknessTwo)} inside the{" "}
                  {selectRandomString(eternalImmanence)} we{" "}
                  {selectRandomString(considered)} and refused to believe was{" "}
                  {selectRandomString(alive)} and lurking
                </p>
                <p className="when-line">
                  When the {selectRandomString(lights)}{" "}
                  {selectRandomString(went)} {selectRandomString(wordOut)} and{" "}
                  {selectRandomString(before)} the{" "}
                  {selectRandomString(darkness)} {selectRandomString(turnedOn)}{" "}
                  us and our {selectRandomString(uncheckedLove)} of{" "}
                  {selectRandomString(darknessTwo)} inside the{" "}
                  {selectRandomString(eternalImmanence)} we{" "}
                  {selectRandomString(considered)} and refused to believe was{" "}
                  {selectRandomString(alive)} and {selectRandomString(lurking)}{" "}
                  in the light
                </p>
                <p className="when-line">
                  When the {selectRandomString(lights)}{" "}
                  {selectRandomString(went)} {selectRandomString(wordOut)} and{" "}
                  {selectRandomString(before)} the{" "}
                  {selectRandomString(darkness)} {selectRandomString(turnedOn)}{" "}
                  us and our {selectRandomString(uncheckedLove)} of{" "}
                  {selectRandomString(darknessTwo)} inside the{" "}
                  {selectRandomString(eternalImmanence)} we{" "}
                  {selectRandomString(considered)} and refused to believe was{" "}
                  {selectRandomString(alive)} and {selectRandomString(lurking)}{" "}
                  in the {selectRandomString(light)} as much as the dark
                </p>
                <p className="when-line">
                  When the {selectRandomString(lights)}{" "}
                  {selectRandomString(went)} {selectRandomString(wordOut)} and{" "}
                  {selectRandomString(before)} the{" "}
                  {selectRandomString(darkness)} {selectRandomString(turnedOn)}{" "}
                  us and our {selectRandomString(uncheckedLove)} of{" "}
                  {selectRandomString(darknessTwo)} inside the{" "}
                  {selectRandomString(eternalImmanence)} we{" "}
                  {selectRandomString(considered)} and refused to believe was{" "}
                  {selectRandomString(alive)} and {selectRandomString(lurking)}{" "}
                  in the {selectRandomString(light)} as much as the dark-haired
                  stranger
                </p>
                <p className="when-line">
                  When the {selectRandomString(lights)}{" "}
                  {selectRandomString(went)} {selectRandomString(wordOut)} and{" "}
                  {selectRandomString(before)} the{" "}
                  {selectRandomString(darkness)} {selectRandomString(turnedOn)}{" "}
                  us and our {selectRandomString(uncheckedLove)} of{" "}
                  {selectRandomString(darknessTwo)} inside the{" "}
                  {selectRandomString(eternalImmanence)} we{" "}
                  {selectRandomString(considered)} and refused to believe was{" "}
                  {selectRandomString(alive)} and {selectRandomString(lurking)}{" "}
                  in the {selectRandomString(light)} as much as the{" "}
                  {selectRandomString(darkHairedStranger)} we greeted
                </p>
                <p className="when-line">
                  When the {selectRandomString(lights)}{" "}
                  {selectRandomString(went)} {selectRandomString(wordOut)} and{" "}
                  {selectRandomString(before)} the{" "}
                  {selectRandomString(darkness)} {selectRandomString(turnedOn)}{" "}
                  us and our {selectRandomString(uncheckedLove)} of{" "}
                  {selectRandomString(darknessTwo)} inside the{" "}
                  {selectRandomString(eternalImmanence)} we{" "}
                  {selectRandomString(considered)} and refused to believe was{" "}
                  {selectRandomString(alive)} and {selectRandomString(lurking)}{" "}
                  in the {selectRandomString(light)} as much as the{" "}
                  {selectRandomString(darkHairedStranger)} we{" "}
                  {selectRandomString(greeted)} with muttered French and German
                </p>
                <p className="when-line">
                  When the {selectRandomString(lights)}{" "}
                  {selectRandomString(went)} {selectRandomString(wordOut)} and{" "}
                  {selectRandomString(before)} the{" "}
                  {selectRandomString(darkness)} {selectRandomString(turnedOn)}{" "}
                  us and our {selectRandomString(uncheckedLove)} of{" "}
                  {selectRandomString(darknessTwo)} inside the{" "}
                  {selectRandomString(eternalImmanence)} we{" "}
                  {selectRandomString(considered)} and refused to believe was{" "}
                  {selectRandomString(alive)} and {selectRandomString(lurking)}{" "}
                  in the {selectRandomString(light)} as much as the{" "}
                  {selectRandomString(darkHairedStranger)} we{" "}
                  {selectRandomString(greeted)} with{" "}
                  {selectRandomString(mutteredFrenchAndGerman)} widows
                </p>
                <p className="when-line">
                  When the {selectRandomString(lights)}{" "}
                  {selectRandomString(went)} {selectRandomString(wordOut)} and{" "}
                  {selectRandomString(before)} the{" "}
                  {selectRandomString(darkness)} {selectRandomString(turnedOn)}{" "}
                  us and our {selectRandomString(uncheckedLove)} of{" "}
                  {selectRandomString(darknessTwo)} inside the{" "}
                  {selectRandomString(eternalImmanence)} we{" "}
                  {selectRandomString(considered)} and refused to believe was{" "}
                  {selectRandomString(alive)} and {selectRandomString(lurking)}{" "}
                  in the {selectRandomString(light)} as much as the{" "}
                  {selectRandomString(darkHairedStranger)} we{" "}
                  {selectRandomString(greeted)} with{" "}
                  {selectRandomString(mutteredFrenchAndGerman)} widows knitted
                  us blankets
                </p>
                <p className="when-line">
                  When the {selectRandomString(lights)}{" "}
                  {selectRandomString(went)} {selectRandomString(wordOut)} and{" "}
                  {selectRandomString(before)} the{" "}
                  {selectRandomString(darkness)} {selectRandomString(turnedOn)}{" "}
                  us and our {selectRandomString(uncheckedLove)} of{" "}
                  {selectRandomString(darknessTwo)} inside the{" "}
                  {selectRandomString(eternalImmanence)} we{" "}
                  {selectRandomString(considered)} and refused to believe was{" "}
                  {selectRandomString(alive)} and {selectRandomString(lurking)}{" "}
                  in the {selectRandomString(light)} as much as the{" "}
                  {selectRandomString(darkHairedStranger)} we{" "}
                  {selectRandomString(greeted)} with{" "}
                  {selectRandomString(mutteredFrenchAndGerman)} widows{" "}
                  {selectRandomString(knittedUsBlankets)}
                </p>
                <p className="when-line">
                  When the {selectRandomString(lights)}{" "}
                  {selectRandomString(went)} {selectRandomString(wordOut)} and{" "}
                  {selectRandomString(before)} the{" "}
                  {selectRandomString(darkness)} {selectRandomString(turnedOn)}{" "}
                  us and our {selectRandomString(uncheckedLove)} of{" "}
                  {selectRandomString(darknessTwo)} inside the{" "}
                  {selectRandomString(eternalImmanence)} we{" "}
                  {selectRandomString(considered)} and refused to believe was{" "}
                  {selectRandomString(alive)} and {selectRandomString(lurking)}{" "}
                  in the {selectRandomString(light)} as much as the{" "}
                  {selectRandomString(darkHairedStranger)} we{" "}
                  {selectRandomString(greeted)} with{" "}
                  {selectRandomString(mutteredFrenchAndGerman)} widows{" "}
                  {selectRandomString(knittedUsBlankets)} of kid hair
                </p>
                <p className="when-line">
                  When the {selectRandomString(lights)}{" "}
                  {selectRandomString(went)} {selectRandomString(wordOut)} and{" "}
                  {selectRandomString(before)} the{" "}
                  {selectRandomString(darkness)} {selectRandomString(turnedOn)}{" "}
                  us and our {selectRandomString(uncheckedLove)} of{" "}
                  {selectRandomString(darknessTwo)} inside the{" "}
                  {selectRandomString(eternalImmanence)} we{" "}
                  {selectRandomString(considered)} and refused to believe was{" "}
                  {selectRandomString(alive)} and {selectRandomString(lurking)}{" "}
                  in the {selectRandomString(light)} as much as the{" "}
                  {selectRandomString(darkHairedStranger)} we{" "}
                  {selectRandomString(greeted)} with{" "}
                  {selectRandomString(mutteredFrenchAndGerman)} widows{" "}
                  {selectRandomString(knittedUsBlankets)} of{" "}
                  {selectRandomString(kidHair)} that blanketed the blankness
                </p>
                <p className="when-line">
                  When the {selectRandomString(lights)}{" "}
                  {selectRandomString(went)} {selectRandomString(wordOut)} and{" "}
                  {selectRandomString(before)} the{" "}
                  {selectRandomString(darkness)} {selectRandomString(turnedOn)}{" "}
                  us and our {selectRandomString(uncheckedLove)} of{" "}
                  {selectRandomString(darknessTwo)} inside the{" "}
                  {selectRandomString(eternalImmanence)} we{" "}
                  {selectRandomString(considered)} and refused to believe was{" "}
                  {selectRandomString(alive)} and {selectRandomString(lurking)}{" "}
                  in the {selectRandomString(light)} as much as the{" "}
                  {selectRandomString(darkHairedStranger)} we{" "}
                  {selectRandomString(greeted)} with{" "}
                  {selectRandomString(mutteredFrenchAndGerman)} widows{" "}
                  {selectRandomString(knittedUsBlankets)} of{" "}
                  {selectRandomString(kidHair)} that{" "}
                  {selectRandomString(blanketed)} the{" "}
                  {selectRandomString(blankness)}
                </p>
                <p className="when-line">
                  When the {selectRandomString(lights)}{" "}
                  {selectRandomString(went)} {selectRandomString(wordOut)} and{" "}
                  {selectRandomString(before)} the{" "}
                  {selectRandomString(darkness)} {selectRandomString(turnedOn)}{" "}
                  us and our {selectRandomString(uncheckedLove)} of{" "}
                  {selectRandomString(darknessTwo)} inside the{" "}
                  {selectRandomString(eternalImmanence)} we{" "}
                  {selectRandomString(considered)} and refused to believe was{" "}
                  {selectRandomString(alive)} and {selectRandomString(lurking)}{" "}
                  in the {selectRandomString(light)} as much as the{" "}
                  {selectRandomString(darkHairedStranger)} we{" "}
                  {selectRandomString(greeted)} with{" "}
                  {selectRandomString(mutteredFrenchAndGerman)} widows{" "}
                  {selectRandomString(knittedUsBlankets)} of{" "}
                  {selectRandomString(kidHair)} that{" "}
                  {selectRandomString(blanketed)} the{" "}
                  {selectRandomString(blankness)} when the lights went out
                </p>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
};

export default When;

export async function getServerSideProps() {
  return { props: {} };
}
