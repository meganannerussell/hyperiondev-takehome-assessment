import React from "react";
import styles from "./Menu.css";
import logo from "../assets/url@2x.png";
import student from "../assets/student.png";
import "semantic-ui-css/semantic.min.css";
import { Dropdown, Image } from "semantic-ui-react";

export const Menu = () => {
  const trigger = (
    <span>
      <Image avatar src={student} /> Profile
    </span>
  );

  const options = [
    { key: "user", text: "Account" },
    { key: "sign-out", text: "Sign Out"},
  ];

  return (
    <div
      className="header"
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        position: "fixed",
        backgroundColor: "white",
        width: "100%",
        // height: 40,
        // paddingLeft: 20,
        padding: '12px 30px 12px 30px',
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          // width:  "40%",
        }}
      >
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.retailcapital.co.za/?utm_source=email&utm_medium=menu_bar&utm_campaign=homepage"
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
        // pointing="top left"
        // icon={null}
      />
    </div>
  );
};
