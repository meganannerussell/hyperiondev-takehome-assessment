import React from "react";
import styles from "./BootCampCard.css";

export const BootCampCard = ({ icon, title }) => {
  return (
    <div className="smallCard">
      {/* <div className="icon"> </div> */}
      <img src={icon} alt="icon" style={{ width: 104 }} />
      <p
        style={{
          paddingTop: 15,
          paddingLeft: 15,
          fontSize: 15,
          fontFamily: "avenir heavy",
        }}
      >
        {title}
      </p>
    </div>
  );
};
