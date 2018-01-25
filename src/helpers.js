const supportPageOffset = window.pageXOffset !== undefined;
const isCSS1Compat = (document.compatMode || "") === "CSS1Compat";

export const getHorizontalShift = () =>
  supportPageOffset
    ? window.pageXOffset
    : isCSS1Compat
      ? document.documentElement.scrollLeft
      : document.body.scrollLeft;
