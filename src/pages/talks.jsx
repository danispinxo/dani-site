import TopNavbar from "../components/Navbar";
import Publication from "../components/Publication";
import Footer from "../components/Footer";

const Talks = () => {
  return (
    <>
      <TopNavbar />
      <div className="tech-grid" />
      <main>
        <div className="page-content">
          <div className="page-container">
            <h1 className="page-title">Talks</h1>

            <section className="writing-section">
              <h2 className="section-title">Keynote Addresses</h2>
              <div className="publications-grid">
                <Publication
                  title="Fast Code, Slow Poems: Digital Poetics and Small Press Analogues"
                  publication="Where from Here? University of Guelph"
                  date="16 September 2022"
                  linkType="talk"
                />
              </div>
            </section>

            <section className="writing-section">
              <h2 className="section-title">Academic Conference Papers</h2>
              <div className="publications-grid">
                <Publication
                  title="Electronic Literature Collection, Volume 5"
                  publication="ELO25 @ 25: Love Letters to the Past and Future Conference and Media Arts Festival"
                  date="12 July 2025"
                  notes="Co-authored with Zach Whalen and Daniel Cox with Élika Ortega and Kwabena Opoku-Agyemang"
                  linkType="talk"
                  link="https://eliterature.org/2024/11/cfp-elo25-25-toronto-july-11-13-due-jan-5-2025/"
                />
                <Publication
                  title="Cyberfeminism Revisited: Glitch Feminism and the Digital Poetics of Lillian-Yvonne Bertram"
                  publication="ELO25 @ 25: Love Letters to the Past and Future Conference and Media Arts Festival"
                  date="11 July 2025"
                  linkType="talk"
                  link="https://eliterature.org/2024/11/cfp-elo25-25-toronto-july-11-13-due-jan-5-2025/"
                />
                <Publication
                  title="#WriteWithRupi During a Pandemic: Reflections on the Future Horizons Mentorship Program"
                  publication="Where from Here? University of Guelph"
                  date="15 September 2022"
                  notes="Co-authored with Kiera Obbard"
                  linkType="talk"
                />
                <Publication
                  title="Where in the Web is SwiftCurrent?"
                  publication="Electronic Literature Organization Annual Conference"
                  date="31 May 2022"
                  notes="Co-authored with Eric Schmaltz"
                  linkType="talk"
                  link="https://www.elo2022.com/wp-content/uploads/2022/05/FinalProgram-v60.pdf"
                />
                <Publication
                  title="Learning Management Platforms: Notes on Teaching 'Taroko Gorge' in a Pandemic"
                  publication="Electronic Literature Organization Conference"
                  date="26 May 2021"
                  linkType="talk"
                  link="https://conferences.au.dk/elo2021"
                />
                <Publication
                  title="Gender and Canadian Digital Poetics with Asterisks"
                  publication="Woman E-lit: 10th Anniversary of the Electronic Literature Lab"
                  date="30 March 2021"
                  linkType="talk"
                  link="https://elmcip.net/event/2021-woman-e-lit-symposium"
                />
                <Publication
                  title="The Muddle of Our Thinking: The Transnational Imaginary of David Clark's 88 Constellations for Wittgenstein"
                  publication="Modern Language Association Annual Convention"
                  date="10 January 2021"
                  linkType="no-talk"
                />
                <Publication
                  title="Oceans too must change: Canisia Lubrin's Voodoo Hypothesis and the Anthropocene"
                  publication="Text/Sound/Performance, Dublin, Ireland"
                  date="27 April 2019"
                  linkType="talk"
                  link="https://textsoundperformance.wordpress.com/saturday/"
                />
                <Publication
                  title="'The code might not necessarily be the text': Mark Sutherland's Code X"
                  publication="Kanada Koncrete, Ottawa, ON"
                  date="5 May 2018"
                  linkType="no-talk"
                />
                <Publication
                  title="A Purely Financial Collaboration: Joyce as Computer in John Cage's 'Writing Through Finnegans Wake.'"
                  publication="Diasporic Joyce: North American James Joyce Symposium, Toronto, ON"
                  date="22 June 2017"
                  linkType="talk"
                  link="https://diasporicjoyce.files.wordpress.com/2016/10/diasporic-joyce-schedule-july-1.pdf"
                />
                <Publication
                  title="Oversharing: Canadian E-Lit and the Lyric Subject"
                  publication="ACQL Conference at ACCUTE Congress, Toronto, ON"
                  date="28 May 2017"
                  linkType="no-talk"
                />
                <Publication
                  title="Towards a Theory of Canadian Digital Poetics"
                  publication="Digital Textualities/Canadian Contexts (CWRC Conference), Edmonton, AB"
                  date="22 September 2016"
                  linkType="no-talk"
                />
                <Publication
                  title="I want you to do me: Jim Andrews and New Media Poetry"
                  publication="Two Days of Canada Conference, St. Catherines, ON"
                  date="14 October 2016"
                  linkType="talk"
                  link="https://brocku.ca/humanities/canadian-studies/wp-content/uploads/sites/141/2016-Two-Days-of-Canada-Program-The-Concept-of-Vancouver.pdf"
                />
                <Publication
                  title="Détours: Resistant Geographies in JR Carpenter's in absentia"
                  publication="ACCUTE Congress, Calgary, AB"
                  date="18 May 2016"
                  linkType="no-talk"
                />
                <Publication
                  title="Subsequent Screenings: The Legacy of bpNichol in Canadian Digital Poetry & Elit"
                  publication="Poetics: (The Next) 25 Years, Buffalo, NY"
                  date="15 April 2016"
                  linkType="talk"
                  link="https://books.google.ca/books?id=9bpaDwAAQBAJ&pg=PA211&lpg=PA211&dq=%22Subsequent+Screenings:+The+Legacy+of+bpNichol+in+Canadian+Digital+Poetry+%26+Elit%22&source=bl&ots=obSZTW02RO&sig=ACfU3U1DeNL1DUgNMry2X0ltzSofIa1DvQ&hl=en&sa=X&ved=2ahUKEwiducaip7b_AhWRk4kEHV5eDQsQ6AF6BAgHEAM"
                />
                <Publication
                  title="Code X: Experiment as Digital in Canadian Elit"
                  publication="NeMLA Annual Convention, Hartford, CT"
                  date="19 March 2016"
                  linkType="no-talk"
                />
                <Publication
                  title="A Troll with Tenure: Kenneth Goldsmith's 'The Body of Michael Brown"
                  publication="EGSA Colloquium, York University"
                  date="7 May 2015"
                  linkType="no-talk"
                />
                <Publication
                  title="No Authors: Writing the Online Dissertation with a [generic pronoun]"
                  publication="Modern Language Association Annual Convention, Chicago, IL"
                  date="9 January 2014"
                  linkType="talk"
                  link="https://elmcip.net/event/2021-woman-e-lit-symposium"
                />
                <Publication
                  title="No Authors: A Postanarchist Reading of Robert Duncan and Denise Levertov"
                  publication="Beyond the Border: The Vancouver Poetry Conference, University of East Anglia. Norwich, UK"
                  date="23 November 2013"
                  linkType="talk"
                  link="https://beyondtheprotomonograph.mla.hcommons.org/presentation-topics/"
                />
                <Publication
                  title="Can't Buy Me Love: Robert Duncan's Politics & Poetics of 'Plagiarism'"
                  publication="CAAS Conference, University of Waterloo"
                  date="26 October 2013"
                  linkType="no-talk"
                />
                <Publication
                  title="Waterfalls or Ideograms: John Cage's '62 Mesostics re Merce Cunningham' as Failed Experiments"
                  publication="EGSA Colloquium, York University"
                  date="11 May 2013"
                  linkType="no-talk"
                />
                <Publication
                  title="Inging: Writing for the Second Time through John Cage's '62 Mesostics re Merce Cunningham"
                  publication="University of Toronto English Graduate Students' Colloquium"
                  date="9 May 2013"
                  linkType="no-talk"
                />
                <Publication
                  title="Dead Man Walking: Frenzied Masculinity in AMC's The Walking Dead"
                  publication="EGSA Colloquium, York University"
                  date="9 November 2012"
                  linkType="no-talk"
                />
                <Publication
                  title="Illegible Poems, Intelligible Bodies: John Cage's '62 Mesostics re Merce Cunningham'"
                  publication="SAGE Colloquium, University of Waterloo"
                  date="18 June 2010"
                  linkType="no-talk"
                />
              </div>
            </section>

            <section className="writing-section">
              <h2 className="section-title">Lectures and Panelist Talks</h2>
              <div className="publications-grid">
                <Publication
                  title="Invited Speaker, Dalhousie English Department Speaker Series"
                  publication="Dalhousie University"
                  date="20 March 2025"
                  notes="with Kate Siklosi"
                  linkType="no-talk"
                />
                <Publication
                  title="Invited Speaker, 'CRWR-4002 Hybrid & Experimental Writing'"
                  publication="OCADU"
                  date="12 February 2024"
                  notes="Undergraduate Course taught by Gary Barwin"
                  linkType="no-talk"
                />
                <Publication
                  title="Invited Speaker, 'ENCW3P73 Creative Writing for Digital Media'"
                  publication="Brock University"
                  date="27 October 2022"
                  notes="Undergraduate Course taught by Eric Schmaltz"
                  linkType="talk"
                  link="https://brocku.ca/webcal/2023/undergrad/engl.html#ENGL_3P73"
                />
                <Publication
                  title="Digital Poems, Digital Pictures"
                  publication="Small Talks Series, Saskatchewan Writers' Guild Annual Fall Conference"
                  date="21 October 2021"
                  linkType="talk"
                  link="https://skwriter.com/pub/docs/about-swg/Annual%20Report/layout-2021-2022-swg-annual-report-revised-compressed.pdf"
                />
                <Publication
                  title="Invited Speaker, 'ENGC09 Canadian Poetry'"
                  publication="University of Toronto @ Scarborough"
                  date="24 March 2021"
                  notes="Undergraduate Course taught by Daniel Scott Tysdal"
                  linkType="talk"
                  link="https://utsc.calendar.utoronto.ca/course/engc09h3"
                />
                <Publication
                  title="Invited Panelist, 'Language, Liberation, and Design'"
                  publication="Queen's University"
                  notes="Moderated by Kaie Kellough, 2021 Queen's Writer in Residence"
                  date="16 March 2021"
                  linkType="talk"
                  link="https://www.queensu.ca/english/about/events/language-liberation-and-design"
                />
                <Publication
                  title="Invited Speaker, 'Studies in Technology and Culture: Electronic Literature'"
                  publication="Washington State University"
                  date="18 March 2019"
                  notes="Graduate Course taught by Dene Grigar"
                  linkType="talk"
                  link="http://dtc-wsuv.org/wp/561/"
                />
                <Publication
                  title="Small Press, Big Ideas: Roundtable"
                  publication="Toronto International Festival of Authors, Harbourfront Centre"
                  date="26 October 2019"
                  linkType="talk"
                  link="https://festivalofauthors.ca/events/small-press-big-ideas-a-roundtable"
                />
              </div>
            </section>

            <section className="writing-section">
              <h2 className="section-title">Panels Moderated</h2>
              <div className="publications-grid">
                <Publication
                  title="Structure, Being, Posthumanism"
                  publication="ELO25 @ 25: Love Letters to the Past and Future Conference and Media Arts Festival"
                  date="11 July 2025"
                  linkType="no-talk"
                />
                <Publication
                  title="Trans/forming the Machine: Feminist Interventions in Digital Poetics"
                  publication="ACCUTE Congress, Toronto"
                  date="30 May 2017"
                  notes="Sponsored by the Electronic Literature Organization"
                  linkType="no-talk"
                />
                <Publication
                  title="Decoding Canadian Digital Poetics"
                  publication="NeMLA, Baltimore"
                  date="March 2017"
                  linkType="no-talk"
                />
                <Publication
                  title="Gender, Identity and Society: Revisiting Womanhood"
                  publication="EGSA Colloquium, York University"
                  date="9 May 2014"
                  linkType="no-talk"
                />
              </div>
            </section>

            <section className="writing-section">
              <h2 className="section-title">Poetry Readings</h2>
              <div className="reading-list">
                <ul className="bullet-list">
                  <li>
                    <a
                      href="https://ojs.library.dal.ca/dalhousiereview/announcement/view/169"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      Launch
                    </a>{" "}
                    of <i>The Dalhousie Review</i>, Cafe Lara, Halifax, NS. 21
                    March 2025
                  </li>
                  <li>
                    Launch of Andy Weaver's <i>The Loom</i>, Type Books,
                    Toronto. 28 November 2024
                  </li>
                  <li>
                    milk mag reading series, with Gary Barwin, Type Books,
                    Toronto, ON. 27 April 2023
                  </li>
                  <li>
                    Launch of Kate Siklosi's Selvage, Type Books, Toronto, ON.
                    20 April 2023
                  </li>
                  <li>
                    HAL, Art Gallery of Hamilton, Hamilton, ON, 10 November 2022
                  </li>
                  <li>
                    Reading from Underneath, The Printed Word, Dundas, ON. 27
                    August 2022
                  </li>
                  <li>
                    Lost Launches @ the Art Bar, Clinton's, Toronto, ON. 28 June
                    2022
                  </li>
                  <li>ACCUTE Conference, Montreal, ON, 15 February 2022</li>
                  <li>Lit Live, Hamilton, ON (Remote), 7 February 2021</li>
                  <li>
                    Poets 5 a 7, with Cornelia Hoogland (Remote), 23 January
                    2021
                  </li>
                  <li>
                    Windsor BookFest, Windsor, ON (Remote), 18 October 2020
                  </li>
                  <li>
                    Word on the Street Literary Festival, Toronto (Remote), 26
                    September 2020
                  </li>
                  <li>
                    Launch of Gary Barwin's{" "}
                    <em>For it is a Surprise and a Pleasure to Breathe</em>,
                    knife|fork|book 2020
                  </li>
                  <li>
                    Poetry Reading, Launch of Shaun Braune's{" "}
                    <em>Dendrite Balconies</em>, 27 September 2019
                  </li>
                  <li>
                    Poetry Reading, On the Line: A Special Night of Readings in
                    Solidarity, Wisebar, Toronto, 14 June 2018
                  </li>
                  <li>
                    Poetry Reading, Invisible Launch, The Brandscape, Toronto,
                    10 May 2018
                  </li>
                  <li>Poetry Reading, Koncrete Kanada, Ottawa, 6 May 2018</li>
                  <li>
                    EGSA Spring Reading, Voodoo Child, Toronto, 20 April 2017
                  </li>
                  <li>
                    Launch of Sean Braune's <em>The Vitamins of an Alphabet</em>
                    , Grey Tiger, Toronto, 11 April 2016
                  </li>
                </ul>
              </div>
            </section>
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
};

export default Talks;
