
import { ResponsiveContainer } from "recharts";

interface HeatMapComponentProps {
  selectedCities: string[];
  timeRange: number[];
  metric: string;
}

const HeatMapComponent = ({ selectedCities, timeRange, metric }: HeatMapComponentProps) => {
  const generateHeatMapData = () => {
    const data = [];
    for (let year = timeRange[0]; year <= timeRange[1]; year++) {
      selectedCities.forEach((city, cityIndex) => {
        data.push({
          year,
          city,
          cityIndex,
          value: Math.floor(Math.random() * 100),
        });
      });
    }
    return data;
  };

  const data = generateHeatMapData();
  const cellSize = 40;

  const getColor = (value: number) => {
    const intensity = value / 100;
    return `rgba(59, 130, 246, ${intensity})`;
  };

  return (
    <ResponsiveContainer width="100%" height={300}>
      <div className="overflow-auto">
        <svg width={timeRange.length * cellSize + 100} height={selectedCities.length * cellSize + 50}>
          {/* Y-axis labels (cities) */}
          {selectedCities.map((city, index) => (
            <text
              key={city}
              x={90}
              y={index * cellSize + cellSize / 2 + 20}
              textAnchor="end"
              fontSize="12"
              fill="#666"
            >
              {city}
            </text>
          ))}
          
          {/* X-axis labels (years) */}
          {Array.from({ length: timeRange[1] - timeRange[0] + 1 }, (_, i) => timeRange[0] + i).map((year, index) => (
            <text
              key={year}
              x={100 + index * cellSize + cellSize / 2}
              y={15}
              textAnchor="middle"
              fontSize="12"
              fill="#666"
            >
              {year}
            </text>
          ))}

          {/* Heat map cells */}
          {data.map((point, index) => (
            <rect
              key={index}
              x={100 + (point.year - timeRange[0]) * cellSize}
              y={20 + point.cityIndex * cellSize}
              width={cellSize - 1}
              height={cellSize - 1}
              fill={getColor(point.value)}
              stroke="#fff"
              strokeWidth={1}
            />
          ))}
        </svg>
      </div>
    </ResponsiveContainer>
  );
};

export default HeatMapComponent;
