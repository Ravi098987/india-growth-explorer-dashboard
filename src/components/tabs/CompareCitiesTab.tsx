
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import BarChartComponent from "../charts/BarChartComponent";
import ScatterPlotComponent from "../charts/ScatterPlotComponent";
import RankingSystem from "../RankingSystem";

interface CompareCitiesTabProps {
  selectedMetric: string;
  selectedCities: string[];
  timeRange: number[];
}

const CompareCitiesTab = ({ selectedMetric, selectedCities, timeRange }: CompareCitiesTabProps) => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-gray-200/50 dark:border-gray-700/50">
          <CardHeader>
            <CardTitle className="text-gray-900 dark:text-gray-100">City Performance Comparison</CardTitle>
          </CardHeader>
          <CardContent>
            <BarChartComponent 
              selectedCities={selectedCities}
              metric={selectedMetric}
            />
          </CardContent>
        </Card>

        <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-gray-200/50 dark:border-gray-700/50">
          <CardHeader>
            <CardTitle className="text-gray-900 dark:text-gray-100">Correlation Analysis</CardTitle>
          </CardHeader>
          <CardContent>
            <ScatterPlotComponent 
              selectedCities={selectedCities}
              xMetric="GDP Growth"
              yMetric="Population"
            />
          </CardContent>
        </Card>
      </div>

      {/* Comprehensive Ranking System */}
      <RankingSystem 
        selectedMetric={selectedMetric}
        selectedCities={selectedCities}
      />
    </div>
  );
};

export default CompareCitiesTab;
