import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useState } from "react";



function Caterogy({ setOpenModel }) {
   const navigate = useNavigate();
  const routeHome = (e) => {
    e.preventDefault();
    if(e.target.style.backgroundColor === "green"){
      e.target.style.backgroundColor = "cornflowerblue";
    }else{
      e.target.style.backgroundColor = "green"
    }
  };
  return (
    <CaterogyContainer>
      <Elements>
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModel(false);
            }}
          >
            X
          </button>
        </div>
        <div className="title">Select the category to be updated...</div>
        <div className="body">
          {/* <Checkbox  defaultChecked /> */}
          <button onClick={routeHome}>Sport</button>
          <button onClick={routeHome}>Academics</button>
          <button onClick={routeHome}>Activities</button>
          <button onClick={routeHome}>Others</button>
        </div>
        <div className="footer">
          <button
            id="cancelBtn"
            onClick={() => {
              setOpenModel(false);
            }}
          >
            Cancel
          </button>
          <button
            id="saveBtn"
            onClick={() => {
              setOpenModel(false);
            }}
          >
            Save
          </button>
        </div>
      </Elements>
    </CaterogyContainer>
  );
}
const CaterogyContainer = styled.div`
  display: grid;
  place-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #f8f8f8;
`;
const Elements = styled.div`
  width: 500px;
  height: 500px;
  border-radius: 12px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  display: flex;
  flex-direction: column;
  padding: 25px;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.12);
  .titleCloseBtn {
    display: flex;
    justify-content: flex-end;
  }
  .titleCloseBtn button {
    width: 40px;
    height: 40px;
    border: none;
    background-color: #ff4f33;
    color: white;
    border-radius: 8px;
    font-size: 20px;
    cursor: pointer;
  }
  .title {
    display: inline-block;
    text-align: center;
    margin-top: 10px;
    font-size: 1.5rem;
  }
  .body {
    flex: 50%;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    align-items: center;
    font-size: 1.7rem;
    text-align: center;
  }
  .body button {
    width: 150px;
    height: 60px;
    margin: 10px;
    border: none;
    background-color: cornflowerblue;
    color: white;
    border-radius: 8px;
    font-size: 20px;
    cursor: pointer;
  }
  .footer button {
    width: 150px;
    height: 45px;
    margin: 10px;
    border: none;
    background-color: cornflowerblue;
    color: white;
    border-radius: 8px;
    font-size: 20px;
    cursor: pointer;
  }

  #cancelBtn {
    background-color: #ff4f33;
  }
  #saveBtn {
    background-color: #33ff6b;
    color: white;
  }
`;

export default Caterogy;
