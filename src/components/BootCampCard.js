import React from "react";
import styles from "./BootCampCard.css";

export const BootCampCard = ({ icon, title }) => {
  return (
    <div className="smallCard">
      {/* <div className="icon"> </div> */}
      <img src={icon} alt="icon" style={{ width: 104 }} />
      <p>{title}</p>
    </div>
  );
};
