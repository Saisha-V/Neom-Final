import React from "react";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import RemoveGrid from "./favorites.remove.comp/RemoveGrid";
import RecommenderGrid from "../dashboard/recommender.comp/RecommenderGrid";
import RecommenderFavMessage from "../dashboard/recommender.comp/RecommenderFavMessage";
import RemoveMessage from "./favorites.remove.comp/RemoveMessage";

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
