import React from "react";
import { Box } from "@mui/material";
import { blue } from "@mui/material/colors";

const ThinContainer = ({ Compo, cryptodata, Loader }) => {
  return (
    <Box
      sx={{
        height: "100%",
        width: { xs: "90%", lg: "50%" },
        position: "absolute",
        top: "0",
        overflow: "hidden",
        borderRadius: "1rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        transition: "transform 200ms ease-in",
        background:
          "radial-gradient(circle, rgba(8,50,91,1) 0%, rgba(7,22,34,1) 100%)",
        transform: "scale(1.05)",
        boxShadow: "0 1px 10px grey",
        borderStyle: "solid",
        borderWidth: "thin",
        borderColor: blue[500],
      }}
    >
      {cryptodata ? <Compo cryptodata={cryptodata} /> : <Loader color="#3663d6"/> }
    </Box>
  );
};

export default ThinContainer;
