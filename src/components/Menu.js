import React from "react";
import logo from "../assets/url@2x.png";
import student from "../assets/student.png";
import "semantic-ui-css/semantic.min.css";
import { Dropdown, Image } from "semantic-ui-react";
import "./Menu.css";

export const Menu = () => {
  const trigger = (
    <span>
      <Image avatar src={student} /> Profile
    </span>
  );

  const options = [
    { key: "user", text: "Edit Profile" },
    { key: "sign-out", text: "Log out"},
  ];

  return (
    <div
      className="header"
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="homepage"
        >
          <img src={logo} alt="logo" className="logo"  />
        </a>
        <h2
        className="subheading"
         
        >
          Full Stack Web Developer Bootcamp
        </h2>
      </div>

      <Dropdown
        
        trigger={trigger}
        options={options}
      />
    </div>
  );
};
