const router = require("express").Router();
const axios = require("axios");
// Get Popular Coins -------------------------------

router.get("/trendingEight", async (req, res) => {
  try {
    let trendingCoins = [];

    trendingCoins = await fetch(
      `https://api.coingecko.com/api/v3/search/trending`,
      {
        credentials: "include",
      }
    ).then((res) => res.json());

    let promises = trendingCoins.coins.map((item) => {
      return item;
    });

    // Wait for all the data
    Promise.all(promises);

    return res.send(promises);
  } catch (err) {
    console.log(err.message);
  }
});

// Get indivisual coin -------------------------------
router.get("/indivisual_coin/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const coin = await fetch(`https://api.coingecko.com/api/v3/coins/${id}`, {
      credentials: "include",
    }).then((res) => res.json());

    // console.log(coin);
    return res.send(coin);
  } catch (err) {
    console.log(err.message);
  }
});

// Get crypto News
router.get("/cryptoNews", async (req, res) => {

  const options = {
    method: 'GET',
    url: 'https://bing-news-search1.p.rapidapi.com/news/search',
    params: {
      q: 'Cryptocurrency',
      safeSearch: 'Off',
      textFormat: 'Raw',
      freshness: 'Day',
      count: '10'
    },
    headers: {
      'X-BingApis-SDK': 'true',
      'X-RapidAPI-Key': '6bf543092cmsh14690d689ab4acfp1a50dejsn9480b200ffcc',
      'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
    }
  }

  await axios.request(options).then(function (response) {
    console.log(response.data.value);
    let data = response.data.value;

    let promises = data.map((item) => {
      return item
    });

    // Wait for all the data
    Promise.all(promises);
   
     return res.send(promises);
  }).catch(function (error) {
    console.error(error);
  });
  // try {
  //   d = await fetch(options);
  //   return res.send(d);
  // } catch (err) {
  //   console.log(err.message);
  // }
});

module.exports = router;
