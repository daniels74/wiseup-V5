import React from "react";
import KnowledgeCategories from "../../../components/AliceCarousels/KnowledgeCategories";
import { Box } from "@mui/material";

const LowerSection = () => {
  const myArray = [
    { id: 1, name: "Daniel", img: "./images/landscaping.jpg" },
    { id: 2, name: "Daniel", img: "./images/landscaping.jpg" },
    { id: 3, name: "Daniel", img: "./images/landscaping.jpg" },
    { id: 4, name: "Daniel", img: "./images/landscaping.jpg" },
    { id: 5, name: "Daniel", img: "./images/landscaping.jpg" },
    { id: 6, name: "Daniel", img: "./images/landscaping.jpg" },
  ];

  return (
    <Box
      sx={{
        backgroundColor: "#000012", // red
        position: "relative",
        zIndex: "1",
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <KnowledgeCategories data={myArray} />
    </Box>
  );
};

export default LowerSection;
