import React from "react";
import styled from "styled-components";
import login from "../images/logo/login.jpg";
import google from "../images/google.svg";
import { useNavigate } from "react-router-dom";
import ChatBot from "./ChatBot";

function Login() {
  const navigate = useNavigate();
  const logined = () => {
    // navigate("/home");
    navigate("/category");
  };
  return (
    <LoginContainer>
      <Element>
        <img src={login} alt="login" />
        <div className="text">
          <h1>Welcome</h1>
        </div>
        <button onClick={logined}>
          <a>Sign In via Google</a>&nbsp;&nbsp;
          <img src={google} alt="click" />
        </button>
      </Element>
      <ChatBot />
    </LoginContainer>
  );
}
const LoginContainer = styled.div`
  display: grid;
  place-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #f8f8f8;
`;
const Element = styled.div`
  text-align: center;
  padding: 100px;
  text-align: center;
  background-color: white;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.12);
  img {
    object-fit: contain;
    height: 27vh;
    margin-bottom: 36px;
    border-radius: 20px;
  }
  button {
    margin-top: 50px;
    text-transform: inherit !important;
    align-items: center;
    height: 50px;
    width: 200px;
    outline: none;
    border-radius: 20px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    font-weight: 500;
    background-color: azure;
  }
  button:hover {
    background-color: #f8f8f8;
  }
  button > img {
    object-fit: contain;
    width: 30px;
    height: 30px;
    margin: 0;
  }
  h1 {
    font-size: 36px;
  }
  @media (max-width: 800px) {
    width: 100vw;
    height: 100vh;
    border-radius: 0;
  }
`;

export default Login;
