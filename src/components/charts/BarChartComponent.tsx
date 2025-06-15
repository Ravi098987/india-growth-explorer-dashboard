
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

interface BarChartComponentProps {
  selectedCities: string[];
  metric: string;
}

const BarChartComponent = ({ selectedCities, metric }: BarChartComponentProps) => {
  const data = selectedCities.map((city) => ({
    city,
    value: Math.floor(Math.random() * 40) + 60,
    growth: Math.floor(Math.random() * 20) + 5,
  }));

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="city" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="value" fill="#3b82f6" name="Current Value" />
        <Bar dataKey="growth" fill="#10b981" name="Growth %" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BarChartComponent;
