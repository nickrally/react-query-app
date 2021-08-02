import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  {
    inProgress: 1000,
    released: 500,
  },
];

const BarRechart = () => {
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
      <Bar name="In Progress" dataKey="inProgress" fill="#8884d8" />
      <Bar name="Released" dataKey="released" fill="#82ca9d" />
    </BarChart>
  );
};

export default BarRechart;
