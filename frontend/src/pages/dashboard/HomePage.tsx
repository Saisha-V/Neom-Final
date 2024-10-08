import React from "react";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import MapComponent from "../../components/MapComponent";
import WelcomeMessage from "../../components/messages/WelcomeMessage";
import Carousel from "./carousel.comp/Carousel";
import EventsGrid from "./rated.comp/EventsGrid";
import RatedMessage from "./rated.comp/RatedMessage";
import RecommenderMessage from "./recommender.comp/RecommenderMessage";
import RecommenderGrid from "./recommender.comp/RecommenderGrid";
import SuggestedMessage from "./sugggested.comp/SuggestedMessage";
import SuggestedCarousel from "./sugggested.comp/SuggestedCarousel";

const HomePage = () => {
  return (
    <>
      <Header />
      <WelcomeMessage />
      <Carousel />
      <SuggestedMessage />
      <SuggestedCarousel />
      <RecommenderMessage />
      <RecommenderGrid />
      <RatedMessage />
      <EventsGrid />
      <MapComponent />
      <Footer />
    </>
  );
};

export default HomePage;
