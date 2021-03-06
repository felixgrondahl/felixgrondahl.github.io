import React from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import { matchPath } from "react-router";
import { useTransition } from "react-spring";
import { AnimatedRoutes } from "./style";
import Home from "../../pages/Home";
import Websites from "../../pages/Projects/ProjectPages/Websites";
import Games from "pages/Projects/ProjectPages/Games";
import Misc from "pages/Projects/ProjectPages/Misc";
import AboutMe from "../../pages/AboutMe";
import Background from "../Background";
import GlobalStyle from "../../globalStyles/global-styles";
import Nav from "../Nav";
import Footer from "../Footer";
import PgronGallery from "../../pages/Projects/ProjectPages/Websites/PgronGallery";
import ProcAnim from "pages/Projects/ProjectPages/Misc/ProcAnim";
import Tube from "pages/Projects/ProjectPages/Games/Tube";
import BirdGame from "pages/Projects/ProjectPages/Games/BirdGame";
import PgronShop from "pages/Projects/ProjectPages/Websites/PgronShop";
import { Helmet } from "react-helmet";
import OGImage from "assets/images/ogimage.jpg";

function App() {
  const location = useLocation();

  const transition = useTransition(location, (location) => location.pathname, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  return (
    <div className="App">
      <Helmet>
        <title>Felix Gröndahl | Portfolio</title>
        <meta name="description" content="Felix Gröndahl frontend web developer portfolio." />
        <link rel="canonical" href="https://felixgrondahl.github.io" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Felix Gröndahl Portfolio" />
        <meta property="og:url" content="https://felixgrondahl.github.io" />
        <meta property="og:title" content="Felix Gröndahl Portfolio" />
        <meta property="og:description" content="Felix Gröndahl - frontend web developer." />
        <meta property="og:image" content={OGImage} />
        <meta property="og:image:alt" content="Felix Gröndahl Portfolio og-image" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
      </Helmet>

      <GlobalStyle />

      {/* <Background grow={location.pathname === "/projects"} /> */}
      <Footer projects={matchPath(location.pathname, { path: ["/projects", "/about"] }) ? true : false} />

      {transition.map(({ item: location, props, key }) => (
        <AnimatedRoutes key={key} style={props}>
                
          <Switch location={location}>
            <Route path="/" exact component={Home} />
            <Route path="/projects/websites" exact component={Websites} />
            <Route path="/projects/games" exact component={Games} />
            <Route path="/projects/misc" exact component={Misc} />

            <Route path="/projects/websites/pgrongallery" component={PgronGallery} />
            <Route path="/projects/websites/pgronshop" component={PgronShop} />

            <Route path="/projects/games/tube" component={Tube} />
            <Route path="/projects/games/bird" component={BirdGame} />

            <Route path="/projects/misc/proceduralanimation" component={ProcAnim} />

            <Route path="/about" component={AboutMe} />
          </Switch>
        </AnimatedRoutes>
      ))}
      <Nav projects={matchPath(location.pathname, "/projects") ? true : false} />
      
      {/* The background ball's scale and color needs to be set based on what path we are in. */}
      <Background
        scale={
          matchPath(location.pathname, { path: "/projects/:projtype", exact: true })
            ? 1.9
            : matchPath(location.pathname, {
                path: ["/projects/websites/:projid", "/projects/games/:projid", "/projects/misc/:projid"],
                exact: true,
              })
            ? 2.4
            : 1
        }
        color={
          matchPath(location.pathname, {
            path: ["/projects/websites/:projid", "/projects/games/:projid", "/projects/misc/:projid"],
            exact: true,
          })
            ? "#D6AA68"
            : "#2FC4F3"
        }
      />

    </div>
  );
}

export default App;
