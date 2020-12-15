import React from "react";
import "./RightMenuItem.css";

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
      }}
    >
      <div style={{ display: "flex" }}>
        <h1
          style={{
            fontFamily: "avenir-heavy",
            fontSize: 20,
            marginBottom: 20,
          }}
        >
          {title}
        </h1>
        {titleIcon ? (
          <img
            src={titleIcon}
            alt="icon"
            style={{ width: 25, height: 25, marginLeft: 10 }}
          />
        ) : null}
      </div>

      {icon1 ? (
        <div style={{ display: "flex", alignItems: "center", marginBottom: -8 }}>
          <p className="numberIcon">{icon1}</p>
          <p className="text">{line1}</p>
        </div>
      ) : null}
      {icon2 ? (
        <div
          style={{ display: "flex", alignItems: "center", marginBottom: -20 }}
        >
          <p className="numberIcon">{icon2}</p>
          <p className="text">{line2}</p>
        </div>
      ) : null}

      <p className="text">{description}</p>
      <div className="rightButtonContainer">
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
