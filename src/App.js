import React, { useState, useCallback, Fragment } from "react";

import Dropdown from "./components/Dropdown/Dropdown";
import Wsapi from "./components/Rally/Wsapi";

const options = ["bar", "pie"];

export default function App() {
  console.log("App...");
  const [selected, setSelected] = useState("bar");
  const handleSelection = (item) => {
    setSelected(item);
  };

  return (
    <Fragment>
      <Dropdown options={options} handleSelection={handleSelection} />
      <Wsapi chart={selected} />
    </Fragment>
  );
}
