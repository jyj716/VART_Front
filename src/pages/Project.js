import React from "react";
import { Image } from 'react-bootstrap';

import MainProjectList from "../components/MainProjectList/MainProjectList";

import "../css/pages.css";

const Project = () => {
  return (
    <div>
      <header className="app-header">
        <Image
          className="cc-carousel-item-image"
          src={require("../images/VART_.png")}
          width="300px"
          height="200px"
          alt="First slide"
          fluid
          href="/" />
      </header>
  
      <MainProjectList />
    </div>
  );
};

export default Project;
