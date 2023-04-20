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
    const createhtmlArray = (arr) => {
      const htmlArray = arr.map(function (element, i) {
        return (
          <div key={i}>
            {element.name} : {element.market_data.current_price.usd}
          </div>
        );
      });
      setTrending(htmlArray);
    };

    createhtmlArray(props.data);
  }, [props.data]);

  // Breakpoints
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
          items={trending}
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
