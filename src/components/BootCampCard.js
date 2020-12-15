import React from "react";
import "./BootCampCard.css";

export const BootCampCard = ({ icon, title }) => {
  return (
    <div className="smallCard">
      <img src={icon} alt="icon" className="smallCardImage"  />
      <p
      className="smallCardText"
    
      >
        {title}
      </p>
    </div>
  );
};
