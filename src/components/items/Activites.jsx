import React, { useState } from "react";
import LineChart from "../charts/LineChart";

function Activities() {
  const [month, setMonth] = useState("May - June 2021");
  const lineChartData = {
    "May - June 2021": {
      user: [200, 400, 300, 100, 250],
      guest: [300, 200, 100, 200, 350],
    },
    "June - July 2021": {
      user: [400, 400, 100, 200, 300],
      guest: [300, 200, 200, 100, 400],
    },
    "July - August 2021": {
      user: [400, 300, 200, 500, 280],
      guest: [200, 300, 400, 500, 300],
    },
  };

  function handleSelect(e) {
    setMonth(e.target.value);
  }

  return (
    <div
      style={{
        width: "96.45%",
        height: "36%",
        margin: "10px 0",
        backgroundColor: "#FFFFFF",
        padding: "10px",
        borderRadius: "20px",
      }}
    >
      <p
        style={{
          fontFamily: "Montserrat",
          fontStyle: "normal",
          fontWeight: 700,
          fontSize: "18px",
          lineHeight: "20px",
          marginBottom: "5px",
        }}
      >
        Activities
      </p>

      <select
        style={{
          fontFamily: "Montserrat",
          fontStyle: "normal",
          fontWeight: 400,
          fontSize: "14px",
          lineHeight: "17px",
          width: "151px",
          border: "transparent",
          color: "#858585",
        }}
        value={month}
        onChange={handleSelect}
      >
        {Object.keys(lineChartData).map((item, index) => {
          return <option value={item}>{item}</option>;
        })}
      </select>
      <div
        style={{
          display: "flex",
          justifyContent: "end",
          alignItems: "center",
          gap: "20px",
        }}
      >
        <div style={{ display: "flex" }}>
          <div
            style={{
              height: "10px",
              width: "10px",
              backgroundColor: "#E9A0A0",
              margin: "6px 10px 0 0",
              borderRadius: "50%",
            }}
          ></div>
          <span>Guest</span>
        </div>
        <div style={{ display: "flex" }}>
          <div
            style={{
              height: "10px",
              width: "10px",
              backgroundColor: "#9BDD7C",
              margin: "6px 10px 0 0",
              borderRadius: "50%",
            }}
          ></div>
          <span>User</span>
        </div>
      </div>
      <LineChart
        user={lineChartData[month].user}
        guest={lineChartData[month].guest}
      />
    </div>
  );
}

export default Activities;
