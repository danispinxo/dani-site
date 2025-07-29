const isProduction = process.env.NODE_ENV === "production";

const plugins = {
  "postcss-flexbugs-fixes": {},
  "postcss-preset-env": {
    autoprefixer: {
      flexbox: "no-2009",
    },
    stage: 3,
    features: {
      "custom-properties": false,
    },
  },
};

if (isProduction) {
  plugins["@fullhuman/postcss-purgecss"] = {
    content: [
      "./src/pages/**/*.{js,jsx,ts,tsx}",
      "./src/components/**/*.{js,jsx,ts,tsx}",
      "./public/**/*.html",
    ],
    defaultExtractor: (content) =>
      content.match(/[A-Za-z0-9-_/:]*[A-Za-z0-9-_/]/g) || [],
    safelist: {
      standard: ["html", "body", "root"],
      deep: [
        /^__next/,
        /^tech-grid/,
        /^container/,
        /^btn/,
        /^col/,
        /^row/,
        /^d-/,
        /^text-/,
        /^bg-/,
        /^border-/,
        /^p-/,
        /^m-/,
        /^navbar/,
        /^nav/,
        /^dropdown/,
        /^modal/,
        /^fade/,
        /^show/,
        /^accordion/,
        /^carousel/,
        /^alert/,
        /^card/,
        /^list-group/,
        /^table/,
        /^form/,
        /^input/,
        /^select/,
      ],
      greedy: [
        /^fa-/,
        /^fab-/,
        /^fas-/,
        /^far/,
        /^fal-/,
        /^MuiButton/,
        /^Mui/,
        /^rs-/,
      ],
    },
    reject: ["**/node_modules/**"],
    variables: true,
    keyframes: true,
  };
}

module.exports = {
  plugins,
};
