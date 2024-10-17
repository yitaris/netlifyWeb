import React from "react";

const BallCanvas = ({ icon }) => {
  return (
   <div>
    <img src={icon} style={{width: '100px', height: '100px'}}/>
   </div>
  );
};

export default BallCanvas;
