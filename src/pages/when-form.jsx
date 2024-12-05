import { useEffect } from 'react';
import TopNavbar from '../components/Navbar';

const WhenForm = () => {
  useEffect(() => {
    const inputs = document.querySelectorAll('input[type="text"]');
    inputs.forEach((input) => {
      const computedStyles = window.getComputedStyle(input);

      const span = document.createElement('span');
      span.style.visibility = 'hidden';
      span.style.position = 'absolute';
      span.style.whiteSpace = 'nowrap';
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

  return (
    <>
      <TopNavbar />
      <main className="page-content">
        <h1 className="title">Add to the "When" Lexicon</h1>
        <form>
          <div className="when-form">
            When the <input type="text" name="lights" placeholder="lights" />
            <input type="text" name="went" placeholder="went" /> <input type="text" name="wordOut" placeholder="out" /> and
            <input type="text" name="before" placeholder="before" /> the <input type="text" name="darkness" placeholder="darkness" />
            <input type="text" name="turnedOn" placeholder="turned on" /> us and our{' '}
            <input type="text" name="uncheckedLove" placeholder="unchecked love" />
            of
            <input type="text" name="darknessTwo" placeholder="darkness" /> inside the{' '}
            <input type="text" name="eternalImmanence" placeholder="eternal immanence" /> we
            <input type="text" name="considered" placeholder="considered" /> and refused to believe was
            <input type="text" name="alive" placeholder="alive" /> and <input type="text" name="lurking" placeholder="lurking" /> in the
            <input type="text" name="light" placeholder="light" /> as much as the{' '}
            <input type="text" name="darkHairedStranger" placeholder="dark haired stranger" /> we
            <input type="text" name="greeted" placeholder="greeted" /> with{' '}
            <input type="text" name="mutteredFrenchAndGerman" placeholder="muttered French and German" /> widows{' '}
            <input type="text" name="knittedUsBlankets" placeholder="knitted us blankets" />
            of <input type="text" name="kidHair" placeholder="kid hair" /> that{' '}
            <input type="text" name="blanketed" placeholder="blanketed" /> the{' '}
            <input type="text" name="blankness" placeholder="blankness" /> when the lights went out
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
