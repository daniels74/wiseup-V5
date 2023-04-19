import React from "react";
import { Box } from "@mui/material";
import { blue } from "@mui/material/colors";

//Components
import News from "../CardContainer/News";

//26324f
const ThickContainer = ({ cryptoNewsData }) => {
  return (
    <Box
      sx={{
        height: "90%",
        width: "90%",
        position: "absolute",
        top: "0",
        overflow: "hidden",
        borderRadius: "1rem",
        display: "flex",
        flexDirection: "column",
        cursor: "pointer",
        transition: "transform 200ms ease-in",
        background:
          "radial-gradient(circle, rgba(8,50,91,1) 0%, rgba(7,22,34,1) 100%)",
        transform: "scale(1.05)",
        boxShadow: "0 1px 10px grey",
        // boxShadow: "0 2px 20px black",
        borderStyle: "solid",
        borderWidth: "thin",
        borderColor: blue[500],
        overflowY: "auto",
      }}
    >
      <News cryptoNewsData={cryptoNewsData} />
    </Box>
  );
};

export default ThickContainer;
