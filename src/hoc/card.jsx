import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { cardMotion } from "../utils/motion";

const Card = ({Title, Text, Icon, isToggle, Delay}) => {
  return (
    <StyledWrapper style={{display:'flex',flex:1}}>
      <motion.div 
           variants={cardMotion(Delay)} 
           initial="hidden"
           animate="show"
           className="card w-full"
           style={{backgroundColor: isToggle ? '#eee': '#1a1a1a',
                   border: isToggle
                      ? '10px solid #eee'
                      : '10px solid #1a1a1a',
                   boxShadow: isToggle
                      ? 'inset 5px 5px 10px #bbb, inset -5px -5px 10px #fff'
                      : 'inset 5px 5px 10px #0d0d0d, inset -5px -5px 10px #333333'
                  }}
      >
        <div className="icon"
             style={{backgroundColor: isToggle ? '#eee': '#1a1a1a',
                     boxShadow: isToggle
                      ? '8px 8px 10px #ddd, -8px -8px 10px #fff'
                      : '5px 5px 5px #0d0d0d, -2px -2px 2px #333333'
                    }}
        >
          <img src={Icon}/>
        </div>
        <div className="content"
             style={{backgroundColor: isToggle ? '#eee': '#1a1a1a',
                     color: isToggle ? '#999' : '#f5f5f5',
                     boxShadow: isToggle
                       ? '8px 8px 10px #ddd, -8px -8px 10px #fff'
                       : '5px 5px 5px #0d0d0d, -2px -2px 2px #333333'
                    }}
        >
          <h3 className="text-lg md:text-xl lg:text-2xl text-shadow"
              style={{textShadow: isToggle
                        ? '2px 2px 0px #fff'
                        : '2px 2px 0px #1a1a1a'
                     }}  
          >
            {Title}
          </h3>
          <p className="text-sm">
            {Text}
          </p>
        </div>
      </motion.div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .card {
    height: full;
    text-align: center;
    border: 10px solid #eee;
    border-radius: 20px;
    box-shadow: inset 5px 5px 10px #bbb, inset -5px -5px 10px #fff;
    transition: 0.5s;
  }

  .icon {
    width: 70px;
    height: 70px;
    color: red;
    font-size: 30px;
    background-color: #eee;
    margin: 20px auto;
    padding: 5px;
    border-radius: 50%;
    box-shadow: 8px 8px 10px #ddd, -8px -8px 10px #fff;
  }

  .content {
    color: #999;
    height: auto;
    background-color: #eee;
    padding: 10px;
    border-radius: 8px;
    box-shadow: 8px 8px 10px #ddd, -8px -8px 10px #fff;
    transform: translateY(-80px) scale(0);
    transition: all 0.5s;
  }

  .card:hover .content {
    transform: translateY(0) scale(1);
  }

  .text-shadow {
    text-shadow: 2px 2px 0px #fff;
  }
`;

export default Card;
