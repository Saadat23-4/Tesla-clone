import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url("/images/model-s.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: space-between; //vertical
  align-items: center; //horizontal
  background-image: ${(props) =>
    `url('/images/${props.bgImage}')`}; //changing the bckImage
`;

const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
  font-weight: 600;
`;

const ButtonGroup = styled(motion.div)`
  display: flex;
  margin-bottom: 30px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LeftButton = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 256px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  opacity: 0.9;
  text-transform: uppercase;
  font-size: 12px;
  cursor: pointer;
  margin: 8px;
`;

const AnimatedButton = motion(LeftButton);

const RightButton = styled(LeftButton)`
  background-color: white;
  opacity: 0.65;
  color: black;
`;
const AnimatedRButton = motion(RightButton);

const DownArrow = styled.img`
  margin-top: 20px;
  height: 40px;
  overflow-x: hidden; //remove arrow of the webpage->index.css
  animation: animateDown infinite 1.5s; //up and down feeling type for arrowDown->index.css
`;

const Buttons = styled.div``;

function Section({
  title,
  description,
  leftBtnText,
  rightBtnText,
  backgroundImg,
}) {
  return (
    // changing the bckImage
    <Wrap bgImage={backgroundImg}>
      <ItemText>
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1.5 }}
        >
          {title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.9 }}
          transition={{ delay: 1, duration: 1.5 }}
        >
          {description}
        </motion.p>
      </ItemText>
      <Buttons>
        <motion.ButtonGroup
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1.5 }}
        >
          <AnimatedButton whileHover={{ scale: 1.1 }}>
            {leftBtnText}
          </AnimatedButton>

          {rightBtnText && (
            <AnimatedRButton whileHover={{ scale: 1.1 }}>
              {rightBtnText}
            </AnimatedRButton>
          )}
        </motion.ButtonGroup>
        <DownArrow src="/images/down-arrow1.png" />
      </Buttons>
    </Wrap>
  );
}

export default Section;
