import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const scheduleStates = ["In-Progress", "Accepted"];

const BarRechart = ({ data }) => {
  console.log("BarRechart...");
  console.log(data);
  const formattedData = scheduleStates.map((scheduleState, i) => {
    return {
      [scheduleState]: data[i].data["QueryResult"]["TotalResultCount"],
    };
  });

  return (
    <BarChart
      width={500}
      height={300}
      data={formattedData}
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

export default BarRechart;
