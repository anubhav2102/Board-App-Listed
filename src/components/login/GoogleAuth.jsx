import React, { useState, useEffect } from "react";
import { useGoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import IMG from "../../assets/assets/google.svg";

function Auth() {
  const [user, setUser] = useState("");
  const navigate = useNavigate();

  const login = useGoogleLogin({
    onSuccess: (response) => {
      setUser(response);
    },
    onError: (error) => console.log("Login Failed: ", error),
  });

  useEffect(() => {
    if (user) {
      axios
        .get(
          `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`,
          {
            headers: {
              Authorization: `Bearer ${user.access_token}`,
              Accept: "application/json",
            },
          }
        )
        .then((res) => {
          localStorage.setItem("user", JSON.stringify(res));
          navigate("/dashboard");
        })
        .catch((err) => console.log(err));
    }
  }, [user, navigate]);

  return (
    <div>
      <button
        style={{
          width: "180px",
          fontFamily: "Montserrat",
          fontWeight: "400",
          fontSize: "14px",
          lineHeight: "15px",
          backgroundColor: "#FFFFFF",
          borderRadius: "10px",
          border: "transparent",
          textAlign: "center",
          height: "30px",
        }}
        onClick={() => login()}
      >
        {" "}
        <img style={{ marginTop: "2px" }} src={IMG} alt="" /> Sign in with
        Google{" "}
      </button>
    </div>
  );
}
export default Auth;
