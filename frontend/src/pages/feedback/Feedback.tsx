import React from "react";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import GradientHero from "./gradient.comp/GradientHero";
import FeedbackList from "./gradient.comp/FeedbackList";

const Feedback = () => {
  return (
    <>
      <Header />
      <GradientHero />
      <FeedbackList />
      <Footer />
    </>
  );
};

export default Feedback;
