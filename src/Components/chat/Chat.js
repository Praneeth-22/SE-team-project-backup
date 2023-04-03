import React from 'react'
import Messages from './Messages'
import Input from './Input'
import { ChatContext } from '../ChatContext';
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import _ from "lodash";
import { useNavigate } from "react-router-dom";
function Chat() {
  const navigate = useNavigate();
  const {data} = React.useContext(ChatContext)
  const backHome = () => {
    navigate("/");
  }
  return (
    <div className="chat">
      <div className="chatInfo">
        <span style={{
          fontSize: "1.5rem",
          fontWeight: "bold",

        }}>{data.user?.displayName}</span>
        <div className="chatIcons" style={{
          display: "flex",
          alignItems: "center",
          fontSize: "1.5rem",
          cursor: "pointer",
        }}>
          <HomeOutlinedIcon onClick={backHome}/>
        </div>
      </div>
      <Messages />
      <Input/>
    </div>
  );
}

export default Chat
