// straight from youtube video
import React from "react";
import "./Slicker.css";
import Slider from "react-slick";

const Slicker = ({ data }) => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
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
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="App">
      <Slider {...settings}>
        {data.map((item,i) => (
          <div key={i} className="card">
            <div className="card-top">
              <img src={item.img} alt="" />
              <h1>Title</h1>
            </div>
            <div className="card-bottom">Hello</div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Slicker;
