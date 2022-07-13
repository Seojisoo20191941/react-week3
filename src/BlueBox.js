import React, { useState } from "react";
import styled from "styled-components";

const BlueBoxDom = styled.div`
  height: 50px;
  width: 100px;
  background-color: blue;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;

const BlueBox = () => {
  const [count, setCount] = useState(0);

  //   const counterUp = () => {
  //     setCount(count + 1);
  //   };

  return (
    <div>
      <span>Counter:{count}</span>

      <BlueBoxDom onClick={() => setCount((count) => count + 1)}>
        버튼
      </BlueBoxDom>
    </div>
  );
};

export default BlueBox;
