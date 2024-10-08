import React from "react";

const GradientHero = () => {
  return (
    <>
      <div className="bg-gradient-to-r from-orange-200 via-yellow-100 to-purple-200 h-96 flex">
        <div className="container ">
          <img
            src="../src/assests/images/overwhelmed.svg"
            alt="Overwhelmed emotion"
            className="mx-10 pt-10 pb-4 h-32"
          />
          <h2 className="font-ivy text-3xl mx-10">Overwhelmed experience</h2>
          <h2 className="font-ivy text-3xl mx-10 my-6">
            Your Vibe-O-Meter reading excites us too!
          </h2>
          <p className="mx-10 font-poppins ">
            We are happy too because we successfully keep you happy during this{" "}
            <br />
            visit to Sindalah City.
          </p>
        </div>
        <div className="mt-6 px-14 ">
          <img
            src="../src/assests/images/vibe-o-meter.svg"
            alt="vibeometer"
            className="h-96"
          />
        </div>
      </div>
    </>
  );
};

export default GradientHero;
