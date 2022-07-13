import React, { useState } from "react";
import BlueBox from "./BlueBox";

const PageOne = () => {
  const [count, setCount] = useState(0);
  const countUpOne = () => {
    setCount(count + 1);
  };

  return (
    <>
      <div>PageOne</div>
      <BlueBox
        title="button"
        btnColor="blue"
        count={count}
        countUp={countUpOne}
      />
    </>
  );
};

export default PageOne;
