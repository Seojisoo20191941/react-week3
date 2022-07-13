import React from "react";
import styled from "styled-components";

const BlueBoxDom = styled.div`
  height: 50px;
  width: 100px;
  background-color: ${(props) => props.btnColor};
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;

const BlueBox = (props) => {
  return (
    <div>
      <BlueBoxDom btnColor={props.btnColor} onClick={props.counterUp}>
        {props.title}
      </BlueBoxDom>
      <span>{props.count}</span>
    </div>
  );
};

export default BlueBox;
