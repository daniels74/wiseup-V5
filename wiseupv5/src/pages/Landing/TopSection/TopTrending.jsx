import React from "react";
import { Box } from "@mui/material";
//import Card from "./Card";

const TopTrending = ({ cryptodata }) => {

  //const [dataState, setDataState] = React.useState([]);

  // if(dataState.length === 0) {
  //   setDataState(cryptodata);
  // }

//  React.useEffect(() => {
//   const CryptoBarData = cryptodata.map((item, i) => {
//     // console.log("item: ", item);
//     return (
//       <>
//         {item.market_data ? (
//           <Card
//             key={item.id}
//             price={item.market_data.current_price.usd}
//             name={item.name}
//             thepic={item.image.small}
//           />
//         ) : (
//           <><Card name={item.name}/>
//         </>
//         )}
//       </>
//     );
//   });

//   setDataState(CryptoBarData);

//  }, [cryptodata]);

  return (
    <>
      {cryptodata ? (
        <Box
          sx={{
            position: "relative",
            height: "100%",
            width: "100%",
            display: "grid",
            gridTemplateColumns: { xs: "repeat(4, 25%)", md: "repeat(4, 25%)" },
            gridTemplateRows: "repeat(2, 50%)",
            // gridRowGap: {xs: ".2rem", md: ".5rem"},
            //gridColumnGap: {xs: ".3rem",md: "2rem", lg: "4rem"},
          }}
        >
          {/* {dataState} */}
          { cryptodata }
        </Box>
      ) : (
        <Box>Loading..... </Box>
      )}
    </>
  );
};

export default TopTrending;
