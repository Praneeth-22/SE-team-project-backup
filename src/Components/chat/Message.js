import React, { useState, useEffect, useContext, useRef } from "react";

export default function Message({ message }) {
  console.log("------messeges----".message);
  //
  const currentUser = JSON.parse(localStorage.getItem("user"));
  const [avatarUrl, setavatarUrl] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  useEffect(() => {
    console.log("user in Chats:", currentUser);
    const prepareData = {
      displayName: currentUser?.displayName,
      email: currentUser?.email,
      avatarUrl: currentUser?.avatarUrl,
    };
    setavatarUrl(prepareData?.avatarUrl);
    setDisplayName(prepareData?.displayName);
    setEmail(prepareData?.email);
  }, [currentUser]);
  
  return (
    <div
      className="chat-message"
    >
      <div className="messageInfo">
        <img
         
          alt="img"
        />
        <span>
          {
            //compute time
          }
        </span>
      </div>
      <div className="messageContent">
        <p style={{
          color: "white",
          fontSize: "14px",
          fontWeight: "500",
          lineHeight: "20px",
          letterSpacing: "1px",
          padding: "10px",
          borderRadius: "10px",
          backgroundColor: "#28104e",
        }}>
  messege
        </p>
       
      </div>
    </div>
  );
}
