import React from "react";
import styles from "./RightMenuItem.css";

export const RightMenuItem = ({
  description,
  button1,
  button2,
  icon1,
  icon2,
  line1,
  line2,
}) => {
  return (
    <div className="box">
      <h1
        style={{
          fontFamily: "avenir heavy",
          fontSize: 20,
          marginBottom: 20,
          marginLeft: 10,
        }}
      >
        Trial another Bootcamp
      </h1>
      {icon1 ? (
        <div style={{ display: "flex", alignItems: "center" }}>
          <p
            style={{
              fontSize: 36,
              fontFamily: "avenir heavy",
              color: "#E75625",
              marginBottom: 0,
            }}
          >
            {icon1}
          </p>
          <p style={{ fontSize: 16, marginLeft: 20 }}>{line1}</p>
        </div>
      ) : null}
      {icon2 ? (
        <div style={{ display: "flex", alignItems: "center" }}>
          <p
            style={{
              fontSize: 36,
              fontFamily: "avenir heavy",
              color: "#E75625",
              marginBottom: 0,
            }}
          >
            {icon2}
          </p>
          <p style={{ fontSize: 16, marginLeft: 20 }}>{line2}</p>
        </div>
      ) : null}

      <p style={{ fontSize: 16, margin: 10 }}>{description}</p>
      {button1 ? <button className="buttonTypeThree">{button1}</button> : null}

      {button2 ? <button className="buttonTypeThree">{button2}</button> : null}
    </div>
  );
};
