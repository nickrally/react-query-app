import { PieChart, Pie, Cell, Legend } from "recharts";

//Pie chart takes data formatted like this:
/* const data = [
  { name: "In Progress", value: 2 },
  { name: "Accepted", value: 1 },
]; */

const COLORS = ["#0088FE", "#00C49F"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  entry,
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);
  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const scheduleStates = ["In-Progress", "Accepted"];

const RallyPieChart = ({ data }) => {
  const formattedData = scheduleStates.map((scheduleState, i) => {
    return {
      name: scheduleState,
      value: data[i].data["QueryResult"]["TotalResultCount"],
    };
  });

  return (
    <PieChart width={400} height={400}>
      <Pie
        data={formattedData}
        cx="50%"
        cy="50%"
        labelLine={false}
        label={renderCustomizedLabel}
        outerRadius={80}
        fill="#8884d8"
        dataKey="value"
        nameKey="name"
      >
        {formattedData.map((entry, index) => (
          <Cell key={index} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Legend />
    </PieChart>
  );
};

export default RallyPieChart;
