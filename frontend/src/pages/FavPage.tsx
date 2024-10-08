import React from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";
import RemoveGrid from "../components/favorites.remove.comp/RemoveGrid";
import RecommenderGrid from "../components/recommender.comp/RecommenderGrid";
import RecommenderFavMessage from "../components/recommender.comp/RecommenderFavMessage";
import RemoveMessage from "../components/favorites.remove.comp/RemoveMessage";

const FavPage = () => {
  return (
    <>
      <Header />
      <RemoveMessage />
      <RemoveGrid />
      <RecommenderFavMessage />
      <RecommenderGrid />
      <Footer />
    </>
  );
};

export default FavPage;
