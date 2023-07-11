import React from "react";
import styles from "./Dashboard.module.css";
import Sidebar from "../sidebar/Sidebar";
import Header from "../items/Header";
import Cards from "../cards/Cards";
import Schedule from "../cards/Schedule";
import Activities from "../items/Activites";
import TopProducts from "../items/TopProducts";

function Dashboard() {
  return (
    <div className={styles.container}>
      <Sidebar />
      <div className={styles.rightSide}>
        <Header />
        <Cards />
        <Activities />
        <div className={styles.products}>
          <TopProducts />
          <Schedule />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
