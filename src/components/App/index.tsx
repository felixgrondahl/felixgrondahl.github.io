import React from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import { matchPath } from "react-router";
import { useTransition } from "react-spring";
import { AnimatedRoutes } from "./style";
import Home from "../../pages/Home";
import Projects from "../../pages/Projects";
import Resume from "../../pages/Resume";
import Background from "../Background";
import GlobalStyle from "../../globalStyles/global-styles";
import Nav from "../Nav";
import Footer from "../Footer";
import PgronGallery from "../../pages/Projects/ProjectPages/Websites/PgronGallery";

function App() {
  const location = useLocation();

  const transition = useTransition(location, (location) => location.pathname, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  return (
    <div className="App">
      <GlobalStyle />
      

      {/* <Background grow={location.pathname === "/projects"} /> */}
      
      {transition.map(({ item: location, props, key }) => (
        <AnimatedRoutes key={key} style={props}>
          <Switch location={location}>
            <Route path="/" exact component={Home} />
            <Route path="/projects" exact component={Projects} />
            <Route path="/projects/pgrongallery" component={PgronGallery} />
            <Route path="/resume" component={Resume} />
          </Switch>
        </AnimatedRoutes>
      ))}
      <Nav />
      <Background grow={matchPath(location.pathname, "/projects") ? true : false} />
      <Footer />
    </div>
  );
}

export default App;
