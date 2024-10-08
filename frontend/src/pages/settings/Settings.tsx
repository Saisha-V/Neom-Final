import React from "react";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import SettingsToggle from "./settings.comp/SettingsToggle";

const Settings = () => {
  return (
    <>
      <Header />
      <SettingsToggle />
      <Footer />
    </>
  );
};

export default Settings;
