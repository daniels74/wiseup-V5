import React from "react";
import { Box } from "@mui/material";
import { blue } from "@mui/material/colors";

const TopTrendingContainer = () => {
  return (
    <Box
      sx={{
        height: "100%",
        width: "100%",
        position: "absolute",
        top: "0",
        overflow: "hidden",
        borderRadius: "1rem",
        cursor: "pointer",
        transition: "transform 200ms ease-in",
        // backgroundColor: "rgb(10, 26, 52)",
        //background: "rgb(8,50,91)",
        background: "radial-gradient(circle, rgba(8,50,91,1) 0%, rgba(7,22,34,1) 100%)",
        transform: "scale(1.05)",
        boxShadow: "0 2px 20px grey",
        // boxShadow: "0 2px 20px black",
        borderStyle: "solid",
        borderWidth: "thin",
        borderColor: blue[500],
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        component="h1"
        sx={{
          color: "lightblue",
        }}
      >
        Top Trending 7
      </Box>
    </Box>
  );
};

export default TopTrendingContainer;
