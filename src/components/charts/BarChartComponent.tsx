
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
    <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-gray-200/50 shadow-sm">
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-gray-800">City Comparison</h3>
        <p className="text-sm text-gray-500">Comparing {metric} across selected cities</p>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          <XAxis 
            dataKey="city" 
            tick={{ fontSize: 12, fill: '#6b7280' }}
            stroke="#9ca3af"
          />
          <YAxis 
            tick={{ fontSize: 12, fill: '#6b7280' }}
            stroke="#9ca3af"
          />
          <Tooltip 
            contentStyle={{
              backgroundColor: 'white',
              border: '1px solid #e5e7eb',
              borderRadius: '8px',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
            }}
          />
          <Legend />
          <Bar 
            dataKey="value" 
            fill="url(#colorValue)" 
            name="Current Value"
            radius={[4, 4, 0, 0]}
          />
          <Bar 
            dataKey="growth" 
            fill="url(#colorGrowth)" 
            name="Growth %"
            radius={[4, 4, 0, 0]}
          />
          <defs>
            <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity={0.9}/>
              <stop offset="100%" stopColor="#1d4ed8" stopOpacity={0.7}/>
            </linearGradient>
            <linearGradient id="colorGrowth" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#10b981" stopOpacity={0.9}/>
              <stop offset="100%" stopColor="#059669" stopOpacity={0.7}/>
            </linearGradient>
          </defs>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarChartComponent;
