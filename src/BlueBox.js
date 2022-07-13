// import React, { useState } from "react";
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
  //   const [count, setCount] = useState(0);

  //   const counterUp = () => {
  //     setCount((c) => c + 1);
  //   };

  //3이 증가하는 빨강버튼
  //1이 증가하는 파랑버튼

  return (
    <div>
      <span>Counter:{props.count}</span>

      <BlueBoxDom onClick={props.counterUp} btnColor={props.btnColor}>
        {props.title}
      </BlueBoxDom>
    </div>
  );
};

export default BlueBox;
