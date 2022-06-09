/**
=========================================================
* Material Kit 2 React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// Material Kit 2 React Base Styles
import colors from "assets/theme/base/colors";

const { info, dark } = colors;

export default {
  body: {
    width: "100%",
    height: "100%",
    backgroundColor: "BLACK",
    // cursor: "url(assets/ images/bg-presentation.jpg),auto",
  },
  html: {
    scrollBehavior: "smooth",
  },
  "*, *::before, *::after": {
    margin: 0,
    padding: 0,
  },
  "a, a:link, a:visited": {
    textDecoration: "none !important",
  },
  "a.link, .link, a.link:link, .link:link, a.link:visited, .link:visited": {
    color: `${dark.main} !important`,
    transition: "color 150ms ease-in !important",
  },
  "a.link:hover, .link:hover, a.link:focus, .link:focus": {
    color: `${info.main} !important`,
  },
  "#clouds": {
    display: "flex",
    position: "absolute",
  },

  ".cloud": {
    width: "150px",
    height: "150px",
    borderRadius: "5px",
    position: "relative",
    background: "linear-gradient(120deg, rgb(65 66 50), rgb(141 128 128))",
  },

  ".x1": {
    left: "0%",
    transform: "rotate(60deg)",
    animation: "down 30s ease-in-out infinite alternate, rotate 10s ease-in-out infinite alternate",
    bottom: "0",
    opacity: "0.3",
  },

  ".x2": {
    width: "150px",
    height: "150px",
    left: "20%",
    transform: "rotate(60deg)",
    animation: "up 18s ease-in-out infinite alternate, rotate 10s ease-in-out infinite alternate",
    bottom: "0",
    opacity: "0.3",
  },
  ".x3": {
    width: "100px",
    height: "100px",
    left: "-45%",
    transform: "rotate(35deg)",
    animation: "up 30s ease-in-out infinite alternate, rotate 10s ease-in-out infinite alternate",
    bottom: "0",
    opacity: "0.3",
  },
  ".x4": {
    left: "50%",
    transform: "rotate(25deg)",
    animation: "down 25s ease-in-out infinite alternate, rotate 10s ease-in-out infinite alternate",
    top: "-100%",
    opacity: "0.5",
  },
  ".x5": {
    left: "15%",
    transform: "rotate(65deg)",
    animation: "up 15s ease-in-out infinite alternate, rotate 10s ease-in-out infinite alternate",
    bottom: "0",
  },

  "@keyframes move-left-right": {
    "0%": { transform: "translateX(-10px)" },
    "50%": { transform: "translateX(10px)" },
    "100%": { transform: "translateX(-10px)" },
  },
  "@keyframes up": {
    from: {
      marginTop: "40vh",
    },
    to: {
      marginTop: "-40vh",
    },
  },
  "@keyframes down": {
    from: {
      marginTop: "-50vh",
    },
    to: {
      marginTop: "50vh",
    },
  },
  "@keyframes rotate": {
    to: {
      transform: "rotate3d(4, -7, 7, 180deg)",
    },
  },

  ".radial-gradient": {
    backgroundRepeat: "no-repeat",
    backgroundSize: "100% 100%",
    // backgroundImage: "radial-gradient(farthest-corner at 40px 40px, #111 20%, #333 100%,#ddd 100%)",
  },
  // ".text-glow": {
  //   color: "white",
  //   textShadow:
  //     "0 1px 0 #ccc,0 2px 0 #c9c9c9, 0 3px 0 #bbb, 0 4px 0 #b9b9b9, 0 5px 0 #aaa, 0 6px 1px rgba(0,0,0,.1), 0 0 5px rgba(0,0,0,.1),0 1px 3px rgba(0,0,0,.3), 0 3px 5px rgba(0,0,0,.2),0 5px 10px rgba(0,0,0,.25), 0 10px 10px rgba(0,0,0,.2), 0 20px 20px rgba(0,0,0,.15)",
  // },
  ".t2": {
    fontFamily: "monospace",
    fontSize: "6rem",
    color: "black",
    textShadow:
      "0 0 2px #fff, 0 0 3px silver, 0 0 4px silver, 0 0 5px silver, 0 0 6px silver, 0 0 7px silver, 0 0 8px silver",
    // textShadow: "0 0 2px #fff, 0 0 3px #ff4da6, 0 0 4px #ff4da6, 0 0 5px #ff4da6, 0 0 6px #ff4da6, 0 0 7px #ff4da6, 0 0 8px #ff4da6",
  },
};
