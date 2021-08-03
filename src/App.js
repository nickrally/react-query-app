import React, { useState, useCallback, Fragment } from "react";

import Dropdown from "./components/Dropdown/Dropdown";
import Wsapi from "./components/Rally/Wsapi";
// import BarRechart from "./components/Chart/BarRechart";
// import PieRechart from "./components/Chart/PieRechart";
const options = ["bar", "pie"];

export default function App() {
  const [selected, setSelected] = useState("bar");
  const handleSelection = (item) => {
    setSelected(item);
  };
  const formatData = useCallback((data) => {});
  return (
    <Fragment>
      <Dropdown options={options} handleSelection={handleSelection} />
      <Wsapi chart={selected} />
    </Fragment>
  );
}
