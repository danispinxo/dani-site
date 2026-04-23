import Book from "../components/Book";
import TopNavbar from "../components/Navbar";

const CreativeWriting = () => {
  return (
    <>
      <TopNavbar />
      <div className="tech-grid" />
      <main>
        <div className="page-content">
          <div className="page-container">
            <h1 className="page-title">Creative Writing</h1>

            <section className="writing-section">
              <h2 className="section-title">Books</h2>
              <div className="books-grid">
                <Book
                  cover="/images/WhisperingGallery.jpg"
                  title="Whispering Gallery"
                  date="forthcoming 13 October 2026"
                  notes="Assembly Press"
                  detailHref="/creative-writing/whispering-gallery"
                />

                <Book
                  cover="/images/oo-cover.jpg"
                  title="OO: Typewriter Poems"
                  date="1 April 2020"
                  linkType="sale"
                  notes="Invisible Publishing"
                  link="https://invisiblepublishing.com/product/oo-typewriter-poems/"
                  detailHref="/creative-writing/oo-typewriter-poems"
                />
              </div>
            </section>

            <section className="writing-section">
              <h2 className="section-title">Chapbooks</h2>
              <div className="books-grid">
                <Book
                  cover="/images/mean-mean.jpg"
                  title="A Mean, Mean Thirst (poems for my friends and their books)"
                  press="above/ground press"
                  date="2024"
                  linkType="visit"
                  link="https://abovegroundpress.blogspot.com/2024/12/new-from-aboveground-press-mean-mean.html"
                />
                <Book
                  cover="/images/make-it-a-habit.jpeg"
                  title="Make it a Habit Each Night (with Gary Barwin)"
                  press="The Blasted Tree"
                  date="2023"
                  linkType="sale"
                  link="https://www.theblastedtree.com/store/make-it-a-habit-each-night"
                />
                <Book
                  cover="/images/delta-cover.png"
                  title="Delta Sequence"
                  press="Model Press"
                  date="2022"
                  linkType="visit"
                  link="https://ryanfitzpatrickca.files.wordpress.com/2023/01/model-press-027-dani-spinosa-delta-sequence.pdf"
                />
                <Book
                  cover="/images/vispo-cover.jpg"
                  title="Visual Poetry for Women"
                  press="Anstruther Press Manifesto Series, no. 8"
                  date="2021"
                  linkType="sale"
                  link="http://www.anstrutherpress.com/new-products/0mtkpig74bdojt77lnna8jkf8j0vk4"
                />
                <Book
                  cover="/images/to-whom-cover.jpeg"
                  title="To Whom Shall I Sing?"
                  press="Noir:z"
                  date="2020"
                  linkType="sale"
                  link="https://www.noirzvisualpoetry.com/product/to-whom-shall-i-sing/"
                />
                <Book
                  cover="/images/civilization-cover.png"
                  title="Civilization"
                  press="above/ground press"
                  date="2020"
                  linkType="visit"
                  link="http://abovegroundpress.blogspot.com/2020/06/new-from-aboveground-press-civilization.html"
                />
                <Book
                  cover="/images/Antigone.jpg"
                  title="Centre Folds"
                  press="Happy Monks Press (pamphlet)"
                  date="2020"
                />
                <Book
                  cover="/images/glosa.jpg"
                  title="Glosas for Tired Eyes: Vol. 2"
                  press="above/ground press"
                  date="2018"
                  linkType="visit"
                  link="http://abovegroundpress.blogspot.com/2018/04/new-from-aboveground-press-glosas-for.html"
                />
                <Book
                  cover="/images/chant-uhm.jpg"
                  title="Chant Uhm (Sound Poem for Kathleen Hanna)"
                  press="no press"
                  date="2018"
                  linkType="visit"
                  link="/images/spinosa-chant-uhm-2018.pdf"
                />
                <Book
                  cover="/images/incessantly-cover.jpg"
                  title="Incessantly (for Mariah Carey)"
                  press="no press"
                  date="2018"
                  linkType="visit"
                  link="/images/spinosa-incessantly-2018.pdf"
                />
                <Book
                  cover="/images/glosas-1.jpg"
                  title="Glosas for Tired Eyes"
                  press="no press"
                  date="2017"
                  linkType="visit"
                  link="/images/spinosa-glosas-for-tired-eyes-2017.pdf"
                />
              </div>
            </section>

            <section className="writing-section">
              <h2 className="section-title">
                Poetry in Anthologies or Journals
              </h2>

              <ul className="publications-list">
                <li>
                  "<a href="https://dusie.blogspot.com/2025/12/tuesday-poem-664-dani-spinosa-house.html">House</a>."{" "}
                  <i>DUSIE</i>
                  , Tuesday Poem #664, edited by rob mclennan. 23 December.
                </li>
                <li>
                  "No."{" "}
                  <a href="https://fernwoodpublishing.ca/book/ill-get-right-on-it">
                    <i>
                      I'll Get Right On It: Poems on Working Life in the Climate
                      Crisis
                    </i>
                  </a>
                  , Fernwood Publishing, edited by The Land and Labour Poetry
                  Collective.
                </li>
                <li>
                  Swatch." <i>ADDA</i>, vol.1, edited by Renaat Ramon and
                  Andreas van Roompaey, pp. 14-18, 2025.
                </li>
                <li>
                  "
                  <a href="https://taper.badquar.to/13/swift_sonnets.html">
                    The Swift Sonnets
                  </a>
                  ." <i>Taper</i>, vol. 13, special issue on Superstitions,
                  2024.
                </li>
                <li>
                  "Visual Poetry for Women,"{" "}
                  <i>
                    The Anstruther Reader: Ten Years of Poetry, Broadsides, and
                    Manifesto
                  </i>
                  , Palimpsest Press, 2024.
                </li>
                <li>
                  "Park and Fly."{" "}
                  <i>
                    Extrins: 13 responses by poets of note to Kevin Stebner's
                    book
                  </i>{" "}
                  Inherent, 2024.
                </li>
                <li>
                  "Shadows Cast by Moonlight," in "Incantations" by Brandon
                  Hocura and Naomi Okabe, <i>PUBLIC Art|Culture|Ideas</i>, issue
                  69, edited by Tamara de Szecheo Lang, Emily Pelstring, and Dan
                  Vena, 2024.
                </li>
                <li>
                  "Two poems,"{" "}
                  <a href="https://derekbeaulieu.ca/2023/01/26/paper-thread-25-years-of-housepress-and-no-press/?fbclid=IwAR09I-0EnSbhoyNetu9YLcnT1Mzj1VKPFfB60yOG3IQGmyUa8MKB2_2ilSg">
                    Paper & Thread: 25 Years of housepress and No Press
                  </a>
                  , edited by Derek Beaulieu, 2023.
                </li>
                <li>
                  "Sphinx" and "Semele." Hamilton Arts & Letters{" "}
                  <a href="https://samizdatpress.typepad.com/hal_issue_fifteen-2/hal-magazine-issue-fifteen2-cover.html">
                    Special Issue on Process
                  </a>
                  , issue 15.2, guest edited by Karl Jirgens, 2023.
                </li>
                <li>
                  "Table of Contents (for Gary Barwin)." Spectral Lines, An
                  anthology of visual poems, edited by Kyle Flemmer. League of
                  Canadian Poets, 2022.
                </li>
                <li>
                  "Flowers for Helen."{" "}
                  <em>Report from the Hajnosczky Society</em>, edited by rob
                  mclennan, 2022.
                </li>
                <li>
                  "New Noise." <em>Report from the Siklosi Society</em>, edited
                  by rob mclennan, 2022.
                </li>
                <li>
                  <a
                    rel="noreferrer noopener"
                    href="https://www.editionsduquelconque.com/revue-un-rectangle-quelconque-n-7"
                    target="_blank"
                  >
                    "Song for Theo" and "Song for Abby."
                  </a>{" "}
                  <em>un rectangle quelconque</em>, n. 7.
                </li>
                <li>
                  "Noi Peccatori." <em>Report from the Earl Society</em>, edited
                  by rob mclennan.
                </li>
                <li>
                  "I am Here" and "See No Ideas, Hear No Ideas."{" "}
                  <em>14 Ways of Being Kinder to the Earth</em>, edited by
                  Gregory Betts and derek beaulieu, pp. 14-15 (co-authored with
                  Marianne Holm Hansen). 2021
                </li>
                <li>
                  <a
                    rel="noreferrer noopener"
                    href="https://talkingaboutstrawberries.blogspot.com/2021/10/dani-spinosa.html"
                    target="_blank"
                  >
                    "Jocasta," "Persephone," and "Clytemnestra."{" "}
                  </a>
                  <em>Talking About Strawberries All of the Time</em>.
                </li>
                <li>
                  "Shadows Cast by Moonlight." <em>Incantations</em>, visual
                  poem with audio spell accompaniment by Gavilan Rayna Russom.
                  Séance Centre. 2021
                </li>
                <li>
                  "Second Act." <em>The Minute Review</em>, vol. 1, no. 1, 2021
                </li>
                <li>
                  "Antigone," "Hestia," "Medea," "Ariadne," and "Semele."{" "}
                  <em>Explorations in Media Ecology</em>, ed. Adeena Karasick,
                  vol. 20, no. 2, 2021
                </li>
                <li>
                  "Nausicaa" and "Glauke." <em>Belfield Literary Review</em>,
                  edited by Gregory Betts and
                  <br />
                  Lucy Collins, 2021
                </li>
                <li>
                  "Introduction to Digital Poetics, a story."{" "}
                  <em>AMB: Avant-garde Boot Camp</em>, 2021 (Print)
                </li>
                <li>
                  "Simply Black and White (5 Poems)." <em>Exile Quarterly</em>,
                  vol. 43, iss. 3, 2020, pp. 69-73.
                </li>
                <li>
                  "Megara" and "Eurydice." <em>Myth &amp; Metamorphosis</em>,
                  eds. Anthony Etherin and Clara Daneri, Penteract Press, 2020,
                  p. 28
                </li>
                <li>
                  "
                  <a href="https://poets.ca/2020/07/06/early-civilization-by-dani-spinosa/">
                    Early Civilization
                  </a>
                  ." Poetry Pause, <em>League of Canadian Poets</em>. 6 July
                  2020.
                </li>
                <li>
                  "
                  <a href="https://abc.perspektive.at/odanio-codework-poetics/">
                    Introduction to Digital Poetics, a story
                  </a>
                  ." <em>ABC: Avant-garde Boot Camp</em> (as OdaniO), 2020
                  (Online)
                </li>
                <li>
                  "Cassandra" and "Danae." <em>Train: a poetry journal</em>,
                  2020
                </li>
                <li>
                  "Two Visual Poems." <em>Not Your Best</em>, edited by Eric
                  Schmaltz for knife|fork|book, 2019
                </li>
                <li>
                  "I'm a nation, too."{" "}
                  <em>Here Comes Everyone: An Instanthology</em>, edited by
                  Andrew MacEwan, p. 24, 25 April 2019
                </li>
                <li>
                  "Philomela." <em>ToCall: Women in Concrete</em>, vol. 4,
                  edited by psw, 2019
                </li>
                <li>
                  "Selections from <em>Betical</em> for Jon." <em>ToCall</em>,
                  vol. 3, p. 3, March, 2019
                </li>
                <li>
                  "from{" "}
                  <em>Anxious Influence: Reading John Cage Theoretically</em>:
                  Introduction, 1837, 1874, 1914, and Conclusion."{" "}
                  <em>Avant Canada: Poets, Prophets, Revolutionaries</em>,
                  edited by Gregory Betts and Christian Bok, 2019
                </li>
                <li>
                  <a>
                    "Mirella Bentivoglio," "Ruth Wolf-Rehfeldt," "Eric
                    Schmaltz," "Franz Mon," "Nico Vassilakis."
                  </a>{" "}
                  <em>Touch the Donkey, </em>
                  iss. 18, July 2018
                </li>
                <li>
                  "
                  <a href="https://smallportionsjournal.com/category/issue-8/">
                    Steve McCaffery
                  </a>
                  ." <em>Small Po[r]tions</em>, iss. 8, 22 April 2018
                </li>
                <li>
                  "Paula Claire." <em>NōD</em>, vol. 22, 2018, p. 52.
                </li>
                <li>
                  "John Riddell," "Zdenek Barborka," "Marianne Holm Hansen,"
                  "Cavan McCarthy," "Jiri Valoch," "Shant Basmajian," and "M.
                  Hachette." <em>Ottawater</em>, no. 14, January 2018, pp.
                  25-27.
                </li>
                <li>
                  "Two Shots." <em>Canadian Literature</em>, no. 230-231,
                  Autumn/Winter 2017, p. 248.
                </li>
                <li>
                  <a href="http://themaynard.org/Vol10No2/contents.php">
                    "Errata," "Unrest," and "Rebelling."
                  </a>{" "}
                  <em>The Maynard</em>, Fall 2017.
                </li>
                <li>
                  "Yeah Right,"{" "}
                  <em>
                    Resist Much/Obey Little: Inaugural Poems to the Resistance,
                  </em>{" "}
                  Dispatches Poetry Anthology, 2017, p. 622.
                </li>
                <li>
                  "
                  <a href="http://www.bywords.ca/archives.php?issue=may2007">
                    Jesse II: Science/Stigmata
                  </a>
                  ," <em>Bywords.ca</em>, 2007
                </li>
                <li>
                  "Dear Sylvia," <em>The Charlatan</em> (Carleton University),
                  2005
                </li>
                <li>
                  "Untitled," <em>In/Words Magazine</em>, vol. 4, no. 3, 2004
                </li>
              </ul>
            </section>

            <section className="writing-section">
              <h2 className="section-title">
                Visual Poetry in Galleries or Installations
              </h2>

              <ul className="publications-list">
                <li>
                  "Dangerously Close to Meaning," co-authored with Eric Schmaltz
                  and Kate Siklosi, installation in York University English
                  Department Offices, installed 2019
                </li>

                <li>
                  "coding practice" and "rebelling" (Russian translations by
                  Pavel Zarutskiy).{" "}
                  <em>Type-In Exhibit of Typewriter Poetry</em>, St. Petersburg,
                  Russia, 2019
                </li>

                <li>
                  "Riddle" and "Fill Up." <em>Concrete is Porous</em>, Secret
                  Handshake Gallery, October 2018
                </li>

                <li>
                  "<a href="https://betical.digital/">Betical</a>" (digital poem
                  installation), co-authored with Jon Orsi,{" "}
                  <em>=SUM(things)</em>, University of Waterloo Critical Media
                  Lab annual symposium, 7 April 2017
                </li>
              </ul>
            </section>
          </div>
        </div>
      </main>
    </>
  );
};

export default CreativeWriting;
