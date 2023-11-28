import React from "react";
import styled from "styled-components";

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  margin: 0 20 px;
  top: 0; //expand the header to full width
  left: 0;
  right: 0;
`;
const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  a {
    font-weight: 700;
    text-decoration: none;
    text-transform: uppercase;
    color: #393c41;
    padding: 0 20px;
    flex-wrap: nowrap;
  }
`;

const RightMenu = styled.div`
  display: flex;
  align-items: center;
  a {
    text-decoration: none;
    font-weight: 700;
    color: #393c41;
    text-transform: uppercase;
    margin-right: 10px;
  }
`;
const CustomMenu = styled.div`
  i.bi-list {
    font-size: 24px;
    color: #393c41;
    margin-right: 10px;
    cursor: pointer;
  }
`;

function Header() {
  return (
    <Container>
      <a>
        <img src="/images/logo.svg" alt="" />
      </a>
      <Menu>
        <a href="#">Model S</a>
        <a href="#">Model Y</a>
        <a href="#">Model 3</a>
        <a href="#">Model X</a>
      </Menu>
      <RightMenu>
        <a href="#">Shop</a>
        <a href="#">Tesla Account</a>
      </RightMenu>
      <CustomMenu>
        <i class="bi-list"></i>
      </CustomMenu>
    </Container>
  );
}

export default Header;
