import React, { useState } from "react";
import ChildComponant from "./ChildComponant";

const ParentComponents = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <div className="flex justify-center text-2xl font-bold">
        <h1>Parent Component</h1>
      </div>
      
        <p>The counter value is {count}</p>
        <ChildComponant count = {count} setCount = {setCount} />
      
    </>
  );
};

export default ParentComponents;