import Header from "../src/components/header/Header";
import Trending from "../src/components/trending/Trending";
import Footer from "../src/components/footer/Footer";
import Auctions from "../src/components/auctions/Auctions";
import How from "../src/components/how/How";
import Featured from "../src/components/featured/Featured";
import TopCollectors from "../src/components/collectors/TopCollectors";

import dataFeatured from "../data/featured.json"
import dataTrending from "../data/trending.json";
import dataUsers from "../data/users.json";
import dataNfts from "../data/nfts.json";
import { useState, useEffect } from "react";

export default function Index() {

  const [featuredCards, setFeaturedCards] = useState([]);
  const [trendingCards, setTrendingCards] = useState([]);
  const [topUsersCollectors, setTopUsersCollectors ] = useState([]);
  const [nfts, setNfts] = useState([]);

 
  useEffect(() => { 
   setFeaturedCards(dataFeatured);
  }, []);
  useEffect(() => {
    setTrendingCards(dataTrending);
  }, []);
  useEffect(() => {
    setTopUsersCollectors(dataUsers);
  }, []);
  useEffect(() => {
    setNfts(dataNfts);
  }, []);

  return (
    <>
      <Header />
      <Featured items={featuredCards} />
      <Trending cards={trendingCards}/>
      <TopCollectors collectors={topUsersCollectors}/>
      <How items={trendingCards}/>
      <Auctions cards={nfts}/> 
      <Footer /> 
    </>)
}

