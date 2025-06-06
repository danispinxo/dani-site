import TopNavbar from "../components/Navbar";
import Book from "../components/Book";

export default function WorkSamples() {
  const images = [
    {
      src: "/images/turnbull-cover.jpg",
      alt: "xo by Chris Turnbull (Gap Riot Press)",
    },
    {
      src: "/images/punctum-cover.jpg",
      alt: "Punctum by Gary Barwin and Dona Mayoora (Gap Riot Press)",
    },
    {
      src: "/images/mclennan-cover.jpg",
      alt: ":condition report by rob mclennan (Gap Riot Press)",
    },
    {
      src: "/images/macaskill-cover.jpg",
      alt: "five from hem by Annick MacAskill (Gap Riot Press)",
    },
    {
      src: "/images/erin-cover.jpg",
      alt: "Two Birds, All Moon by Alexus Erin (Gap Riot Press)",
    },
    {
      src: "/images/flemmer-cover.jpg",
      alt: "Building Report by Kyle Flemmer (Gap Riot Press)",
    },
    {
      src: "/images/clayton-cover.jpg",
      alt: "Kneeling in Our Name by Conyer Clayton (Gap Riot Press)",
    },
    {
      src: "/images/heigh-cover.jpg",
      alt: "To the People Who Used to Live Here by Katherin Heigh (Gap Riot Press)",
    },
    {
      src: "/images/sounds-like-flyer.jpg",
      alt: "Sounds Like an H of a Night Flyer (Meet the Presses)",
    },
    { src: "/images/call.jpg", alt: "Call for Submissions" },
    {
      src: "/images/event-graphic.jpg",
      alt: "Gap Riot Event Flyer (Gap Riot Press)",
    },
  ];

  const screenshots = [
    {
      src: "/images/sher1.png",
      alt: "Slate (D2L Brightspace) Screenshot (Sheridan College)",
    },
    {
      src: "/images/sher2.png",
      alt: "Slate (D2L Brightspace) Screenshot (Sheridan College)",
    },
    {
      src: "/images/sher3.png",
      alt: "Slate (D2L Brightspace) Screenshot (Sheridan College)",
    },
    {
      src: "/images/trent1.png",
      alt: "Blackboard Screenshot (Trent University)",
    },
    {
      src: "/images/trent2.png",
      alt: "Blackboard Screenshot (Trent University)",
    },
    {
      src: "/images/trent3.png",
      alt: "Blackboard Screenshot (Trent University)",
    },
  ];

  return (
    <>
      <TopNavbar />
      <main>
        <div className="page-content">
          <h1 className="title">Work Samples</h1>

          <p className="subtitle">Selected Course Design Samples</p>
          <div className="gallery">
            {screenshots.map((item) => (
              <a
                key={item.src}
                href={item.src}
                target="_blank"
                rel="noreferrer noopener"
              >
                <img
                  className="cover-gallery-image"
                  alt={item.alt}
                  src={item.src}
                />
              </a>
            ))}
          </div>

          <video controls autoPlay loop muted width="50%">
            <source src={"/images/sher-course-tour.mov"} type="video/mp4" />
          </video>
          <p className="subtitle">Selected Teaching Material Samples</p>

          <iframe
            src="https://docs.google.com/presentation/d/1-OYIzQ4xGELDGLEokgPkaYH02CpQuz_eRij_Or13xYk/embed?start=false&loop=false&delayms=3000"
            frameBorder="0"
            width="1280"
            height="749"
            allowfullscreen="true"
            mozallowfullscreen="true"
            webkitallowfullscreen="true"
          />

          <iframe
            src="https://docs.google.com/presentation/d/1TWV2AoIA4YFg8Pmzsjn7Z4JeWVyqYWftp0tr76ZeQPk/embed?start=false&loop=false&delayms=3000"
            frameBorder="0"
            width="960"
            height="569"
            allowfullscreen="true"
            mozallowfullscreen="true"
            webkitallowfullscreen="true"
          />
          <p className="subtitle">Selected Website Design</p>
          <Book
            cover="/images/dani-site.png"
            title="Dani Spinosa Personal Website"
            notes="Personal website with detailed publication, speaking, and teaching history, as well as image callery and contact form. Built from scratch (React, Next.js)"
            linkType="visit"
            link="/"
          />
          <Book
            cover="/images/gap-riot-site.png"
            title="Gap Riot Press"
            notes="Website with archive, launch pages, events, submission guidelines, and shop. Built using Squarespace."
            linkType="visit"
            link="https://www.gapriotpress.com/"
          />
          <Book
            cover="/images/jesse-site.png"
            title="JP Therapy Studios"
            notes="Website with services outline, help and resources links, contact, and client portal for Ontario art therapist. Built from scratch (React, Next.js)"
            linkType="visit"
            link="https://jptherapystudios.com/"
          />

          <p className="subtitle">Selected Graphic Design</p>
          <div className="gallery">
            {images.map((item) => (
              <a
                href={item.src}
                target="_blank"
                rel="noreferrer noopener"
                key={item.alt}
              >
                <img
                  className="cover-gallery-image"
                  alt={item.alt}
                  src={item.src}
                />
              </a>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
