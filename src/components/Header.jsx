import React from "react";
import styled from "styled-components";
import MainLogo from "./image/MainLogo.svg";
import Call from "./image/Call.svg";
import LogoutProfile from "./image/LogoutProfile.svg";

export default function Header() {
  return (
    <>
      <MainHeader>
        <MainLogo />
        <RightNav>
          <Call />
          <LogoutProfile />
        </RightNav>
      </MainHeader>
    </>
  );
}

const MainHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  align-self: stretch;
`;

const RightNav = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
`;
