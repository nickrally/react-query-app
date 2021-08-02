import React, { useState, useEffect, Fragment } from "react";
import BarRechart from "./components/Chart/BarRechart";
import PieRechart from "./components/Chart/PieRechart";
import Dropdown from "./components/Dropdown/Dropdown";

const options = ["bar", "pie"];

export default function App() {
  const [selected, setSelected] = useState();
  const handleSelection = (item) => {
    setSelected(item);
  };

  return (
    <Fragment>
      <Dropdown options={options} handleSelection={handleSelection} />
      {selected === "bar" && <BarRechart />}
      {selected === "pie" && <PieRechart />}
    </Fragment>
  );
}
