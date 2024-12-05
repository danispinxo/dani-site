const setInputWidths = () => {
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
};

export default { setInputWidths };
