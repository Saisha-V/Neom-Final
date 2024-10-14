import React from "react";
import ReactSpeedometer from "react-d3-speedometer";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import GradientHero from "./gradient.comp/GradientHero";
import FeedbackList from "./gradient.comp/FeedbackList";

const Feedback = () => {
  return (
    <>
      <Header />
      <GradientHero />
      <ReactSpeedometer />
      <FeedbackList />
      <Footer />
    </>
  );
};

export default Feedback;
