import React from "react";
import BlueBox from "./BlueBox";

const PageOne = () => {
  let count = 0;
  const counterUp = () => {
    count = count + 1;
    console.log(count);
  };
  return (
    <>
      <div>PageOne</div>
      <BlueBox
        title="button"
        btnColor="red"
        count={count}
        counterUp={counterUp}
      />
    </>
  );
};

export default PageOne;
