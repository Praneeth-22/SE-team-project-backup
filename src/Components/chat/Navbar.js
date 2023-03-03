import React, { useState, useEffect } from "react";
import { useUserAuth } from "../../../context/UserContextApi";

export default function Navbar() {
  const { logOut } = useUserAuth();
  const loggingOut = () => {
    logOut();
    window.location.href = "/";
  };
  const [avatarUrl, setavatarUrl] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    console.log("user in navbar:", user)
    setavatarUrl(user.photoURL);
    setDisplayName(user.displayName);
    setEmail(user.email);

  }, []);
  return (
    <div className="navbar">
      <span className="logo"> Chat</span>
      <div className="user">
        <img src={avatarUrl} alt="" />
        <span>{displayName}</span>
        <button
          onClick={() => loggingOut()}
          style={{
            // backgroundColor: "transparent",
            border: "none",
            // color: "white",
            // fontSize: "16px",
            fontWeight: "600",
            lineHeight: "20px",
            letterSpacing: "1px",
            // padding: "10px",
            borderRadius: "10px",
            // backgroundColor: message.senderId === currentUser.uid ? "#4A1D91" : "#28104e",
            backgroundColor: "white",
            color: "#4A1D91",
          }}
        >
          log Out
        </button>
      </div>
    </div>
  );
}
