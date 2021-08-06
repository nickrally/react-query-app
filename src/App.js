import React, { useState, useCallback, useMemo, Fragment } from "react";
import Dropdown from "./components/Dropdown/Dropdown";
import WrappedWsapi from "./components/Rally/Wsapi";
import "./App.css";

export default function App() {
  const options = useMemo(() => ["bar", "pie"], []);
  const [selected, setSelected] = useState("bar");
  const [counter, setCounter] = useState(0);

  const handleSelection = useCallback((item) => {
    setSelected(item);
  }, []);

  const handleCounterClick = () => {
    setCounter((prev) => prev + 1);
  };

  return (
    <Fragment>
      <button className="counter" onClick={handleCounterClick}>
        {counter}
      </button>
      <Dropdown options={options} handleSelection={handleSelection} />
      <WrappedWsapi chart={selected} />
    </Fragment>
  );
}
