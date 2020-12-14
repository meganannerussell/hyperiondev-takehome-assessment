import React from "react";
import styles from "./TrialBlock.css";
import icon from "../assets/beginner-php-fundamentals@3x.png";

export const TrialBlock = () => {
  return (
    <div className="card">
      <div className="cardHeader">
        <div>
          <img
            src={icon}
            alt="icon"
            style={{ width: 120, marginTop: 6, marginRight: 40 }}
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <p style={{ fontSize: 25, marginBottom: 0 }}>
            Web Development Bootcamp Trial
          </p>
          <button className="button">Continue your trial</button>
        </div>
      </div>
      <div style={{paddingTop: 35}}>
        <h1 style={{ fontFamily: "avenir heavy", fontSize: 20, marginBottom:30 }}>
          Your progress
          <span style={{ fontFamily: "avenir", fontWeight: 100 }}>
            (1/4 complete)
          </span>
        </h1>
        <div className="buttonContainer" >
          <div  style={{paddingRight:10, }}>
            <button className="buttonTypeTwo" style={{marginBottom: 10}}>Industry knowledge 1</button>
            <button className="buttonTypeTwo">HTML Basics</button>
          </div>
          <div >
            <button className="buttonTypeTwo" style={{marginBottom: 10}}>Industry knowledge 2</button>
            <button className="buttonTypeTwo">Your First PHP Script</button>
          </div>
        </div>
      </div>
    </div>
  );
};
