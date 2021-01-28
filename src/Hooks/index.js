import React, { useState } from "react";

const Hooks = () => {
  // * You can initialize useState using an object too
  const [state, setState] = useState({ age: 25, sibling: 3 });

  // * You can also initialize a function in useState
  const [token] = useState(() => {
    const token = window.localStorage.getItem("item-token");
    return token || "default#token";
  });

  const handleClick = (val) =>
    setState({
      ...state,
      [val]: state[val] + 1,
    });

  return (
    <div>
      Today I am {state.age} Years of Age
      <div>
        <button onClick={() => handleClick("age")}>Get older! </button>
        <p>token is {token}</p>
      </div>
    </div>
  );
};

export default Hooks;
