// straight from youtube video
import { React } from "react";
import Slider from "react-slick";
import { Box } from "@mui/material";

const Slick = ({ data, profileSlick }) => {
  const settings = {
    arrows: true,
    dots: false,
    infinite: true,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    speed: 20000,
    autoplaySpeed: 0,
    cssEase: "linear",
    vertical: true,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  const settings2 = {
    arrows: false,
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 20000,
    autoplaySpeed: 0,
    cssEase: "linear",
    vertical: true,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  return (
    <Box
      sx={{
        position: "relative",
        height: "100%",
        width: "100%",
      }}
    >
      {profileSlick ? 
      (
        <Slider {...settings2}>
          {data.map((item, i) => (
            <Box key={i}>
              <Box
                sx={{
                  position: "relative",
                  backgroundColor: "black",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  // gap: "10"
                }}
              >
                <Box>
                  <img src={item.image.small} alt="" height="165" />
                </Box>
                <Box>
                  <p>{item.name}</p>
                </Box>
                <Box>
                  <p>{item.description.en}</p>
                </Box>
              </Box>
            </Box>
          ))}
        </Slider>
      )
    :
    (
      <Box sx={{ position: "relative", top: "7%" }}>
        <Slider {...settings}>
          {data.map((item, i) => (
            <Box key={i}>
              <Box
                sx={{
                  position: "relative",
                  backgroundColor: "black",
                  opacity: "0.65",
                  display: "flex",
                  flexDirection: { xs: "column", md: "row" },
                  alignItems: "center",
                  // gap: "10"
                }}
              >
                <Box>
                  <img src={item.image.small} alt="" height="165" />
                </Box>
                <Box>
                  <p>{item.name}</p>
                </Box>
                <Box>
                  <p>{item.description.en}</p>
                </Box>
              </Box>
            </Box>
          ))}
        </Slider>
      </Box>
    )}
    </Box>
  );
};

export default Slick;
