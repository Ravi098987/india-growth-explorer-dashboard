
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface ScatterPlotComponentProps {
  selectedCities: string[];
  xMetric: string;
  yMetric: string;
}

const ScatterPlotComponent = ({ selectedCities, xMetric, yMetric }: ScatterPlotComponentProps) => {
  const data = selectedCities.map((city) => ({
    city,
    x: Math.floor(Math.random() * 100) + 20,
    y: Math.floor(Math.random() * 80) + 40,
  }));

  return (
    <ResponsiveContainer width="100%" height={300}>
      <ScatterChart data={data}>
        <CartesianGrid />
        <XAxis dataKey="x" name={xMetric} />
        <YAxis dataKey="y" name={yMetric} />
        <Tooltip cursor={{ strokeDasharray: "3 3" }} />
        <Scatter name="Cities" dataKey="y" fill="#3b82f6" />
      </ScatterChart>
    </ResponsiveContainer>
  );
};

export default ScatterPlotComponent;
