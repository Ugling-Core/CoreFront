import React from "react";
import styled from "styled-components";
import PlusMark from "./image/PlusMark.svg";

export default function RoomPlus() {
  return (
    <>
      <PlusBox>
        <PlusMark />
      </PlusBox>
    </>
  );
}

const PlusBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 254px;
  height: 180px;
  border-radius: 30px;
  background: #fff;
  box-shadow: 3px 4px 10px 3px rgba(0, 0, 0, 0.15);
`;
