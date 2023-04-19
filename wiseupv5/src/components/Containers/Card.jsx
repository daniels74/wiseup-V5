import React from "react";
import { Box } from "@mui/material";
//import { blue } from "@mui/material/colors";

const Card = ({ price, name, thepic }) => {
  // if (i === 0) {
  //   return (
  //     <Box
  //       key={key}
  //       color={blue[500]}
  //       sx={{
  //         gridRowStart: "1",
  //         gridRowEnd: "3",
  //         display: "flex",
  //         flexDirection: "column",
  //         alignItems: "center",
  //         justifyContent: "center",
  //         position: "relative",
  //         height: "60%",
  //         width: "auto",
  //         top: { xs: "2rem", md: "4rem", lg: "4rem" },
  //         left: { xs: ".2rem", md: "1rem" },
  //         borderRadius: "1rem",
  //         backgroundColor: "#266639",
  //         color: "lightblue",
  //         fontSize: { xs: ".8rem", lg: "1.2rem" },
  //         borderStyle: "solid",
  //         borderWidth: "thin",
  //         borderColor: blue[500],
  //         boxShadow: "0 2px 20px white",
  //       }}
  //     >
  //       <Box
  //         sx={{
  //           height: "100%",
  //           width: "100%",
  //           borderRadius: "1rem",
  //           //background: "rgb(9,42,12)",
  //           background:
  //             "radial-gradient(circle, rgba(9,42,12,1) 0%, rgba(7,22,34,1) 100%)",
  //           display: "flex",
  //           flexDirection: "column",
  //           alignItems: "center",
  //           justifyContent: "center",
  //           fontSize: "1rem",
  //         }}
  //       >
  //         <Box component="img" height="40%" src={thepic}></Box>
  //         <Box>{name}</Box>
  //         <Box>${price}</Box>
  //       </Box>
  //     </Box>
  //   );
  // } else {
  //   return (
  //     <Box
  //       key={key}
  //       sx={{
  //         backgroundColor: "#266639",
  //         color: "lightblue",
  //         borderStyle: "solid",
  //         borderWidth: "thin",
  //         borderColor: "#40965a",
  //         boxShadow: "0 2px 20px green",
  //         display: "flex",
  //         flexDirection: "column",
  //         alignItems: "center",
  //         justifyContent: "center",
  //         height: "auto",
  //         width: "100%",
  //         minHeight: "80%",

  //         position: "relative",
  //         top: { xs: ".5rem", md: "8%", lg: "2rem" },
  //         left: { xs: ".3rem", md: ".5rem" },
  //         borderRadius: "1rem",
  //         fontSize: { xs: ".8rem", lg: "1.2rem" },
  //       }}
  //     >
  //       <Box
  //         sx={{
  //           height: "100%",
  //           width: "100%",
  //           borderRadius: "1rem",
  //           //background: "rgb(9,42,12)",
  //           background:
  //             "radial-gradient(circle, rgba(9,42,12,1) 0%, rgba(7,22,34,1) 100%)",
  //           display: "flex",
  //           flexDirection: "column",
  //           alignItems: "center",
  //           justifyContent: "center",
  //         }}
  //       >
  //         <Box
  //           component="img"
  //           height={{ xs: "1.5rem", md: "4rem" }}
  //           src={thepic}
  //         ></Box>
  //         <Box>{name}</Box>
  //         <Box>${price}</Box>
  //       </Box>
  //     </Box>
  //   );
  // }
  return (
    <Box
      sx={{
        // key: {key},
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          backgroundColor: "#266639",
          color: "lightblue",
          borderStyle: "solid",
          borderWidth: "thin",
          borderColor: "#40965a",
          boxShadow: "0 1px 7px green",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "90%",
          width: "90%",

          position: "relative",
          // top: { xs: ".5rem", md: "8%", lg: "2rem" },
          // left: { xs: ".3rem", md: ".5rem" },
          borderRadius: "1rem",
          fontSize: ".8rem"
        }}
      >
        <Box
          sx={{
            height: "100%",
            width: "100%",
            borderRadius: "1rem",
            background:
              "radial-gradient(circle, rgba(9,42,12,1) 0%, rgba(7,22,34,1) 100%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            component="img"
            height={{ xs: "1.5rem", md: "2rem" }}
            src={thepic}
          ></Box>
          <Box>{name}</Box>
          <Box>${price}</Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Card;
