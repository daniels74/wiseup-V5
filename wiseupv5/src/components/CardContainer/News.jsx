import React from "react";

// Components
import CryptoNewsCard from "../Cards/CryptoNewsCard";

const News = ({ cryptoNewsData }) => {
  // const allNews = cryptoNewsData.map((item,i) => {
  //   // console.log("news item: ", item.image);
    
  //  return (
  //   <>
  //     {
  //       item === 'undefined' ?
  //       (
  //         <CryptoNewsCard key={item.url} description={item.description} imgg={item.image}/>
  //       )
  //       :
  //       (
  //         <></>
  //       )
  //     }
  //     </>
  //  )
  // });

let allNews = [];
// GET RID OF ALL UNDIFINED ElEMENTS
  cryptoNewsData.forEach((item,i) => {
  
        if (item !== 'undefined') {
          allNews.push(<CryptoNewsCard key={item.url} item={item}/>)
        }
    
  })

  return <div>{allNews}</div>;
};

export default News;
