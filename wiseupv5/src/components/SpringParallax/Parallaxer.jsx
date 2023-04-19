import React from "react";
import { Box } from "@mui/material";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

const Parallaxer = ({ pagesNum, pageOne, pageTwo, pageThree }) => {
  return (
    <Box sx={{ position: "relative", height: "100%", width: "100%" }}>
      <Box
        sx={{
          width: "100%",
          height: "100%",
          position: "absolute",
          backgroundImage: `url(${require("../../images/space7.jpg")})`,
          backgroundSize: "cover",
          // backgroundSize: "contain",
          // transform: "rotate(90deg)",
        }}
      ></Box>
      <Parallax pages={pagesNum} left="0">
        <ParallaxLayer offset={0} speed={1} style={{ opacity: 1 }}>
          {pageOne}
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={1} style={{ opacity: 1 }}>
          {pageTwo}
        </ParallaxLayer>

        <ParallaxLayer offset={2} speed={1} style={{ opacity: 1 }}>
          {pageThree}
        </ParallaxLayer>
      </Parallax>
    </Box>
  );
};

export default Parallaxer;
