import React from "react";
import Header from "./Header";
import Home from "./Home";
import Caterogy from "./Caterogy";
import styled from "styled-components";
import { useState, useEffect } from "react";
function MainPage() {
  const [openModel, setOpenModel] = useState(false);
  return (
    <Container>
      {openModel ? (
        <>
          <Caterogy setOpenModel={setOpenModel} />
        </>
      ) : (
        <>
          <button onClick={() => setOpenModel(true)} className="openModel">
            click
          </button>
          <Header />
          <Home />
        </>
      )}
    </Container>
  );
}
const Container = styled.div`
  padding-top: 52px;
  max-width: 100%;

  .openModel {
    width: 200px;
    height: 40px;
    border: none;
    border-radius: 6px;
    background-color: cornflowerblue;
    color: white;
    cursor: pointer;
  }
`;

export default MainPage;
