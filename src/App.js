import React from "react";
import { Route } from "react-router-dom";

import MainPage from "./pages/MainPage";
import projectItem from "./pages/ProjectItem";
import Project from "./pages/Project";
import About from "./pages/About";
import Announcement from "./pages/Announcement";
import Service from "./pages/Service";
import DisclosureCreate from "./pages/DisclosureCreate";
import projectItemCreate from "./pages/ProjectItemCreate";
import CompanyLogin from "./pages/CompanyLogin";
import DisclosureItem from "./pages/DisclosureItem"
import Newdisclosure from "./pages/Newdisclosure";
import DisclosureByTokenname from './pages/DisclosureByTokenname'
import Join from './pages/join'
import NomalJoin from './pages/nomalJoin'
import CompanyJoin from './pages/CompanyJoin'
import Faq from "./pages/Faq";
import Navbar from "./pages/partials/Navbar";

const App = () => {
  return (
    <div>
      <Navbar />
      <div>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/project" component={Project} />
        <Route exact path="/project/:id" component={projectItem} />
        <Route exact path="/disclosure/:no" component={DisclosureItem} />
        <Route exact path="/disclosurebytokenname/:tokenName" component={DisclosureByTokenname} />
        <Route exact path="/About" component={About} />
        <Route exact path="/Join" component={Join} />
        <Route exact path="/NomalJoin" component={NomalJoin} />
        <Route exact path="/CompanyJoin" component={CompanyJoin} />
        <Route exact path="/Announcement" component={Announcement} />
        <Route exact path="/DisclosureCreate" component={DisclosureCreate} />
        <Route exact path="/Service" component={Service} />
        <Route exact path="/projectItemCreate" component={projectItemCreate} />
        <Route exact path="/CompanyLogin" component={CompanyLogin} />
        <Route exact path="/Newdisclosure" component={Newdisclosure} />
        <Route exact path="/Faq" component={Faq} />
      </div>
    </div>
  );
};

export default App;
