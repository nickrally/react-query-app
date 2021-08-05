import React, { useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import Dropdown from "./components/Dropdown/Dropdown";
import Wsapi from "./components/Rally/Wsapi";

const options = ["bar", "pie"];

export default function App() {
  const [selected, setSelected] = useState("pie");
  const handleSelection = (item) => {
    setSelected(item);
  };
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Dropdown options={options} handleSelection={handleSelection} />
      <Wsapi chart={selected} />
    </QueryClientProvider>
  );
}
