import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { ShowPanelButton, Panel } from "./style";
import { ReactComponent as MobileMenu } from "assets/icons/mobile-menu.svg";
import Footer from "components/Footer";

const SidePanel = () => {
  const [open, setOpen] = useState(false);
  const history = useHistory();

  return (
    <div>
      <ShowPanelButton className={`${open ? "buttonOpen" : "buttonClosed"}`} onClick={() => setOpen((v) => !v)}>
        <MobileMenu />
      </ShowPanelButton>

      <Panel className={open ? "open" : "closed"}>
        {/* <div className={styled.background}></div> */}
        <div className="foreground">
          <button onClick={() => history.push("/")}>
            <p>HOME</p>
          </button>

          <button onClick={() => history.push("/projects/websites")}>
            <p>PROJECTS</p>
          </button>

          <button onClick={() => history.push("/about")}>
            <p>ABOUT ME</p>
          </button>

          {/* <button onClick={() => history.push("/cart")}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="black">
              <path d="M10 19.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5zm3.5-1.5c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm1.336-5l1.977-7h-16.813l2.938 7h11.898zm4.969-10l-3.432 12h-12.597l.839 2h13.239l3.474-12h1.929l.743-2h-4.195z" />
            </svg>
            <p>CART</p>
            <span className={styled.cartQuantity}>{cart ? Object.keys(cart).length : 0}</span>
          </button> */}

          <div className="panelSocials">
            <Footer projects={false} />
          </div>
        </div>
      </Panel>
    </div>
  );
};

export default SidePanel;
