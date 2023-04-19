import React from "react";
import { useState } from "react";
//import CircleLoader from "react-spinners/CircleLoader";
import AliceCarousel from "react-alice-carousel";
import { Box } from "@mui/material";

const KnowledgeCategories = (props) => {
  const [trending, setTrending] = useState([]);

  //---------------DATA ACCESS-----------------
  React.useEffect(() => {
    setTrending(props.data);
  }, [props.data]);

  //---------------------STYLES-----------------

  //--------------organize items-------------------
  // const items = trending;
  const items = trending.map((coin) => {
    // console.log("coin:", coin);
    return (
      <Box
        component="img"
        src={coin.img}
        alt=""
        sx={{
          height: {
            xs: "200px",
            sm: "300px",
            md: "500px",
            lg: "650px",
            xl: "650px",
          },
          width: {
            xs: "300px", // 0
            sm: "550px", // 600
            md: "1000px", // 900
            lg: "1200px", // 1200
            xl: "1400px", // 1536
          },
        }}
      ></Box>
    );
  });

  //How will it show?
  const responsive = {
    0: {
      items: 1,
    },
    512: {
      items: 3,
    },
  };

  return (
    <Box
      sx={{
        position: "relative",
        height: "100%",
        width: {
          xs: "345px", // 0
          sm: "550px", // 600
          md: "800px", // 900
          lg: "1100px", // 1200
          xl: "1400px", // 1536
        },
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      {trending.length !== 0 ? (
        <AliceCarousel
          mouseTracking
          infinite
          autoPlayInterval={5000}
          animationDuration={1500}
          disableDotsControls
          disableButtonsControls
          responsive={responsive}
          items={items}
          autoPlay
          autoWidth
          autoHeight
        />
      ) : (
        <div>Loading ***</div>
      )}
    </Box>
  );
};

export default KnowledgeCategories;
