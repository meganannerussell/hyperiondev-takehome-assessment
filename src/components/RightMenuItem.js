import React from "react";
import styles from "./RightMenuItem.css";

export const RightMenuItem = ({
  title,
  titleIcon,
  description,
  button1,
  button2,
  icon1,
  icon2,
  line1,
  line2,
  border,
}) => {
  return (
    <div
      className="box"
      style={{
        borderBottomStyle: border,
        borderBottomWidth: "thin",
        borderBottomColor: "#e0e0e0",
      }}
    >
      <div style={{display:"flex"}}>
        <h1
          style={{
            fontFamily: "avenir heavy",
            fontSize: 20,
            marginBottom: 20,
            marginLeft: 10,
            // paddingBottom: 40,
            // paddingTop: 40,
          }}
        >
          {title}
        </h1>
        {titleIcon ? <img src={titleIcon} alt="icon" style={{width:25, height:25, marginLeft:10}} /> : null}
      </div>

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
      <div className="buttonContainer">
        {button1 ? (
          <button className="buttonTypeThree">{button1}</button>
        ) : null}
        {button2 ? (
          <button className="buttonTypeThree">{button2}</button>
        ) : null}
      </div>
    </div>
  );
};
