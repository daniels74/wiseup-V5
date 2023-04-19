import React from "react";
import Marquee, { Motion, randomIntFromInterval } from "react-marquee-slider";
//import times from "lodash/times";
import "./Slider.css";
import { RiVipDiamondFill } from "react-icons/ri";
import { blue } from "@mui/material/colors";

const Slider = () => {
  const array = [
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

  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        position: "absolute",
        zIndex: "1",
      }}
    >
      <Marquee
        velocity={70}
        minScale={0.7}
        resetAfterTries={200}
        scatterRandomly
      >
        {array.map((id) => (
          <Motion
            key={id.id}
            initDeg={randomIntFromInterval(0, 360)}
            direction={"clockwise"}
            velocity={30}
            radius={50}
            backgroundColors={{
              // earth: "green",
              // solarSystem: "red",
              // buffer: "blue",
            }}
            children={
              // <img className="App-logo" src={id.img} height="50px" alt="" />
              <RiVipDiamondFill
                className="App-logo"
                size={30}
                color={blue[200]}
              />
            }
          ></Motion>
        ))}
      </Marquee>
    </div>
  );
};

export default Slider;
