import React from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";
import MapComponent from "../components/MapComponent";
import WelcomeMessage from "../components/messages/WelcomeMessage";
import Carousel from "../components/carousel.comp/Carousel";
import EventsGrid from "../components/rated.comp/EventsGrid";
import RatedMessage from "../components/rated.comp/RatedMessage";
import RecommenderMessage from "../components/recommender.comp/RecommenderMessage";
import RecommenderGrid from "../components/recommender.comp/RecommenderGrid";
import SuggestedMessage from "../components/sugggested.comp/SuggestedMessage";
import SuggestedCarousel from "../components/sugggested.comp/SuggestedCarousel";

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
