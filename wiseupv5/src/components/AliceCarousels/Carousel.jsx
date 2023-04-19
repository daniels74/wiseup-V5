import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
//import CircleLoader from "react-spinners/CircleLoader";
import AliceCarousel from "react-alice-carousel";
import { Box } from "@mui/system";

const Carousel = ({data}) => {
  const [trending, setTrending] = useState([]);

  //---------------DATA ACCESS-----------------
  React.useEffect(() => {
    setTrending(data);
  }, [data]);

  //--------------organize items-------------------
  console.log("carousel trending: ", trending);
  const items = trending.map((pack) => {
    console.log("carousel item: ", pack.props.children);
    return (
      <Link to={`/profile/${pack.props.children.user_id}`}>
        {pack.props.children.user_name}
      </Link>
    );
  });

  //How will it show?
  const responsive = {
    0: {
      items: 2,
    },
    512: {
      items: 4,
    },
  };

  return (
    <Box sx={{
      height: "100%",
      display: "flex",
      alignItems: "center",
    }}>
      {trending.length !== 0 ? (
        <AliceCarousel
          mouseTracking
          infinite
          autoPlayInterval={1000}
          animationDuration={1500}
          disableDotsControls
          disableButtonsControls
          responsive={responsive}
          items={items}
          autoPlay
        />
      ) : (
        // <CircleLoader color="#00FFCC" size={150} />
        <div> Login for access </div>
      )}
    </Box>
  );
};

export default Carousel;
