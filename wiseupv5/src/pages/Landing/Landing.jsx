import { React, useState, useEffect } from "react";
import "react-alice-carousel/lib/alice-carousel.css";
import { Box } from "@mui/material";

// components
import TopSection from "./TopSection/TopSection";
//import LowerSection from "./LowerSection/LowerSection";
import Card from "../Landing/TopSection/Card";

const Landing = () => {
  const [cryptoData, setCryptoData] = useState([]);
  const [popularCryptoData, setPopularCryptoData] = useState([]);
  const [cryptoNews, setCryptoNews] = useState([]);

  useEffect(() => {
    async function getCoinPrices(coins) {
      let data = [];
      for (const element of coins) {
        const d = await fetch(`/landing/indivisual_coin/${element}`).then(
          (res) => res.json()
        );
        data.push(d);
      }
      return data;
    }

    const createCardArray = async (cryptodata) => {
      const CryptoBarData = cryptodata.map((item, i) => {
        // console.log("item: ", item);
        return (
          <>
            {item.market_data ? (
              <Card
                key={item.id}
                price={item.market_data.current_price.usd}
                name={item.name}
                thepic={item.image.small}
              />
            ) : (
              <><Card name={item.name}/>
            </>
            )}
          </>
        );
            })
      return CryptoBarData;
    }

    const fetchPopularCoins = async () => {
      // 1. Get trending 7
      const popularCoins = await fetch(`/landing/trendingEight`, {}).then(
        (response) => response.json()
      );

      // 2. get coin id for access to its info later
      const d = [];
      popularCoins.forEach((item) => {
        let id = item.item.id;
        d.push(id);
      });

      // 3. get coin prices based on ids collected
      let prices = [];
      prices = await getCoinPrices(d);
      console.log("PRICES: ", prices);

      
      return await createCardArray(prices);
    };

    const fetchCryptoNews = async () => {
      const theNews = await fetch(`/landing/cryptoNews`).then((res) =>
        res.json()
      );
      console.log("TheNews: ", theNews);
      // console.log("front end news: ", theNews.json());
      return theNews;
    };

    const fetchLandingData = async () => {
      const coins = [
        "bitcoin",
        "ethereum",
        "tether",
        "dogecoin",
        "matic-network",
      ];

      setCryptoData(await getCoinPrices(coins));

      setPopularCryptoData(await fetchPopularCoins());

      setCryptoNews(await fetchCryptoNews());
    };

    // Get all data for landing page
      fetchLandingData();

  }, []);

  return (
    <Box
      sx={{
        position: "relative",
        zIndex: "1",
        width: "100%",
        height: "95%", // 5vh for navbar so 95 for this
        display: "flex",
        flexDirection: "column",
        alignContent: "center",
        justifyContent: "space-around",
        // text-shadow: 0.1em 0.1em 0.15em rgb(185, 242, 255)
        backgroundColor: "rgba(0, 0, 0, .4)",
      }}
    >
      <Box
        sx={{
          position: "relative",
          height: "100%",
          width: "100%",
        }}
      >
        {
          cryptoData && popularCryptoData && cryptoNews ? 
          <TopSection
          data={cryptoData}
          popularCryptoData={popularCryptoData}
          cryptoNewsData={cryptoNews}
        />
        :
          <div>LOADING!!!!</div>
        }
      </Box>
      {/* <Box sx={{ position: "relative", height: "50%", width: "100%" }}>
          <LowerSection />
        </Box> */}
    </Box>
  );
};

export default Landing;
