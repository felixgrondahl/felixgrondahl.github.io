import styled from "styled-components";

export const ShowPanelButton = styled.button`
  position: absolute;
  background: rgba(0, 0, 0, 0);
  z-index: 1001;
  border: none;
  padding: 0;
  margin: 15px 20px 0 20px;

  rect {
    transition: transform 0.3s ease-in-out;
  }

  &.buttonOpen {
    svg {
      #top { 
        transform: rotateZ(-45deg) translateY(12px);
      }
      #middle {
        opacity: 0;
        transition: opacity 0.2s ease-in-out;
      }
      #bot {
        transform: rotateZ(45deg) translateY(-12px);
      }
    }
  }

  &.buttonClosed {
    svg {
      #top {
        transform: rotateZ(0deg);
      }
      #middle {
        opacity: 1;
        transition: opacity 0.2s ease-in-out;
      }
      #bot {
        transform: rotateZ(0deg);
      }
    }
  }
`;

export const Panel = styled.div`
  transition: left 0.15s;
  position: absolute;
  width: 100vw;
  height: 100vh;
  z-index: 1000;

  &.closed {
    position: absolute;
    left: -100vw;
  }

  &.open {
    position: absolute;
    left: 0px;
  }

  .foreground {
    position: relative;
    height: 100%;
    background: radial-gradient(350.25% 100% at 49.77% 0%, rgba(0, 35, 55, 0.96) 0%, rgba(32, 18, 42, 0.96) 100%);
    box-shadow: 5px 0px 7px rgba(0, 0, 0, 0.25);
    border-radius: 0px 5px 5px 0px;

    z-index: 1;
    display: flex;
    flex-direction: column;
    justify-content: baseline;
    gap: 70px;
    padding-top: 100px;
    box-sizing: border-box;

    button {
      position: relative;
      border: none;
      width: 100%;
      font-size: 1.4em;

      background-color: rgba(0, 0, 0, 0);
      text-align: center;
      padding: 15px 0;

      p {
        width: 100%;
        height: 100%;
        margin: 0;
        letter-spacing: 0.6em;
        font-weight: 400;
      }
    }

    .panelSocials {
      position: absolute;
      // width: 100%;
      left: 0;
      right: 0;
      bottom: 20px;

      @media (max-height: 500px) {
        bottom: 0px;
      }
    }
  }
`;
