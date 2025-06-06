import { useEffect } from "react";
import TopNavbar from "../components/Navbar";
import supabase from "../lib/supabaseClient";

const WhenForm = () => {
  useEffect(() => {
    const inputs = document.querySelectorAll('input[type="text"]');
    inputs.forEach((input) => {
      const computedStyles = window.getComputedStyle(input);
      const span = document.createElement("span");
      span.style.visibility = "hidden";
      span.style.position = "absolute";
      span.style.whiteSpace = "nowrap";
      span.style.fontSize = computedStyles.fontSize;
      span.style.fontFamily = computedStyles.fontFamily;
      span.style.fontWeight = computedStyles.fontWeight;
      span.style.letterSpacing = computedStyles.letterSpacing;
      span.textContent = input.placeholder;
      document.body.appendChild(span);

      const placeholderWidth = span.offsetWidth;
      const paddingLeft = parseFloat(computedStyles.paddingLeft) || 0;
      const paddingRight = parseFloat(computedStyles.paddingRight) || 0;
      const borderLeft = parseFloat(computedStyles.borderLeftWidth) || 0;
      const borderRight = parseFloat(computedStyles.borderRightWidth) || 0;

      input.style.width = `${placeholderWidth + paddingLeft + paddingRight + borderLeft + borderRight}px`;

      document.body.removeChild(span);
    });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const values = {};
    formData.forEach((value, name) => (values[name] = value));

    const contributor = values.contributor;
    delete values.contributor;

    try {
      const { data: contributorData, error: contributorError } = await supabase
        .from("when_contributors")
        .insert({ name: contributor })
        .select()
        .single();

      if (contributorError)
        return console.error("Error adding contributor:", contributorError);
      const lexiconEntries = Object.entries(values).map(([key, value]) => ({
        blank: key,
        content: value,
      }));
      const { data: lexiconData, error: lexiconError } = await supabase
        .from("when_lexicon")
        .insert(lexiconEntries);
      if (lexiconError)
        return console.error("Error adding lexicon entries:", lexiconError);
      alert("Submission successful! Thank you! ");
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <>
      <TopNavbar />
      <main className="page-content">
        <h1 className="title">Add to the "When" Lexicon</h1>
        <p className="note">
          Thank you for your interest in adding to the lexicon database that the
          poem "When" uses to build its lines. Please fill out and submit the
          following form and your additions will be added to the poem's database
          so any future reading of the poem will include your language as a part
          of its selection process. To read a rendition of "When" and see
          samples of other lexicon additions, click{" "}
          <a href="/when" target="_blank" rel="noopener noreferrer">
            here
          </a>
          .
        </p>
        <form onSubmit={handleSubmit}>
          <div className="when-form">
            <div className="contributor-holder">
              <input
                type="text"
                name="contributor"
                placeholder="Your name as you would like it to appear on the contributor marquee"
              />
            </div>
            When the{" "}
            <input type="text" name="lights" placeholder="lights" required />
            <input type="text" name="went" placeholder="went" required />{" "}
            <input type="text" name="wordOut" placeholder="out" required /> and
            <input
              type="text"
              name="before"
              placeholder="before"
              required
            />{" "}
            the{" "}
            <input
              type="text"
              name="darkness"
              placeholder="darkness"
              required
            />
            <input
              type="text"
              name="turnedOn"
              placeholder="turned on"
              required
            />{" "}
            us and our{" "}
            <input
              type="text"
              name="uncheckedLove"
              placeholder="unchecked love"
              required
            />
            of
            <input
              type="text"
              name="darknessTwo"
              placeholder="darkness"
              required
            />{" "}
            inside the{" "}
            <input
              type="text"
              name="eternalImmanence"
              placeholder="eternal immanence"
              required
            />{" "}
            we
            <input
              type="text"
              name="considered"
              placeholder="considered"
              required
            />{" "}
            and refused to believe was
            <input
              type="text"
              name="alive"
              placeholder="alive"
              required
            /> and{" "}
            <input type="text" name="lurking" placeholder="lurking" required />{" "}
            in the
            <input type="text" name="light" placeholder="light" required /> as
            much as the{" "}
            <input
              type="text"
              name="darkHairedStranger"
              placeholder="dark haired stranger"
              required
            />{" "}
            we
            <input
              type="text"
              name="greeted"
              placeholder="greeted"
              required
            />{" "}
            with{" "}
            <input
              type="text"
              name="mutteredFrenchAndGerman"
              placeholder="muttered French and German"
              required
            />{" "}
            widows{" "}
            <input
              type="text"
              name="knittedUsBlankets"
              placeholder="knitted us blankets"
              required
            />
            of{" "}
            <input type="text" name="kidHair" placeholder="kid hair" required />{" "}
            that{" "}
            <input
              type="text"
              name="blanketed"
              placeholder="blanketed"
              required
            />{" "}
            the{" "}
            <input
              type="text"
              name="blankness"
              placeholder="blankness"
              required
            />{" "}
            when the lights went out
          </div>
          <div className="button-holder">
            <button type="submit">Submit</button>
          </div>
        </form>
      </main>
    </>
  );
};

export default WhenForm;
