import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useState } from "react";
import { selectCars } from "../features/car/carSlice";
import { useSelector } from "react-redux";

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 20 px;
  top: 0; //expand the header to full width
  left: 0;
  right: 0;
  z-index: 1;
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

  @media (max-width: 768px) {
    display: none;
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
  .bi-list {
    font-size: 24px;
    color: #393c41;
    margin-right: 10px;
    cursor: pointer;
  }
`;

const BurgerNav = styled.ul`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background: white;
  width: 300px;
  z-index: 16;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.5s;
  li {
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    a {
      font-weight: 600;
      text-decoration: none;
      color: #393c41;
    }
  }
`;

const CustomClose = styled.div`
  .bi-x-lg {
    font-size: 24px;
    color: #393c41;
    cursor: pointer;
  }
`;

const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

function Header() {
  const [burgerStatus, setBurgerStatus] = useState(false);
  const cars = useSelector(selectCars);
  return (
    <Container>
      <motion.a
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 20 }}
      >
        <img src="/images/logo.svg" alt="" />
      </motion.a>
      <Menu>
        {cars &&
          cars.map((car, index) => (
            <motion.a
              key={index}
              href="#"
              initial={{ y: -100 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 20 }}
            >
              {car}
            </motion.a>
          ))}

        {/* <motion.a
          href="#"
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 20 }}
        >
          Model Y
        </motion.a>
        <motion.a
          href="#"
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 20 }}
        >
          Model 3
        </motion.a>
        <motion.a
          href="#"
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 20 }}
        >
          Model X
        </motion.a> */}
      </Menu>
      <RightMenu>
        <motion.a
          href="#"
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 20 }}
        >
          Shop
        </motion.a>
        <motion.a
          href="#"
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 20 }}
        >
          Tesla Account
        </motion.a>
      </RightMenu>
      <BurgerNav show={burgerStatus}>
        <CloseWrapper>
          <CustomClose onClick={() => setBurgerStatus(false)}>
            <i className="bi bi-x-lg"></i>
          </CustomClose>
        </CloseWrapper>
        {cars &&
          cars.map((car, index) => (
            <li key={index}>
              <a href="#">{car}</a>
            </li>
          ))}

        <li>
          <a href="#">Existing Inventory</a>
        </li>
        <li>
          <a href="#">Used Inventory</a>
        </li>
        <li>
          <a href="#">Trade-in</a>
        </li>
        <li>
          <a href="#">Cybertruck</a>
        </li>
        <li>
          <a href="#">Roadster</a>
        </li>
        <li>
          <a href="#">Semi</a>
        </li>
      </BurgerNav>
      <CustomMenu onClick={() => setBurgerStatus(true)}>
        <motion.i
          className="bi bi-list"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1.5 }}
        ></motion.i>
      </CustomMenu>
    </Container>
  );
}

export default Header;
