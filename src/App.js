import React, { useState, Fragment } from "react";
import Dropdown from "./components/Dropdown/Dropdown";

const options = ["bar", "pie"];

export default function App() {
  return (
    <Fragment>
      <Dropdown options={options} />
    </Fragment>
  );
}
