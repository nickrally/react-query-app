import React, { useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import Dropdown from "./components/Dropdown/Dropdown";
import Wsapi from "./components/Rally/Wsapi";
import RallyBarChart from "./components/Chart/RallyBarChart";
import RallyPieChart from "./components/Chart/RallyPieChart";
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
      {selected === "pie" && <RallyPieChart data={data} />}
      {selected === "bar" && <RallyBarChart data={data} />}
    </QueryClientProvider>
  );
}
