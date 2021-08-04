import React, { useState, useCallback, Fragment } from "react";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import Dropdown from "./components/Dropdown/Dropdown";
import Wsapi from "./components/Rally/Wsapi";
import BarRechart from "./components/Chart/BarRechart";
import PieRechart from "./components/Chart/PieRechart";
const options = ["bar", "pie"];

export default function App() {
  const [selected, setSelected] = useState("pie");
  const [data, setData] = useState([]);
  const handleSelection = (item) => {
    setSelected(item);
  };
  const queryClient = new QueryClient();
  const getData = (response) => {
    setData(response);
  };
  return (
    <QueryClientProvider client={queryClient}>
      <Dropdown options={options} handleSelection={handleSelection} />
      <Wsapi getData={getData} />
      {selected === "pie" && <PieRechart data={data} />}
      {selected === "bar" && <BarRechart data={data} />}
    </QueryClientProvider>
  );
}
