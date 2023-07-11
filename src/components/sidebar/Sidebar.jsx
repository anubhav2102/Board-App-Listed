import React from "react";
import { Link } from "react-router-dom";
import styles from "./Sidebar.module.css";

function Sidebar() {
  const linkStyles = {
    textDecoration: "none",
    color: "#FFFFFF",
  };
  const options = [
    {
      icon: "/assets/dashboard.svg",
      title: "Dashboard",
      link: "/dashboard",
    },
    {
      icon: "/assets/transactions.svg",
      title: "Transactions",
      link: "/transactions",
    },
    {
      icon: "/assets/schedules.svg",
      title: "Schedules",
      link: "/schedules",
    },
    {
      icon: "/assets/users.svg",
      title: "Users",
      link: "/users",
    },
    {
      icon: "/assets/settings.svg",
      title: "Settings",
      link: "/settings",
    },
  ];
  return (
    <div className={styles.leftSide}>
      <div className={styles.container}>
        <h1 className={styles.heading}>Board.</h1>
        <div className={styles.nav}>
          {options.map((item, index) => {
            return (
              <div className={styles.navElements}>
                <img src={item.icon} alt="" />
                <span className={styles.navTitle}>{item.title}</span>
              </div>
            );
          })}
        </div>
        <div className={styles.navFooter}>
          <Link style={linkStyles} to="#help">
            {" "}
            Help
          </Link>
          <Link style={linkStyles} to="#contact">
            {" "}
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
