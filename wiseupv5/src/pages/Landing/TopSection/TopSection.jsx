import React from "react";
//-------------Styless--------------------
import "./TopSection.css";
import { Box } from "@mui/material";
//------------Components------------------
import DiamondsMarquee from "../../../components/Marquee/Diamonds/DiamondsMarquee";
import FloatingInfoBar from "../../../components/AliceCarousels/FloatingInfoBar";
import TopTrendingContainer from "../../../components/Containers/TitleContainers/TopTrendingContainer";
import PropagateLoader from "react-spinners/PropagateLoader";
import GridLoader from "react-spinners/GridLoader";
import ThickContainer from "../../../components/Containers/ThickContainer";
import News from "./CardContainer/News";
import ThinContainer from "../../../components/Containers/ThinContainer";
import TopTrending from "./TopTrending";

const TopSection = ({ data, popularCryptoData, cryptoNewsData }) => {
  const MarqueeImages_LargeScreen = [
    { id: 1, img: "./logo192.png" },
    { id: 2, img: "./logo192.png" },
    { id: 3, img: "./logo192.png" },
    { id: 4, img: "./logo192.png" },
    { id: 5, img: "./logo192.png" },
    { id: 6, img: "./logo192.png" },
    { id: 7, img: "./logo192.png" },
    { id: 8, img: "./logo192.png" },
    { id: 9, img: "./logo192.png" },
    { id: 10, img: "./logo192.png" },
    { id: 11, img: "./logo192.png" },
    { id: 12, img: "./logo192.png" },
  ];

  const MarqueeImages_SmallScreen = [
    { id: 1, img: "./logo192.png" },
    { id: 2, img: "./logo192.png" },
    { id: 3, img: "./logo192.png" },
    { id: 4, img: "./logo192.png" },
    { id: 5, img: "./logo192.png" },
    { id: 6, img: "./logo192.png" },
    { id: 7, img: "./logo192.png" },
    { id: 8, img: "./logo192.png" },
    { id: 9, img: "./logo192.png" },
  ];

  return (
    <Box
      sx={{
        position: "relative",
        height: "100%",
        width: "100%",
        backgroundImage: `url(${require("../../../images/space7.jpg")})`,
        backgroundSize: "cover",
        zIndex: "0",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* LARGE DiamondsMarquee */}
      <Box
        sx={{
          position: "absolute",
          height: "100%",
          width: "100%",
          zIndex: "0",
          display: { xs: "none", md: "flex" },
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <DiamondsMarquee array={MarqueeImages_LargeScreen} /> */
      </Box>

      {/* SMALL DiamondsMarquee */}
      <Box
        sx={{
          position: "absolute",
          height: "100%",
          width: "100%",
          zIndex: "0",
          display: { xs: "flex", md: "none" },
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <DiamondsMarquee array={MarqueeImages_SmallScreen} />
      </Box>

      {/* FloatitingInfoBar */}
      <Box
        sx={{
          position: "relative",
          zIndex: "1",
          height: "1.5%",
        }}
      >
        <FloatingInfoBar data={data} />
      </Box>

      {/* Main Page Layout */}
      <Box
        sx={{
          position: "relative",
          height: "100%",
          width: "100",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
        }}
      >
        {/* Top 7 Cryptos Space */}
        <Box
          sx={{
            zIndex: "1",
            position: "relative",
            height: "35%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
          }}
        >
          {/* Title Box */}
          <Box
            sx={{
              position: "relative",
              zIndex: "2",
              height: "15%",
              //width: {xs: "80%", md: "25%"},
              width: "100%",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                position: "relative",
                zIndex: "2",
                height: "100%",
                width: { xs: "50%", sm: "40%", md: "30%" },
              }}
            >
              <TopTrendingContainer />
            </Box>
          </Box>
          <Box
            sx={{
              position: "relative",
              zIndex: "1",
              height: "70%",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {popularCryptoData ? (
              <ThinContainer
                Compo={TopTrending}
                cryptodata={popularCryptoData}
              />
            ) : (
              <ThinContainer Loader={PropagateLoader} />
            )}
          </Box>
        </Box>
        {/* The News Space */}
        <Box
          sx={{
            position: "relative",
            zIndex: "1",
            height: "55%",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {cryptoNewsData ? (
            <ThickContainer Compo={News} cryptoNewsData={cryptoNewsData} />
          ) : (
            <ThickContainer Loader={GridLoader} />
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default TopSection;
