import React, { useState } from "react";
import BlueBox from "./BlueBox";

const PageTwo = () => {
  const [count, setCount] = useState(0);
  const countUpThree = () => {
    setCount(count + 3);
  };

  return (
    <>
      <div>PageTwo</div>
      <BlueBox title="오" btnColor="red" count={count} countUp={countUpThree} />
    </>
  );
};

export default PageTwo;
