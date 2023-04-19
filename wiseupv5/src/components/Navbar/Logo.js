import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
// react icons
import { RiVipDiamondFill } from "react-icons/ri";
import { blue } from "@mui/material/colors";
import AnimationChain from "../AnimationChain/AnimationChain";

const Logo = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        color: "white",
        position: "relative",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: "1rem",
      }}
    >
      <AnimationChain diamond={<RiVipDiamondFill size={35} color={blue[500]} />} />

      <Typography
        sx={{
          // ml: 1,
          // color: (theme) => theme.palette.secondary.main,
          fontSize: { sm: "20px", md: "28px", lg: "32px" },
          display: { xs: "none", sm: "flex" },
          fontWeight: "bold",
          textShadow: "0.1em 0.1em 0.15em rgb(185, 242, 255)",
        }}
        component="h3"
      >
        Wise Up
      </Typography>
    </Box>
  );
};

export default Logo;
