import React, { useState } from "react";
import PieChart from "../charts/PieChart";

function TopProducts() {
  const [month, setMonth] = useState("May - June 2021");
  const pieChartData = {
    "May - June 2021": [
      { product: "Basic Tees", percent: "55" },
      { product: "Custom Short Pants", percent: "31" },
      { product: "Super Hoodies", percent: "14" },
    ],
    "June - July 2021": [
      { product: "Basic Tees", percent: "30" },
      { product: "Custom Short Pants", percent: "40" },
      { product: "Super Hoodies", percent: "30" },
    ],
    "July - August 2021": [
      { product: "Basic Tees", percent: "25" },
      { product: "Custom Short Pants", percent: "15" },
      { product: "Super Hoodies", percent: "60" },
    ],
  };

  function handleSelect(e) {
    setMonth(e.target.value);
  }
  return (
    <div
      style={{
        backgroundColor: "#FFFFFF",
        width: "100%",
        height: "296px",
        borderRadius: "20px",
      }}
    >
      <div
        style={{
          display: "flex",
          margin: "40px 0 23px 0",
          borderRadius: "20px",
          justifyContent: "space-around",
        }}
      >
        <h1
          style={{
            fontFamily: "Montserrat",
            fontStyle: "normal",
            fontWeight: 700,
            fontSize: "18px",
            lineHeight: "20px",
            marginBottom: "-5px",
          }}
        >
          Top Products
        </h1>

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
            marginBottom: "-5px",
          }}
          value={month}
          onChange={handleSelect}
        >
          {Object.keys(pieChartData).map((item, index) => {
            return <option value={item}>{item}</option>;
          })}
        </select>
      </div>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <div>
          <PieChart data={pieChartData[month]} />
        </div>
        <div>
          {pieChartData[month].map((item, index) => {
            return (
              <div>
                <div style={{ display: "flex", gap: "10px" }}>
                  <div
                    style={{
                      backgroundColor:
                        index === 0
                          ? "#98D89E"
                          : index === 1
                          ? "#F6DC7D"
                          : "#EE8484",
                      height: "11px",
                      width: "11px",
                      borderRadius: "50%",
                      marginTop: "5px",
                    }}
                  ></div>
                  <span
                    style={{
                      fontFamily: "Montserrat",
                      fontStyle: "normal",
                      fontWeight: 700,
                      fontSize: "14px",
                      lineHeight: "17px",
                    }}
                  >
                    {item.product}
                  </span>
                </div>
                <p
                  style={{
                    fontFamily: "Lato",
                    fontStyle: "normal",
                    fontWeight: 400,
                    fontSize: "12px",
                    lineHeight: "14px",
                    marginLeft: "20px",
                  }}
                >
                  {item.percent}%
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default TopProducts;
