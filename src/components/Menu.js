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
    { key: "user", text: "Account", icon: "Edit Profile" },
    { key: "sign-out", text: "Sign Out", icon: "Log out" },
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
        height: 40,
        // paddingLeft: 20,
        paddingRight: 60,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          width: "40%",
        }}
      >
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.retailcapital.co.za/?utm_source=email&utm_medium=menu_bar&utm_campaign=homepage"
        >
          <img src={logo} alt="logo" style={{ width: 140 }} />
        </a>
        <p
          style={{ fontFamily: "avenir-heavy", fontSize: 16, color: "#f0571b", fontWeight:1000 }}
        >
          Full Stack Web Developer Bootcamp
        </p>
      </div>

      <Dropdown
        trigger={trigger}
        options={options}
        pointing="top left"
        icon={null}
      />
    </div>
  );
};
