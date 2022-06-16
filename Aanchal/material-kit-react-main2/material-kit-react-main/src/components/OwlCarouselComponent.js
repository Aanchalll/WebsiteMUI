import React from "react";
// import { Container, Grid, Card, Typography } from "@mui/material";
// import Feature1Style from "../../CSSFiles/Feature1Style";
// eslint-disable-next-line import/no-unresolved
// import "bootstrap/dist/css/bootstrap.min.css";
import OwlCarousel from "react-owl-carousel";
// eslint-disable-next-line import/no-extraneous-dependencies
import "owl.carousel/dist/assets/owl.carousel.css";
// eslint-disable-next-line import/no-extraneous-dependencies
// eslint-disable-next-line import/no-extraneous-dependencies
import "owl.carousel/dist/assets/owl.theme.default.css";
import Card from "@mui/material/Card";

import imagelink from "../assets/images/examples/gate1.jpg";
import imagelink2 from "../assets/images/examples/gate2.png";
import imagelink3 from "../assets/images/examples/gate3.jpg";

function OwlCarouselComponent() {
  return (
    <Card
      // sx={{
      //   p: 2,
      //   // mx: { xs: 2, lg: 3 },
      //   // mt: -8,
      //   // mb: 4,
      //   position: "relative",
      //   top: "40rem",
      //   width: "94%",
      //   m: "3% 3%",
      //   // backgroundColor: "#000",
      //   backdropFilter: "saturate(200%) blur(30px)",
      //   // boxShadow: ({ boxShadows: { xxl } }) => xxl,
      //   // boxShadow:
      //   //   "0 0 2px #fff, 0 0 3px silver, 0 0 4px silver, 0 0 5px silver, 0 0 6px silver, 0 0 7px silver, 0 0 8px silver",
      //   // opacity: "0.8",
      //   backgroundColor: transparent ? transparentColor.main : rgba(black.main, 0.2),
      // }}
      sx={({ palette: { transparent: transparentColor, black }, functions: { rgba } }) => ({
        backgroundColor: rgba(black.main, 0.2),
        boxShadow:
          "0 0 2px #fff, 0 0 3px silver, 0 0 4px silver, 0 0 5px silver, 0 0 6px silver, 0 0 7px silver, 0 0 8px silver",
        position: "relative",
        top: "40rem",
        width: "94%",
        m: "3% 3%",
        p: 2,
        // backgroundColor: "#000",
        backdropFilter: "saturate(200%) blur(30px)",
      })}
    >
      <OwlCarousel className="owl-theme" loop margin={10} nav autoplay items={5}>
        <div className="item">
          <ProcessName Image={imagelink} />
        </div>
        <div className="item">
          <ProcessName Image={imagelink2} />
        </div>
        <div className="item">
          <ProcessName Image={imagelink3} />
        </div>
        <div className="item">
          <ProcessName Image={imagelink} />
        </div>
        <div className="item">
          <ProcessName Image={imagelink2} />
        </div>
        <div className="item">
          <ProcessName Image={imagelink3} />
        </div>
        <div className="item">
          <ProcessName Image={imagelink} />
        </div>
        <div className="item">
          <ProcessName Image={imagelink2} />
        </div>
        <div className="item">
          <ProcessName Image={imagelink3} />
        </div>
        <div className="item">
          <ProcessName Image={imagelink} />
        </div>
        <div className="item">
          <ProcessName Image={imagelink2} />
        </div>
        <div className="item">
          <ProcessName Image={imagelink3} />
        </div>
      </OwlCarousel>
    </Card>
  );
}
export default OwlCarouselComponent;
function ProcessName(props) {
  // eslint-disable-next-line react/prop-types
  const { Image } = props;
  return <img className="Img" src={Image} alt="" height="300px" />;
}
