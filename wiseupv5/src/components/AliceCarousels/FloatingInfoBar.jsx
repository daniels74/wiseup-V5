import React from "react";
import { useState } from "react";
//import CircleLoader from "react-spinners/CircleLoader";
import AliceCarousel from "react-alice-carousel";
import { Box } from "@mui/material";
import "./FloatingInfoBar.css";

const FloatingInfoBar = (props) => {
  const [trending, setTrending] = useState([]);

  //---------------DATA ACCESS-----------------
  React.useEffect(() => {
    setTrending(props.data);
  }, [props.data]);

  //---------------------STYLES-----------------

  //--------------organize items-------------------
  const items = props.data;

  //How will it show?
  const responsive = {
    0: {
      items: 2,
    },
    512: {
      items: 4,
    },
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(0,0,0,.4)",
      }}
    >
      {trending.length !== 0 ? (
        <AliceCarousel
          mouseTracking
          infinite
          autoPlayInterval={400}
          animationDuration={4000}
          disableDotsControls
          disableButtonsControls
          responsive={responsive}
          items={items}
          autoPlay
          animationEasingFunction="linear"
        />
      ) : (
        <div>Loading ***</div>
      )}
    </Box>
  );
};

export default FloatingInfoBar;
