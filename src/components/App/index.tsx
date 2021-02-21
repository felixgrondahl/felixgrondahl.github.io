import React from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import { matchPath } from "react-router";
import Home from "../../pages/Home";
import Projects from "../../pages/Projects";
import Resume from "../../pages/Resume";
import Background from "../Background";
import GlobalStyle from "../../globalStyles/global-styles";
import Nav from "../Nav";
import Footer from "../Footer";
import PgronGallery from "../../pages/ProjectPages/Websites/PgronGallery";

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <GlobalStyle />
      <Nav />

      {/* <Background grow={location.pathname === "/projects"} /> */}
      <Background grow={matchPath(location.pathname, "/projects") ? true : false} />

      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/projects" exact component={Projects} />
        <Route path="/projects/pgrongallery" component={PgronGallery} />
        <Route path="/resume" component={Resume} />
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
