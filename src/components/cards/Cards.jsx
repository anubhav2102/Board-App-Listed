import React from "react";
import styles from "./Cards.module.css";

function Cards() {
  const cards = [
    {
      icon: "assets/revenue.svg",
      title: "Total Revenues",
      text: "$2,129,430",
      bgColor: "#DDEFE0",
    },
    {
      icon: "assets/totalTransactions.svg",
      title: "Total Transactions",
      text: "1,520",
      bgColor: "#F4ECDD",
    },
    {
      icon: "assets/likes.svg",
      title: "Total Likes",
      text: "9,721",
      bgColor: "#EFDADA",
    },
    {
      icon: "assets/totalUsers.svg",
      title: "Total Users",
      text: "892",
      bgColor: "#DEE0EF",
    },
  ];

  return (
    <div className={styles.container}>
      {cards.map((card, index) => {
        return (
          <div
            className={styles.cards}
            style={{
              backgroundColor: card.bgColor,
              height: "100px",
              padding: "20px",
              borderRadius: "20px",
            }}
          >
            <div style={{ display: "flex", justifyContent: "end" }}>
              <img src={card.icon} alt="" />
            </div>
            <div>
              <p
                style={{
                  fontFamily: "Lato",
                  fontStyle: "normal",
                  fontWeight: 500,
                  fontSize: "14px",
                  lineHeight: "17px",
                }}
              >
                {card.title}
              </p>
              <h2
                style={{
                  fontFamily: "Open Sans",
                  fontStyle: "normal",
                  fontWeight: 700,
                  fontSize: "24px",
                  lineHeight: "33px",
                }}
              >
                {card.text}
              </h2>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Cards;
