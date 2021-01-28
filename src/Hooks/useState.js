import React, { useState } from "react";

// * 🐢 setState (object merge) vs useState (object replace)
// * assume initial state is {name: "Ohans"}

// * setState({ age: 'unknown' })
// * new state object will be
// * {name: "Ohans", age: "unknown"}

// * useStateUpdater({ age: 'unknown' })
// * new state object will be
// * {age: "unknown"} - initial object is replaced
// ! {age: "unknown"} - initial state object is replaced

const Hooks = () => {
  // * You can initialize useState using an object too
  const [state, myCurrentState] = useState({ age: 25, sibling: 3 });

  // * You can also initialize state from a function in useState
  const [token] = useState(() => {
    const token = window.localStorage.getItem("item-token");
    return token || "default#token";
  });

  const handleClick = (val) =>
    myCurrentState({
      ...state,
      [val]: state[val] + 1,
    });

  // * You can also use the previous value just like in setState
  // const handleClick = (val) =>
  //   myCurrentState((previousValue) => ({
  //     ...state,
  //     [val]: previousValue[val] + 1,
  //   }));

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
