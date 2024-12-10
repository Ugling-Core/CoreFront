import styled from "styled-components";
import React from "react";
import Header from "./components/Header";
import RoomPlus from "./components/RoomPlus";

export default function App() {
  return (
    <>
      <Container>
        <MainBox>
          <Header />
          <RoomPlus />
        </MainBox>
      </Container>
    </>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

const MainBox = styled.div`
  display: flex;
  width: 1081px;
  flex-direction: column;
  align-items: flex-start;
  gap: 60px;
`;
