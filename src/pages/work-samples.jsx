import TopNavbar from '../components/Navbar';
import Book from '../components/Book';
import Publication from '../components/Publication';

export default function WorkSamples() {
  const images = [
    { src: '/images/turnbull-cover.jpg', alt: 'xo by Chris Turnbull (Gap Riot Press)' },
    { src: '/images/punctum-cover.jpg', alt: 'Punctum by Gary Barwin and Dona Mayoora (Gap Riot Press)' },
    { src: '/images/mclennan-cover.jpg', alt: ':condition report by rob mclennan (Gap Riot Press)' },
    { src: '/images/macaskill-cover.jpg', alt: 'five from hem by Annick MacAskill (Gap Riot Press)' },
    { src: '/images/erin-cover.jpg', alt: 'Two Birds, All Moon by Alexus Erin (Gap Riot Press)' },
    { src: '/images/flemmer-cover.jpg', alt: 'Building Report by Kyle Flemmer (Gap Riot Press)' },
    { src: '/images/clayton-cover.jpg', alt: 'Kneeling in Our Name by Conyer Clayton (Gap Riot Press)' },
    { src: '/images/heigh-cover.jpg', alt: 'To the People Who Used to Live Here by Katherin Heigh (Gap Riot Press)' },

    { src: '/images/sounds-like-flyer.jpg', alt: 'Sounds Like an H of a Night Flyer (Meet the Presses)' },
    { src: '/images/market-flyer-white.jpg', alt: 'Market Flyer (Meet the Presses)' },
    { src: '/images/market-flyer-blue.jpg', alt: 'Market Flyer (Meet the Presses)' },
    { src: '/images/call.jpg', alt: 'Market Flyer (Meet the Presses)' },
    { src: '/images/flyer-1.jpg', alt: 'Gap Riot Launch Flyer (Gap Riot Press)' },
    { src: '/images/flyer-2.jpg', alt: 'Gap Riot Launch Flyer (Gap Riot Press)' },
    { src: '/images/event-graphic.jpg', alt: 'Gap Riot Event Flyer (Gap Riot Press)' },
  ];

  return (
    <>
      <TopNavbar />
      <main>
        <div className="page-content">
          <h1 className="title">Work Samples</h1>

          <p className="subtitle">Selected Graphic Design</p>
          <div className="gallery">
            {images.map((item) => (
              <a href={item.src} target="_blank" rel="noreferrer noopener">
                <img className="cover-gallery-image" alt={item.alt} src={item.src} />
              </a>
            ))}
          </div>

          <p className="subtitle">Selected Website Design</p>
          <Book
            cover="/images/gap-riot-site.png"
            title="Gap Riot Press"
            notes="Website with archive, launch pages, events, submission guidelines, and shop"
            linkType="visit"
            link="https://www.gapriotpress.com/"
          />
          <Book
            cover="/images/jesse-site.png"
            title="JP Therapy Studios"
            notes="Website with services outline, help and resources links, contact, and client portal for Ontario art therapist"
            linkType="visit"
            link="https://jptherapystudios.com/"
          />

          <p className="subtitle">Social Media Management</p>
          <Publication
            title="Gap Riot Press"
            publication="X (Twitter)"
            date="co-managed with Kate Siklosi"
            linkType="social"
            link="https://x.com/gapriotpress"
          />
          <Publication title="Gap Riot Press" publication="Facebook" linkType="social" link="https://www.facebook.com/gapriotpress" />
          <Publication
            title="Meet the Presses"
            publication="X (Twitter)"
            date="2017-2019"
            linkType="social"
            link="https://x.com/MeetThePresses"
          />

          <p className="subtitle">Selected Public Writing</p>
          <Publication
            title="Anita Lahey on the fiery inspiration and the collaboration behind her new works of poetry"
            publication="Quill & Quire"
            date="April 2023"
            linkType="link"
            link="https://quillandquire.com/authors/anita-lahey-on-the-fiery-inspiration-and-the-collaboration-behind-her-new-works-of-poetry/"
          />
          <Publication
            title="Three Short Interviews with Independent Presses: Gap Riot Press"
            publication="The Ampersand Review, no. 3"
            date="Winter 2022"
            linkType="link"
            link="https://theampersandreview.ca/issue-no-3-toc"
          />
          <Publication
            title="“MANIFESTO: Visual Poetry for Women” and “Coda for Women Making Visual Poetries”"
            publication="Hamilton Arts and Letters, Canadian Chapbook Issue"
            press="issue 15.1"
            date="2022"
            notes="Edited by Jim Johnstone and Shane Nielson"
            linkType="link"
            link="https://samizdatpress.typepad.com/hal_issue_fifteen-1/hal-magazine-issue-fifteen1-cover.html"
          />
          <Publication
            title="The art of writing #77: Dani Spinosa"
            publication="talking about strawberries all the time"
            date="9 October 2022"
            linkType="link"
            link="http://talkingaboutstrawberries.blogspot.com/2022/10/the-art-of-writing-77-dani-spinosa.html"
          />
          <Publication
            title="Some Rough Notes in Defense of the Limited Run"
            publication="Periodicities: a journal of poetry and poetics"
            date="1 March 2021"
            notes="Co-authored with Kate Siklosi"
            linkType="link"
            link="https://periodicityjournal.blogspot.com/2021/03/kate-siklosi-and-dani-spinosa-some.html"
          />
          <Publication
            title=" A Title Is Like a Doorbell, Not a Doorway' April Writer-In-Residence Dani Spinosa On Her Subversive New Collection"
            publication="Open Book"
            date="2 April 2020"
            linkType="link"
            link="http://open-book.ca/News/A-Title-Is-Like-a-Doorbell-Not-a-Doorway-April-Writer-In-Residence-Dani-Spinosa-On-Her-Subversive-New-Collection"
          />
          <Publication
            title="Beautiful Books: OO: Typewriter Poems"
            publication="All Lit Up"
            date="3 June 2020"
            linkType="link"
            link="https://alllitup.ca/Blog/Beautiful-Books/2020/Beautiful-Books-OO-Typewriter-Poems#topofpostcontent"
          />
          <Publication
            title="Proper Tales Press 40th Anniversary Essay"
            publication="Forty Proper Tales"
            date="23 January 2020"
            linkType="link"
            link="https://fortypropertales.blogspot.com/2020/01/proper-tales-press-40th-anniversary.html"
          />
          <Publication
            title="Statement and four poems for Spotlight series #27: Dani Spinosa"
            publication="Medium@robmclennan"
            date="2 July 2018"
            linkType="link"
            link="https://medium.com/@robmclennan/spotlight-series-27-dani-spinosa-6793a54cb956"
          />
          <Publication
            title="This Book is an Action': Notes on Creating a Feminist Small Press"
            publication="Hook & Eye"
            date="18 September 2017"
            notes="Co-authored with Kate Siklosi"
            linkType="link"
            link="https://hookandeye.ca/2017/09/18/this-book-is-an-action-notes-on-creating-a-feminist-small-press/"
          />
          <Publication
            title="Reading John Cage with my Mother"
            publication="University of Toronto Press Blog"
            date="23 March 2016"
            linkType="link"
            link="https://blog.utorontopress.com/2016/03/23/reading-john-cage-with-my-mother/"
          />
        </div>
      </main>
    </>
  );
}
