import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import {textVariant } from "../utils/motion";

const Button = ({Title, isToggle, Delay}) => {
  return (
    <StyledWrapper isToggle={isToggle} style={{display:'flex',flex:1}}>
      <motion.button 
             variants={textVariant(Delay)} 
             initial="hidden"
             animate="show"
             className="button2 xs:h-[100px]"
             style={{backgroundColor: isToggle 
                       ? '#d1d1d1'
                       : '#2a2a2a'
                    }}
      >
        <span className="liquid"/>
        <span className="btn-txt">{Title}</span>
      </motion.button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  /* Dark Mode 3D Button */
.button2 {
  flex:1;
  font: inherit;
  position: relative;
  overflow: hidden;
  border: 0;
  color: #7e7e7e;
  border-radius: 0.5em;
  font-size: 1.35rem;
  padding: 0.375em 1em;
  font-weight: 600;
  box-shadow: ${({isToggle}) => (isToggle
      ? `
          inset 0 0.0625em 0 0 #c9c9c9,
          0 0.0625em 0 0 #c9c9c9,
          0 0.125em 0 0 #c9c9c9,
          0 0.25em 0 0 #c9c9c9,
          0 0.3125em 0 0 #c9c9c9,
          0 0.375em 0 0 #c9c9c9,
          0 0.425em 0 0 #c9c9c9,
          0 0.425em 0.5em 0 #c9c9c9;
        `
      :  `
            inset 0 0.0625em 0 0 #3a3a3a,
            0 0.0625em 0 0 #252525,
            0 0.125em 0 0 #202020,
            0 0.25em 0 0 #1c1c1c,
            0 0.3125em 0 0 #181818,
            0 0.375em 0 0 #141414,
            0 0.425em 0 0 #101010,
            0 0.425em 0.5em 0 #0a0a0a;
          `
    )}
  transition: 0.15s ease;
  cursor: pointer;
}
.button2:hover {
  box-shadow: ${({isToggle}) => (isToggle 
      ? `
          inset 0 0.0625em 0 0 #e9e9e9,
          0 0.0625em 0 0 #d1d1d1,
          0 0.125em 0 0 #e9e9e9,
          0 0.25em 0 0 #d0d0d0,
          0 0.3125em 0 0 #d1d1d1,
          0 0.375em 0 0 #e9e9e9,
          0 0.425em 0 0 #d1d1d1,
          0 0.425em 0.5em 0 #e9e9e9;
        `
      : `
          inset 0 0.0625em 0 0 #3e3e3e,
          0 0.0625em 0 0 #0e0e0e,
          0 0.125em 0 0 #0e0e0e,
          0 0.25em 0 0 #3e3e3e,
          0 0.3125em 0 0 #0e0e0e,
          0 0.375em 0 0 #0e0e0e,
          0 0.425em 0 0 #3e3e3e,
          0 0.425em 0.5em 0 #0e0e0e;
        `
    )}
}
.button2:active {
  translate: 0 0.225em;
  box-shadow: ${({isToggle}) => (isToggle 
      ? `
        inset 0 0.03em 0 0 #e8e8e8,
        0 0.03em 0 0 #e9e9e9,
        0 0.0625em 0 0 #e8e8e8,
        0 0.125em 0 0 #e9e9e9,
        0 0.125em 0 0 #e8e8e8,
        0 0.2em 0 0 #e9e9e9,
        0 0.225em 0 0 #e8e8e8,
        0 0.225em 0.375em 0 #e9e9e9;
        `
      : `
        inset 0 0.03em 0 0 #3a3a3a,
        0 0.03em 0 0 #252525,
        0 0.0625em 0 0 #202020,
        0 0.125em 0 0 #1c1c1c,
        0 0.125em 0 0 #181818,
        0 0.2em 0 0 #141414,
        0 0.225em 0 0 #101010,
        0 0.225em 0.375em 0 #0a0a0a;
        `
    )}
}
.liquid {
  background-color: transparent;
  width: 500px;
  height: 70px;
  position: absolute;
  bottom: 0;
  left: 0;
  inset -5px 0px 25px #104e81;
}

.liquid::after {
  content: '';
  width: 450px;
  height: 400px;
  background: ${({ isToggle }) => (isToggle ? '#e3e3e3' : '#1e1e1e')};
  z-index: 1;
  position: absolute;
  left: -110px;
  top: -380px;
  border-radius: 45%;
  animation: animate 5s linear 2s infinite;
}

.liquid::before {
  content: '';
  width: 450px;
  height: 420px;
  background: ${({ isToggle }) => (isToggle ? '#d9d9d9' : '#3e3e3e')};
  z-index: 1;
  position: absolute;
  left: -110px;
  top: -380px;
  border-radius: 40%;
  animation: animate 5s linear 1.8s infinite;
}

.btn-txt {
  position: relative;
  z-index: 1;
  font-size: 22px;
  font-family: sans-serif;
  letter-spacing: 2px;
  color: ${({isToggle}) => ( isToggle ? '#3e3e3e' : '#7e7e7e')}
}

@keyframes animate {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}
`;

export default Button;
