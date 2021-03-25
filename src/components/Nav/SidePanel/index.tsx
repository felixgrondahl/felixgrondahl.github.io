import React, { useState } from "react";
// import { useHistory } from "react-router-dom";
import { ShowPanelButton, Panel, Wrapper } from "./style";
import { ReactComponent as MobileMenu } from "assets/icons/mobile-menu.svg";
import Footer from "components/Footer";
import { StyledNavLink } from "globalStyles/link-styles";

const SidePanel = () => {
  const [open, setOpen] = useState(false);
  // const history = useHistory();

  return (
    <Wrapper>
      <ShowPanelButton className={`${open ? "buttonOpen" : "buttonClosed"}`} onClick={() => setOpen((v) => !v)}>
        <MobileMenu />
      </ShowPanelButton>

      <Panel className={open ? "open" : "closed"}>
        <div className="foreground">
          <StyledNavLink to="/" exact onClick={() => setOpen((v) => !v)}>
            HOME
          </StyledNavLink>
          <StyledNavLink to="/projects/websites" onClick={() => setOpen((v) => !v)}>
            PROJECTS
          </StyledNavLink>
          <StyledNavLink to="/about" onClick={() => setOpen((v) => !v)}>
            ABOUT ME
          </StyledNavLink>

          <div className="panelSocials">
            <Footer projects={false} />
          </div>
        </div>
      </Panel>
    </Wrapper>
  );
};

export default SidePanel;
