import React from "react";
import styles from "./TrialBlock.css";
import icon from "../assets/beginner-php-fundamentals@3x.png";
import arrowIcon from "../assets/arrowIcon.png";
import tickIcon from "../assets/tickIcon.png";

export const TrialBlock = () => {
  return (
    <div className="card">
      <div className="cardHeader">
        <div>
          <img
            src={icon}
            alt="icon"
            className= "icon"
           
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <h1 className="cardHeading" >
            Web Development Bootcamp Trial
          </h1>
          <button className="button">
            Continue your trial
            <span>
              <img
                src={arrowIcon}
                alt="icon"
                style={{ width: 6, marginLeft: 10 }}
              />
            </span>
          </button>
        </div>
      </div>
      <div style={{ paddingTop: 35 }}>
        <h2
          style={{ fontFamily: "avenir heavy", fontSize: 20, marginBottom: 30 }}
        >
          Your progress
          <span style={{ fontFamily: "avenir", fontWeight: 100 }}>
            (1/4 complete)
          </span>
        </h2>
        <div className="buttonsContainer">
          <div>
            <div className="buttonContainer">
              <button
                style={{ backgroundColor: "#E75625", color: "white" }}
                className="buttonTypeTwo"
              >
                Industry knowledge 1
                <span>
                  <img
                    src={tickIcon}
                    alt="icon"
                    style={{ width: 12, marginLeft: 10 }}
                  />
                </span>
              </button>
            </div>
            <div className="buttonContainer">
              <button className="buttonTypeTwo">Industry knowledge 2</button>
            </div>
          </div>
          <div>
            <div className="buttonContainer">
              <button className="buttonTypeTwo">HTML Basics</button>
            </div>
            <div className="buttonContainer">
              <button className="buttonTypeTwo">Your First PHP Script</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
