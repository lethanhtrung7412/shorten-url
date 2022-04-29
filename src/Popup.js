import React from "react";
import "./Popup.css";

const Popup = (props) => {
  return (
    <div className={`show ${props.isShowResult ? "" : "active"} `}>
      <div className="form-box">
        <h2>Your link after shorten</h2>
        <h3>{props.returnUrl}</h3>
        <div id="modal" onClick={props.handleClick} className="btn-close">
          Close
        </div>
      </div>
    </div>
  );
};

export default Popup;
