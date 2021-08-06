import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

/* const datax = [
  {
    inProgress: 1000,
    accepted: 500,
  },
]; */

const RallyBarChart = ({ data }) => {
  console.log("BarRechart...");
  return (
    <BarChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar name="In-Progress" dataKey="In-Progress" fill="#8884d8" />
      <Bar name="Accepted" dataKey="Accepted" fill="#82ca9d" />
    </BarChart>
  );
};

export default RallyBarChart;
