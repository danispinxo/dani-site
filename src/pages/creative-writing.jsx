import * as React from 'react';
import Book from '../components/Book';
import Publication from '../components/Publication';
import TopNavbar from '../components/Navbar';
import Footer from '../components/Footer';

const CreativeWriting = () => {
  return (
    <>
      <TopNavbar />
      <main className="page-content">
        <h1 className="title">Creative Writing</h1>

        <p className="subtitle">Current Book Project</p>
        <Book
          cover="/images/ariadne.jpeg"
          title="Whispering Galleries"
          date="In progress"
          notes="Canada Council for the Arts Research and Creation Grant"
        />

        <p className="subtitle">Books</p>
        <Book
          cover="/images/oo-cover.jpg"
          title="OO: Typewriter Poems"
          date="1 April 2020"
          linkType="sale"
          link="https://invisiblepublishing.com/product/oo-typewriter-poems/"
        />
        <div className="text">
          <p className="heading">Praise for OO: Typewriter Poems</p>

          <p>
            “I'm so glad this book exists—for what it means not only to me to read it now, but for what it will mean to others who are
            looking for a way into vispo that speaks to them and their lives. I love that it exists for the people who are going to be
            totally blown away by Spinosa and Siklosi's conversation, having never read anything quite like that before. This book is a real
            gift to vispo, its fans and present and future practitioners.”{' '}
            <strong>
              Helen Hajnoczky, <em>A Teacozy Is a Sometimes</em>
            </strong>
            <br />
            <br />
            “Dani Spinosa's latest book of poetry is a collection of glosas that is conceptually radical, formally daring, and stylistically
            wonderful—as smart and imaginative as anything one should by now expect of Spinosa.”{' '}
            <strong>
              Clayton Longstaff, <em>Canadian Literature</em>{' '}
            </strong>
          </p>

          <p>
            “The fifty typewriter poems in this volume are both thought provoking and beautifully crafted.”{' '}
            <strong>
              Jill Mandrake, <em>GEIST</em>
            </strong>
          </p>

          <p>
            “This collection is both Spinosa's personal study in the history of visual and concrete poetry as well as a collection of
            original works… She's clearly done her research, and if one were even to put together an anthology of or essay on the history of
            concrete and visual poetries, this would be the list of names included. Or, given Spinosa's deliberate inclusion of these
            multiple women practitioners, this is the list of names that should be included; and hopefully, in part through Spinosa's work,
            a list of names that will no longer be overlooked.” <strong>rob mclennan</strong>
          </p>
          <p>
            “Because the glosa, which builds a highly structured rhyming poem around a seed quatrain from a source text, is firmly rooted in
            the lyric, Spinosa has to find other ways to both quote and write through or around or over her sources. As she acknowledges in
            the introduction, even quoting a line from a concrete poem, much less an entire quatrain, can prove difficult as visual forms
            tend to challenge the convention of the line, but she more than manages this feat. The poems in the collection capture the
            aesthetics, the feel, of the texts they reference. Perhaps more importantly though, Spinosa's intervention in those texts
            unifies them.&nbsp;
            <em>OO</em>&nbsp;reads as a collection not an anthology with its poet, in the spirit of the glosa, paying tribute to influences
            and inspiration.” <strong>Ryan J. Cox, Prairie Fire</strong>
          </p>

          <p>
            “Dani Spinosa's OO pushes buttons, turns keys, and swipes, steals and homages all over poetry. Every poem demands you LOOK
            AGAIN! and see where voices slip between the keystrokes. Extravagant, interruptive, declarative and a real kick in the
            eyeballs.” <strong>derek beaulieu</strong>
          </p>

          <p>
            “WTF does Dani Spinosa think she is doing copying all these (mostly) male poets? Lock up your typewriters! Hide your anthologies
            of classic visual poetry! Protect yourself and the literary tradition from the stealth interventions of Spinosa, who is
            (mis)appropriating works by every conceivable author of graphically scored verse in the name of some kind of femmeship that
            involves conversations with the dead as well as the living. The former are silent on the matter and the latter? We shall see.
            Rarely has mimicry been used to such high-level hermeneutic ends.” <strong>Johanna Drucker</strong>
          </p>

          <p>
            “Not only an excellent, well-researched overview of the history and tradition of typewritten visual poetry, but also—what a sly
            female response to it!” <strong>Petra Schulze-Wollgast</strong>
          </p>
          <p className="heading">Reviews of and Press for OO: Typewriter Poems</p>

          <ul className="bullet-list">
            <li>
              Cox, Ryan J. “
              <a rel="noreferrer noopener" href="https://www.prairiefire.ca/oo-typewriter-poems-by-dani-spinosa/" target="_blank">
                OO: Typewriter Poems by Dani Spinosa
              </a>
              .” <em>Prairie Fire</em>, 19 October 2021.
            </li>
            <li>
              Longstaff, Clayton. “
              <a href="https://canlit.ca/article/then-mars/" target="_blank" rel="noreferrer noopener">
                Then, Mars
              </a>
              .” <em>Canadian Literature,</em> 1 September 2021.
            </li>
            <li>
              Heisler, Eva. “
              <a href="https://www.asymptotejournal.com/visual/typewriters-desire-community-dani-spinosa/">
                Dani Spinosa, Typewriters, Desire, Community
              </a>
              .” <em>Asympote. </em>Article and interview.
            </li>
            <li>
              Desforges, Jaclyn. “
              <a href="http://hamiltonreviewofbooks.com/blog/2021/04/26/20-poetry-collections-you-may-have-missed-in-2020">
                20 Poetry Collections You May Have Missed in 2020
              </a>
              .” <em>Hamilton Review of Books</em>, 2021
            </li>
            <li>
              mclennan, rob. “
              <a href="http://dusie.blogspot.com/2021/01/a-best-of-list-of-2020-canadian-poetry.html">
                A 'best of' list of 2020 Canadian poetry books
              </a>
              .” <em>DUSIE</em>, 1 January 2020.
            </li>
            <li>
              Mandrake, Jill. “<a href="https://www.geist.com/fact/reviews/unity-order-equilibr/ium/">Unity, Order, and Equilibr/ium</a>
              .” <em>GEIST</em>, vol. 116, 2020.
            </li>
            <li>
              Laliberte, Mark. “<a href="http://blog.carouselmagazine.ca/usereview003/">USERVIEW 003: Creation, Derivation, Exchange.”</a>
              <em>Carousel, </em>5 September.
            </li>
            <li>
              Earl, Amanda. “Episode 63 -- Interview with Dani Spinosa.”
              <em>Small Machine Talks </em>(Podcast), 30 July.
            </li>
            <li>
              mclennan, rob. “
              <a href="http://robmclennan.blogspot.com/2020/06/dani-spinosa-oo-typewriter-poems.html">
                Rev. of Dani Spinosa, <em>OO: Typewriter Poems</em>
              </a>
              .” 12 June.
            </li>
            <li>
              Hajnoczky, Helen. “
              <a href="https://www.ateacozyisasometimes.com/blog/2020/4/30/229mn1s4ah8xrzknyqlmupb2ila3kn">OOH My Heart</a>
              .” <em>A Tea Cozy is a Sometimes</em>, 1 May.
            </li>
            <li>
              Beattie, Stephen. “In her new collection, Dani Spinosa locates visual poetry at the nexus of analogue and digital traditions.”{' '}
              <em>Quill &amp; Quire</em>, 2 June.
            </li>
            <li>
              Beattie, Stephen. “<em>OO: Typewriter Poems</em>.” <em>Quill &amp; Quire</em>, vol. 86, iss. 1, Febr/uary 2020, p. 18.
            </li>
            <li>
              Ball, Jonathan. “
              <a href="https://www.winnipegfreepress.com/arts-and-life/entertainment/books/benaways-poetic-probing-resonates-569946152.html">
                Rev. of <em>OO: Typewriter Poems</em>
              </a>
              <em>.” Winnipeg Free Press</em>, 25 April.
            </li>
            <li>
              CBC Books. “
              <a href="https://www.cbc.ca/books/oo-typewriter-poems-1.5482144">29 works of Canadian poetry to watch for in spring 2020</a>
              .” <em>CBC Books</em>, 2 March.
            </li>
          </ul>
        </div>
        <p className="subtitle">Chapbooks</p>
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
        <Book cover="/images/Antigone.jpg" title="Centre Folds" press="Happy Monks Press (pamphlet)" date="2020" />
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

        <div className="text">
          <p className="subtitle">Poetry in Anthologies or Journals</p>

          <ul className="bullet-list">
            <li>
              “Two poems,”{' '}
              <a href="https://derekbeaulieu.ca/2023/01/26/paper-thread-25-years-of-housepress-and-no-press/?fbclid=IwAR09I-0EnSbhoyNetu9YLcnT1Mzj1VKPFfB60yOG3IQGmyUa8MKB2_2ilSg">
                Paper & Thread: 25 Years of housepress and No Press
              </a>
              , edited by Derek Beaulieu{' '}
            </li>
            <li>
              “Sphinx” and “Semele.” Hamilton Arts & Letters{' '}
              <a href="https://samizdatpress.typepad.com/hal_issue_fifteen-2/hal-magazine-issue-fifteen2-cover.html">
                Special Issue on Process
              </a>
              , issue 15.2, guest edited by Karl Jirgens
            </li>
            <li>
              “Table of Contents (for Gary Barwin).” Spectral Lines, An anthology of visual poems, edited by Kyle Flemmer. League of
              Canadian Poets.
            </li>
            <li>
              “Flowers for Helen.” <em>Report from the Hajnosczky Society</em>, edited by rob mclennan, 2022.
            </li>
            <li>
              “New Noise.” <em>Report from the Siklosi Society</em>, edited by rob mclennan, 2022.
            </li>
            <li>
              <a rel="noreferrer noopener" href="https://www.editionsduquelconque.com/revue-un-rectangle-quelconque-n-7" target="_blank">
                “Song for Theo” and “Song for Abby.”
              </a>{' '}
              <em>un rectangle quelconque</em>, n. 7.
            </li>
            <li>
              “Noi Peccatori.” <em>Report from the Earl Society</em>, edited by rob mclennan.
            </li>
            <li>
              “I am Here” and “See No Ideas, Hear No Ideas.” <em>14 Ways of Being Kinder to the Earth</em>, edited by Gregory Betts and
              derek beaulieu, pp. 14-15 (co-authored with Marianne Holm Hansen). 2021
            </li>
            <li>
              <a rel="noreferrer noopener" href="https://talkingaboutstrawberries.blogspot.com/2021/10/dani-spinosa.html" target="_blank">
                “Jocasta,” “Persephone,” and “Clytemnestra.”{' '}
              </a>
              <em>Talking About Strawberries All of the Time</em>.
            </li>
            <li>
              “Shadows Cast by Moonlight.” <em>Incantations</em>, visual poem with audio spell accompaniment by Gavilan Rayna Russom. Séance
              Centre. 2021
            </li>
            <li>
              “Second Act.” <em>The Minute Review</em>, vol. 1, no. 1, 2021
            </li>
            <li>
              “Antigone,” “Hestia,” “Medea,” “Ariadne,” and “Semele.” <em>Explorations in Media Ecology</em>, ed. Adeena Karasick, vol. 20,
              no. 2, 2021
            </li>
            <li>
              “Nausicaa” and “Glauke.” <em>Belfield Literary Review</em>, edited by Gregory Betts and
              <br />
              Lucy Collins, 2021
            </li>
            <li>
              “Introduction to Digital Poetics, a story.” <em>AMB: Avant-garde Boot Camp</em>, 2021 (Print)
            </li>
            <li>
              “Simply Black and White (5 Poems).” <em>Exile Quarterly</em>, vol. 43, iss. 3, 2020, pp. 69-73.
            </li>
            <li>
              “Megara” and “Eurydice.” <em>Myth &amp; Metamorphosis</em>, eds. Anthony Etherin and Clara Daneri, Penteract Press, 2020, p.
              28
            </li>
            <li>
              “<a href="https://poets.ca/2020/07/06/early-civilization-by-dani-spinosa/">Early Civilization</a>
              .” Poetry Pause, <em>League of Canadian Poets</em>. 6 July 2020.
            </li>
            <li>
              “<a href="https://abc.perspektive.at/odanio-codework-poetics/">Introduction to Digital Poetics, a story</a>
              .” <em>ABC: Avant-garde Boot Camp</em> (as OdaniO), 2020 (Online)
            </li>
            <li>
              “Cassandra” and “Danae.” <em>Train: a poetry journal</em>, 2020
            </li>
            <li>
              “Two Visual Poems.” <em>Not Your Best</em>, edited by Eric Schmaltz for knife|fork|book, 2019
            </li>
            <li>
              “I'm a nation, too.” <em>Here Comes Everyone: An Instanthology</em>, edited by Andrew MacEwan, p. 24, 25 April 2019
            </li>
            <li>
              “Philomela.” <em>ToCall: Women in Concrete</em>, vol. 4, edited by psw, 2019
            </li>
            <li>
              “Selections from <em>Betical</em> for Jon.” <em>ToCall</em>, vol. 3, p. 3, March, 2019
            </li>
            <li>
              “from <em>Anxious Influence: Reading John Cage Theoretically</em>: Introduction, 1837, 1874, 1914, and Conclusion.”{' '}
              <em>Avant Canada: Poets, Prophets, Revolutionaries</em>, edited by Gregory Betts and Christian Bok, 2019
            </li>
            <li>
              <a>“Mirella Bentivoglio,” “Ruth Wolf-Rehfeldt,” “Eric Schmaltz,” “Franz Mon,” “Nico Vassilakis.”</a>{' '}
              <em>Touch the Donkey, </em>
              iss. 18, July 2018
            </li>
            <li>
              “<a href="https://smallportionsjournal.com/category/issue-8/">Steve McCaffery</a>
              .” <em>Small Po[r]tions</em>, iss. 8, 22 April 2018
            </li>
            <li>
              “Paula Claire.” <em>NōD</em>, vol. 22, 2018, p. 52.
            </li>
            <li>
              “John Riddell,” “Zdenek Barborka,” “Marianne Holm Hansen,” “Cavan McCarthy,” “Jiri Valoch,” “Shant Basmajian,” and “M.
              Hachette.” <em>Ottawater</em>, no. 14, January 2018, pp. 25-27.
            </li>
            <li>
              “Two Shots.” <em>Canadian Literature</em>, no. 230-231, Autumn/Winter 2017, p. 248.
            </li>
            <li>
              <a href="http://themaynard.org/Vol10No2/contents.php">“Errata,” “Unrest,” and “Rebelling.”</a> <em>The Maynard</em>, Fall
              2017.
            </li>
            <li>
              “Yeah Right,” <em>Resist Much/Obey Little: Inaugural Poems to the Resistance,</em> Dispatches Poetry Anthology, 2017, p. 622.
            </li>
            <li>
              “<a href="http://www.bywords.ca/archives.php?issue=may2007">Jesse II: Science/Stigmata</a>
              ,” <em>Bywords.ca</em>, 2007
            </li>
            <li>
              “Dear Sylvia,” <em>The Charlatan</em> (Carleton University), 2005
            </li>
            <li>
              “Untitled,” <em>In/Words Magazine</em>, vol. 4, no. 3, 2004
            </li>
          </ul>
          <p className="subtitle"> Visual Poetry in Galleries or Installations</p>

          <ul className="bullet-list">
            <li>
              “Dangerously Close to Meaning,” co-authored with Eric Schmaltz and Kate Siklosi, installation in York University English
              Department Offices, installed 2019
            </li>

            <li>
              “coding practice” and “rebelling” (Russian translations by Pavel Zarutskiy). <em>Type-In Exhibit of Typewriter Poetry</em>,
              St. Petersburg, Russia, 2019
            </li>

            <li>
              “Riddle” and “Fill Up.” <em>Concrete is Porous</em>, Secret Handshake Gallery, October 2018
            </li>

            <li>
              “<a href="https://betical.digital/">Betical</a>” (digital poem installation), co-authored with Jon Orsi, <em>=SUM(things)</em>
              , University of Waterloo Critical Media Lab annual symposium, 7 April 2017
            </li>
          </ul>
        </div>
      </main>
    </>
  );
};

export default CreativeWriting;
