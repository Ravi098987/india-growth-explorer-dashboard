
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

interface LineChartComponentProps {
  selectedCities: string[];
  timeRange: number[];
}

const LineChartComponent = ({ selectedCities, timeRange }: LineChartComponentProps) => {
  // Sample data generation
  const generateData = () => {
    const data = [];
    for (let year = timeRange[0]; year <= timeRange[1]; year++) {
      const dataPoint: any = { year };
      selectedCities.forEach((city, index) => {
        dataPoint[city] = Math.floor(Math.random() * 40) + 60 + (year - timeRange[0]) * 2;
      });
      data.push(dataPoint);
    }
    return data;
  };

  const data = generateData();
  const colors = ["#3b82f6", "#10b981", "#f59e0b", "#ef4444", "#8b5cf6"];

  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="year" />
        <YAxis />
        <Tooltip />
        <Legend />
        {selectedCities.map((city, index) => (
          <Line
            key={city}
            type="monotone"
            dataKey={city}
            stroke={colors[index % colors.length]}
            strokeWidth={2}
            dot={{ r: 4 }}
          />
        ))}
      </LineChart>
    </ResponsiveContainer>
  );
};

export default LineChartComponent;
