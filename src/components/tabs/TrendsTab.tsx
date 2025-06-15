
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import LineChartComponent from "../charts/LineChartComponent";
import HeatMapComponent from "../charts/HeatMapComponent";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

interface TrendsTabProps {
  selectedMetric: string;
  selectedCities: string[];
  timeRange: number[];
}

const TrendsTab = ({ selectedMetric, selectedCities, timeRange }: TrendsTabProps) => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Trend Analysis</h2>
        <Button>
          <Download className="w-4 h-4 mr-2" />
          Export Trends
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Multi-City Trend Comparison</CardTitle>
        </CardHeader>
        <CardContent>
          <LineChartComponent 
            selectedCities={selectedCities}
            timeRange={timeRange}
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Temporal Heatmap</CardTitle>
        </CardHeader>
        <CardContent>
          <HeatMapComponent 
            selectedCities={selectedCities}
            timeRange={timeRange}
            metric={selectedMetric}
          />
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Growth Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-green-600">+15.2%</div>
            <p className="text-sm text-gray-600">Average annual growth</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Peak Year</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-blue-600">2023</div>
            <p className="text-sm text-gray-600">Highest performance year</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Volatility</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-amber-600">Low</div>
            <p className="text-sm text-gray-600">Trend stability</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TrendsTab;
