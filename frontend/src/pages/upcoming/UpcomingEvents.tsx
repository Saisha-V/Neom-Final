import React from "react";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import UpcomingMessage from "./upcoming.comp/UpcomingMessage";
import MainComponent from "./upcoming.comp/MainComponent";

const UpcomingEvents = () => {
  return (
    <>
      <Header />
      <UpcomingMessage />
      <MainComponent />
      <Footer />
    </>
  );
};

export default UpcomingEvents;
