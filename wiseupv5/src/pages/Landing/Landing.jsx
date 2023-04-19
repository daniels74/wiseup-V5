import { React, useState, useEffect } from "react";
import "react-alice-carousel/lib/alice-carousel.css";
import { Box } from "@mui/material";

// components
import TopSection from "./TopSection/TopSection";
//import LowerSection from "./LowerSection/LowerSection";

const Landing = () => {
  const [cryptoData, setCryptoData] = useState([]);
  const [popularCryptoData, setPopularCryptoData] = useState();
  const [cryptoNews, setCryptoNews] = useState([]);

  useEffect(() => {
    const coins = [
      "bitcoin",
      "ethereum",
      "tether",
      "dogecoin",
      "matic-network",
    ];

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

    const createhtmlArray = (arr) => {
      const htmlArray = arr.map(function (element, i) {
        return (
          <div key={i}>
            {element.name} : {element.market_data.current_price.usd}
          </div>
        );
      });
      return htmlArray;
      // console.log("CryptoData: ", cryptoData);
    };

    const fetchPopularCoins = async () => {
      // 1. Get trending 7
      const popularCoins = await fetch(`/landing/trendingEight`, {}).then(
        (response) => response.json()
      );

      const d = [];
      popularCoins.forEach((item) => {
        let id = item.item.id;
        d.push(id);
      });

      let prices = [];
      prices = await getCoinPrices(d);

      return prices;
    };

    const fetchCryptoNews = async () => {
      const theNews = await fetch(`/landing/cryptoNews`).then((res) =>
        res.json()
      );
      console.log("TheNews: ", theNews);
      // console.log("front end news: ", theNews.json());
      return theNews;
    };

    const fetchCoins = async () => {
      const data = await getCoinPrices(coins);

      const htmlArr = await createhtmlArray(data);

      setCryptoData(htmlArr);

      const pop = await fetchPopularCoins();

      setPopularCryptoData(pop);

      const news = await fetchCryptoNews();

      setCryptoNews(news);
    }

    fetchCoins();
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
        <TopSection
          data={cryptoData}
          mostPopularCryptoBar={popularCryptoData}
          cryptoNewsData={cryptoNews}
        />
      </Box>
      {/* <Box sx={{ position: "relative", height: "50%", width: "100%" }}>
          <LowerSection />
        </Box> */}
    </Box>
  );
};

export default Landing;
