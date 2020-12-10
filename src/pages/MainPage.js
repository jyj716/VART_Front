import React from "react";

import ControlledCarousel from "./partials/ControlledCarousel";
import MainProjectList from "../components/MainProjectList/MainProjectList";

import "../css/pages.css";

const MainPage = () => {
  return (
    <div className="App">
      <header className="app-header">
        <ControlledCarousel />
      </header>
      <MainProjectList />
    </div>
  );
};
export default MainPage;
