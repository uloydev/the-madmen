/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      fontFamily: {
        anton: ["Anton", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        jotione: ["Joti One", "serif"],
        barriecito: ["Barriecito", "system-ui"],
        comic: ["Comic Neue", "cursive"],
      },
      colors: {
        madblue: "#0000FE",
        madred: "#FF0000",
        madyellow: "#FCFD0C",
        madgreen: "#41C508",
        madbase: "#D9D9D9",
        madsecondary: "#C0C0C0",
        madgrey: "#777777",
        madlightgrey: "#EDEDED",
        madpurple: "#CC00FF",
        madcyan: "#00FFF0",
      },
      borderColor: {
        madyellow: "#FCFD0C",
      },
    },
  },
  plugins: [],
}

