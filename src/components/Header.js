import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

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
      <motion.a
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 20 }}
      >
        <img src="/images/logo.svg" alt="" />
      </motion.a>
      <Menu>
        <motion.a
          href="#"
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 20 }}
        >
          Model S
        </motion.a>
        <motion.a
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
        </motion.a>
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
      <CustomMenu>
        <motion.i
          class="bi-list"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1.5 }}
        ></motion.i>
      </CustomMenu>
    </Container>
  );
}

export default Header;
