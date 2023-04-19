import React from "react";
import Marquee, { Motion, randomIntFromInterval } from "react-marquee-slider";
//import times from "lodash/times";
import "./DiamondsMarquee.css";
import { RiVipDiamondFill } from "react-icons/ri";
import { blue } from "@mui/material/colors";

const DiamondsMarquee = ({ array }) => {
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        position: "relative",
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
            backgroundColors={
              {
                // earth: "green",
                // solarSystem: "red",
                // buffer: "blue",
              }
            }
            children={
              <img key={id.id} className="App-logo" src={id.img} alt="" />
              // <RiVipDiamondFill
              //   className="App-logo"
              //   size={30}
              //   color={blue[200]}
              // />
            }
          ></Motion>
        ))}
      </Marquee>
    </div>
  );
};

export default DiamondsMarquee;
