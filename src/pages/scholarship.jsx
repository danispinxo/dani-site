import TopNavbar from "../components/Navbar";
import Book from "../components/Book";
import Publication from "../components/Publication";
import Footer from "../components/Footer";

const Scholarship = () => {
  return (
    <>
      <TopNavbar />
      <main className="page-content">
        <article>
          <h1 className="title">Scholarship</h1>
          <p className="subtitle">Books</p>
          <Book
            cover="/images/anarchists-cover.jpg"
            title="Anarchists in the Academy: Machines and Free Readers in Experimental Poetry"
            press="University of Alberta Press"
            date="May 2018"
            notes="Shortlisted for the Alberta Book Publishing Award for Book Design"
            linkType="sale"
            link="https://www.uap.ualberta.ca/titles/908-9781772123760-anarchists-in-the-academy"
          />

          <p className="subtitle">Edited Volumes</p>
          <Book
            cover="/images/decoding-cover.webp"
            title="Decoding Canadian Digital Poetics (Gathering)"
            press="Electronic book review"
            date="February 2021"
            notes="Co-edited with Lai-Tze Fan"
            linkType="visit"
            link="https://electronicbookreview.com/gathering/decoding-canadian-digital-poetics-gathering/"
          />
          <Book
            cover="/images/arabic-cover.webp"
            title="Essays from the Arabic E-lit Conference (Gathering)"
            press="Electronic book review"
            date="December 2018"
            notes=""
            linkType="visit"
            link="https://electronicbookreview.com/gathering/essays-from-the-arabic-e-lit-conference/"
          />

          <p className="subtitle">Scholarly Podcasts</p>
          <Book
            cover="/images/podcast-cover.webp"
            title="Theft on the Ground Floor"
            press="Anarchist Studies"
            date="April 2021"
            notes="For the Longborough University Anarchist Research Group"
            linkType="listen"
            link="https://anarchistessays.podbean.com/e/essay-9-dani-spinosa-theft-on-the-ground-floor/"
          />

          <p className="subtitle">Peer-Reviewed Publications</p>
          <Publication
            title="Digital Poetics and Cyberfeminism"
            publication="The Poetics, Gender, and Sexuality Handbook"
            press="Bloomsbury"
            date="2024"
            notes="Co-authored with Kyle Flemmer, edited by Heather Milne and Elena Basile"
          />
          <Publication
            title="Nations of Touch: The Politics of Electronic Literature as Digital
          Humanities"
            publication="Future Horizons"
            press="U of Ottawa Press"
            date="June 2023"
            notes="Edited by Paul Barrett and Sarah Roger"
            linkType="shop"
            link="https://press.uottawa.ca/en/9780776640068/future-horizons/"
          />
          <Publication
            title="Learning Management Platforms: Notes on Teaching “Taroko Gorge” in a Pandemic"
            publication="Platform [Post?] Pandemic"
            press="Electronic book review"
            date="March 2022"
            linkType="read"
            link="https://electronicbookreview.com/essay/learning-management-platforms-notes-on-teaching-taroko-gorge-in-a-pandemic/"
          />
          <Publication
            title="Introduction"
            publication="Decoding Canadian Digital Poetics"
            press="Electronic book review"
            date="February 2021"
            notes="Co-authored with Lai-Tze Fan"
            linkType="read"
            link="https://electronicbookreview.com/essay/decoding-canadian-digital-poetics/"
          />
          <Publication
            title="Introduction"
            publication="Essays from the Arabic E-lit Conference"
            press="Electronic book review"
            date="December 2018"
            notes=""
            linkType="read"
            link="http://electronicbookreview.com/gathering/essays-from-the-arabic-e-lit-conference/"
          />
          <Publication
            title="Literary Readers in Cognitive Assemblages"
            publication="Essays from the Arabic E-lit Conference"
            press="Electronic book review"
            date="December 2018"
            notes="riPOSTe to N. Katherine Hayles"
            linkType="read"
            link="http://electronicbookreview.com/essay/literary-readers-in-cognitive-assemblages/"
          />
          <Publication
            title="Joyce, Michael. Of Two Minds: Hypertext, Pedagogy, and Poetics"
            publication="The Bloomsbury Handbook of Electronic Literature"
            press="Bloomsbury"
            date="November 2017"
            notes="Edited by Joseph Tabbi"
            linkType="shop"
            link="https://www.bloomsbury.com/ca/bloomsbury-handbook-of-electronic-literature-9781474230254/"
          />
          <Publication
            title="C. T. Funkhouser. Prehistoric Digital Poetry"
            publication="The Bloomsbury Handbook of Electronic Literature"
            press="Bloomsbury"
            date="November 2017"
            notes="Edited by Joseph Tabbi"
            linkType="shop"
            link="https://www.bloomsbury.com/ca/bloomsbury-handbook-of-electronic-literature-9781474230254/"
          />
          <Publication
            title="Jim Andrews Drifting to (and from) Seattle"
            publication="Canadian Literature"
            press="volume 235, pages 91-106"
            date="Winter 2017"
            notes="Special Issue on The Concept of Vancouver"
            linkType="link"
            link="https://canlit.ca/article/jim-andrews-drifting-to-and-from-vancouver/"
          />
          <Publication
            title="Vulva Zombies: Authorship in Erin Mouré's Pillage Laud"
            publication="Mosaic: an interdisciplinary critical journal"
            press="volume 51, number 2, pages 123-138"
            date="June 2018"
            notes=""
            linkType="link"
            link="https://muse.jhu.edu/article/696288/pdf"
          />
          <Publication
            title="Towards a Theory of Canadian Digital Poetics"
            publication="Studies in Canadian Literature"
            press="volume 42, number 2"
            date="May 2018"
            notes=""
            linkType="link"
            link="https://journals.lib.unb.ca/index.php/SCL/article/view/26272"
          />
          <Publication
            title="Postanarchist Literary Theory and the Experiment: Some Preliminary Notes"
            publication="Journal for the Study of Radicalism"
            press="volume 11, number 1, pages 83-111"
            date="Spring 2017"
            notes=""
            linkType="link"
            link="https://muse.jhu.edu/article/653983"
          />
          <Publication
            title="John Cage and the Comunis of Communication"
            publication="Canadian Review of American Studies"
            press="volume 46, number 1, pages 22-41"
            date="Spring 2017"
            notes=""
            linkType="link"
            link="http://www.utpjournals.press/doi/abs/10.3138/cras.2014.016"
          />
          <Publication
            title="Freely Revised and Edited: Anarchist Authorship in Jackson Mac Low's The Stein Poems"
            publication="ESC: English Studies in Canada"
            press="volume 41, number 2-3, pages 91-108"
            date="June/September 2015"
            notes=""
            linkType="link"
            link="https://ejournals.library.ualberta.ca/index.php/ESC/article/view/27938"
          />
          <Publication
            title="No Authors: Writing and Supervising in the Digital Common"
            publication="Beyond the Dissertation as Proto-Monograph: Examples and Reflections"
            press="Media Commons: Future of the Book"
            date="November 2014"
            notes=""
            linkType="read"
            link="http://mediacommons.org/alt-ac/pieces/no-authors-writing-and-supervising-digital-common"
          />
          <p className="subtitle">Interviews</p>
          <Publication
            title="In Digital Ether: W. Mark Sutherland in Correspondence with Dani Spinosa"
            publication="Jacket2"
            press=""
            date="September 2017"
            notes=""
            linkType="read"
            link="https://jacket2.org/interviews/digital-ether"
          />
          <p className="subtitle">Book Reviews</p>
          <Publication
            title="Now I am a number: Rev. of repeater by Drew McEwan"
            publication="The Minute Review"
            date="2024"
            link="https://derekbeaulieu.ca/2024/11/20/the-minute-review-14/"
          />
          <Publication
            title="Rev. of Danielle LaFrance, Annie Ross, and Edward Byrne"
            publication="Canadian Literature"
            date="2023"
            link="https://canlit.ca/article/a-sense-of-place/"
          />
          <Publication
            title="A Sense of Place: Rev. of Zane Koss and Natasha Ramoutar"
            publication="Canadian Literature"
            date="2022"
          />
          <Publication
            title="A Dual Longing: Rev. of alfabet by Sadiqa de Meijer"
            publication="Canadian Literature"
            date="2022"
            link="https://canlit.ca/article/a-dual-longing/"
          />
          <Publication
            title="Rev. of Anne-Marie Turza's Fugue with Bedbugs"
            publication="Quill & Quire"
            date="2022"
          />
          <Publication
            title="Checking Out: Rev. of Sarah Tolmie and Evan J"
            publication="Canadian Literature"
            press="number 243"
            date="2022"
            link="https://canlit.ca/article/checking-out/"
          />
          <Publication
            title="Rev. of Comrade by Jodi Dean"
            publication="Anarchist Studies"
            press="volume 29, number 2, pages 120-1"
            date="2021"
          />
          <Publication
            title="Yes I Read Yes I Will Yes: Rev. of Travis Sharp's Yes, I am a Corpse Flower"
            publication="The Minute Review"
            press="volume 1, number 1"
            date="2021"
          />
          <Publication
            title="Here for the Surprises: Rev. of Molly Cross-Blanchard and Sarah Burgoyne"
            publication="Canadian Literature"
            date="2021"
            link="https://canlit.ca/article/here-for-the-surprises/"
          />
          <Publication
            title="These Words Singing: Rev. of Bertrand Bickersteth and Meredith Quartermain"
            publication="Canadian Literature"
            press="number 241, pages 136-7"
            date="2021"
          />
          <Publication
            title="Designing and Resisting: Rev. of Debates in the Digital Humanities 2019 by Matthew K. Gold and
          Lauren F. Klein (Editors)"
            publication="Canadian Literature"
            press="number 240, pages 153-4"
            date="2020"
          />
          <Publication
            title="All in All: Rev. of Poetry by Caroline Szpak and Kate Braid"
            publication="Canadian Literature"
            press="number 238, pages 123-4"
            date="2019"
            link="https://canlit.ca/article/all-in-all/"
          />
          <Publication
            title="Algorithms of Oppression and Hopeful Intervention: Rev. of Algorithms of Oppression by Safiya Umoja Noble"
            publication="The New Americanist"
            date="2018"
          />
          <Publication
            title="Silver Fish: Rev. of Poetry by Andrew McEwan and Fenn Stewart"
            publication="Canadian Literature"
            press="number 235, pages 168-9"
            date="2017"
            link="https://canlit.ca/article/silver-fish/"
          />
          <Publication
            title="Review: Screening Images of American Masculinity in the Age of Postfeminism"
            publication="Canadian Women's Studies"
            press="volume 32, issue 1-2, pages 148-9"
            date="2017"
          />
          <Publication
            title="Loop Limbo: Rev. of Poetry by Aaron Kreuter, Jacqueline Valencia, and Sarah Pinder"
            publication="Canadian Literature"
            press="number 233, pages 152-4"
            date="2017"
            link="https://canlit.ca/article/loop-limbo/"
          />
          <Publication
            title="Tired Time Travelling: Rev. of <em>Traversing Leonard</em> by Craig Savel"
            publication="Canadian Literature"
            press="number 2227, pages 177-8"
            date="2016"
            link="https://canlit.ca/article/tired-time-travelling/"
          />
          <Publication
            title="Group Review: It's Complicated by dana boyd"
            publication="HASTAC"
            date="2015"
          />
          <Publication
            title="Review: The Democracy Project by David Graeber"
            publication="Political Media Review"
            date="2013"
          />
          <Publication
            title="Review: Revolt!: The Next Great Transformation from Kleptocracy Capitalism to Libertarian Socialism through Counter Ideology, Societal Education, & Direct Action by John Askmikopolous"
            publication="Political Media Review"
            date="2012"
          />
          <Publication
            title="Review: My Darling Nellie Grey by George Bowering"
            publication="The Bull Calf"
            notes="Co-authored with Melissa Dalgliesh"
            date="2011"
          />
          <Publication
            title="Review: Another Dinner is Possible by Mike and Isy"
            publication="Political Media Review"
            press="Co-authored with Charles Boyes"
            date="2010"
          />
        </article>
        <Footer />
      </main>
    </>
  );
};

export default Scholarship;
