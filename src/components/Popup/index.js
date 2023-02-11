import { styled } from "@linaria/react";
import React from "react";

const Overlay = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.7);
  transition: opacity 500ms;
  z-index: 999;
`;

const StyledPopup = styled.div`
  margin: 70px auto;
  padding: 20px;
  background: #fff;
  border-radius: 5px;
  width: 30%;
  position: relative;
  transition: all 5s ease-in-out;
`;

const Popup = ({ children, open, onClose }) => {
  if (open)
    return (
      <Overlay
        onClick={(e) => {
          onClose();
        }}
      >
        <StyledPopup onClick={(e) => e.stopPropagation()}>
          {children}
        </StyledPopup>
      </Overlay>
    );
  return <></>;
};

export default Popup;
