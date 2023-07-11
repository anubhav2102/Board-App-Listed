import React from "react";
import { useNavigate } from "react-router-dom";
import { googleLogout } from "@react-oauth/google";
import Search from "../../assets/assets/search.svg";
import UserImg from "../../assets/assets/userImg.svg";
import Notification from "../../assets/assets/notifications.svg";

function Header() {
  const navigate = useNavigate();
  const picture = JSON.parse(localStorage.getItem("user"));
  const logout = () => {
    if (window.confirm("This step will log you out!")) {
      localStorage.removeItem("user");
      googleLogout();
      navigate("/");
    }
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        height: "30px",
        margin: "30px 0",
      }}
    >
      <div
        style={{
          fontFamily: "Montserrat",
          fontStyle: "normal",
          fontWeight: 700,
          fontSize: "24px",
          lineHeight: "29px",
        }}
      >
        Dashboard
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <div style={{ display: "flex", alignContent: "center" }}>
          <input
            style={{
              width: "140px",
              height: "30px",
              padding: "0 20px",
              border: "transparent",
              borderRadius: "10px 0 0 10px",
            }}
            type="search"
            placeholder="Search..."
          />
          <img
            style={{
              backgroundColor: "#FFFFFF",
              width: "20px",
              height: "30px",
              borderRadius: "0 10px 10px 0",
            }}
            src={Search}
            alt="search"
          />
        </div>
        <img height="20px" width="18px" src={Notification} alt="notific" />
        <img
          style={{ height: "30px", weight: "30px", borderRadius: "50%" }}
          src={picture ? picture.data.picture : { UserImg }}
          alt="userImg"
          onClick={logout}
        />
      </div>
    </div>
  );
}

export default Header;
