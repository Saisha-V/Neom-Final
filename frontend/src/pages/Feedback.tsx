import React from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";
import GradientHero from "../components/gradient.comp/GradientHero";
import FeedbackList from "../components/gradient.comp/FeedbackList";

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
