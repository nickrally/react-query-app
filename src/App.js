import React, { useState, Fragment } from "react";

import Dropdown from "./components/Dropdown/Dropdown";
import Wsapi from "./components/Rally/Wsapi";

const options = ["bar", "pie"];

export default function App() {
  const [counter, setCounter] = useState(0);
  const [selected, setSelected] = useState("bar");
  const handleSelection = (item) => {
    setSelected(item);
  };
  const handleCounterClick = () => {
    setCounter((prev) => prev + 1);
  };

  return (
    <Fragment>
      <button className="counter" onClick={handleCounterClick}>
        {counter}
      </button>
      <Dropdown options={options} handleSelection={handleSelection} />
      <Wsapi chart={selected} />
    </Fragment>
  );
}
