import React from "react";
import { Box } from "@mui/material";
import { blue } from "@mui/material/colors";
//26324f
import Card from "./Card";

const ThinContainer = ({ mostPopularCryptoBar }) => {
 

  const CryptoBarData = mostPopularCryptoBar.map((item, i) => {
    // console.log("item: ", item);
    return (
      <>
      {
        item ?
        (
          <Card key={item.id} price={item.market_data.current_price.usd} name={item.name} thepic={item.image.small} />
        )
        :
        (
          <></>
        )
      }
      </>
      
    );
  });

  return (
    <Box
      sx={{
        height: "100%",
        width: {xs: "90%", lg: "50%"},
        position: "absolute",
        top: "0",
        overflow: "hidden",
        borderRadius: "1rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        cursor: "pointer",
        transition: "transform 200ms ease-in",
        background: "radial-gradient(circle, rgba(8,50,91,1) 0%, rgba(7,22,34,1) 100%)",
        transform: "scale(1.05)",
        boxShadow: "0 1px 10px grey",
        borderStyle: "solid",
        borderWidth: "thin",
        borderColor: blue[500],
      }}
    >
      {mostPopularCryptoBar ? 
      (
        <Box
        sx={{
          position: "relative",
          height: "100%",
          width: "100%",
          display: "grid",
          gridTemplateColumns: {xs: "repeat(4, 25%)", md: "repeat(4, 25%)"},
          gridTemplateRows: "repeat(2, 50%)",
          // gridRowGap: {xs: ".2rem", md: ".5rem"},
          //gridColumnGap: {xs: ".3rem",md: "2rem", lg: "4rem"},
        }}
      >
        {mostPopularCryptoBar && CryptoBarData}
 
      </Box>
      )
    :
    (
      <Box>Loading..... </Box>
    )
      }
    </Box>
  );
};

export default ThinContainer;
