
interface CorrelationMatrixProps {
  selectedCities: string[];
}

const CorrelationMatrix = ({ selectedCities }: CorrelationMatrixProps) => {
  const metrics = ["GDP", "Education", "Health", "Environment", "Digital"];
  
  const generateCorrelation = () => Math.random() * 2 - 1; // -1 to 1
  
  const getColor = (value: number) => {
    const intensity = Math.abs(value);
    if (value > 0) {
      return `rgba(34, 197, 94, ${intensity})`; // Green for positive
    } else {
      return `rgba(239, 68, 68, ${intensity})`; // Red for negative
    }
  };

  return (
    <div className="w-full overflow-auto">
      <div className="grid grid-cols-6 gap-1 text-xs">
        {/* Header row */}
        <div></div>
        {metrics.map((metric) => (
          <div key={metric} className="text-center font-medium p-2">
            {metric}
          </div>
        ))}
        
        {/* Data rows */}
        {metrics.map((rowMetric) => (
          <div key={rowMetric} className="contents">
            <div className="font-medium p-2 text-right">{rowMetric}</div>
            {metrics.map((colMetric) => {
              const value = rowMetric === colMetric ? 1 : generateCorrelation();
              return (
                <div
                  key={`${rowMetric}-${colMetric}`}
                  className="p-2 text-center text-white font-medium rounded"
                  style={{ backgroundColor: getColor(value) }}
                >
                  {value.toFixed(2)}
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CorrelationMatrix;
