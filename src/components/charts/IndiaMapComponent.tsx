
import { Card } from "@/components/ui/card";

interface IndiaMapComponentProps {
  selectedMetric: string;
  selectedCities: string[];
}

const IndiaMapComponent = ({ selectedMetric, selectedCities }: IndiaMapComponentProps) => {
  return (
    <div className="w-full h-96 bg-gradient-to-br from-blue-50 to-green-50 rounded-lg flex items-center justify-center">
      <div className="text-center">
        <div className="w-32 h-32 mx-auto mb-4 bg-white rounded-lg shadow-md flex items-center justify-center">
          <svg viewBox="0 0 100 100" className="w-24 h-24 text-blue-600">
            {/* Simplified India map outline */}
            <path
              d="M20,20 L20,80 L35,85 L50,75 L65,80 L80,70 L80,30 L70,20 L50,25 L35,15 Z"
              fill="currentColor"
              opacity="0.6"
            />
            {/* Sample city markers */}
            {selectedCities.slice(0, 5).map((city, index) => (
              <circle
                key={city}
                cx={30 + index * 10}
                cy={40 + Math.random() * 20}
                r="2"
                fill="#ef4444"
                className="animate-pulse"
              />
            ))}
          </svg>
        </div>
        <h3 className="text-lg font-medium text-gray-700 mb-2">India Choropleth Map</h3>
        <p className="text-sm text-gray-500">
          Interactive map showing {selectedMetric} distribution across states
        </p>
        <div className="mt-4 flex justify-center space-x-4">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-blue-200 rounded"></div>
            <span className="text-xs text-gray-600">Low</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-blue-400 rounded"></div>
            <span className="text-xs text-gray-600">Medium</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-blue-600 rounded"></div>
            <span className="text-xs text-gray-600">High</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndiaMapComponent;
