
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, TrendingDown, Users, Building } from "lucide-react";
import LineChartComponent from "../charts/LineChartComponent";
import BarChartComponent from "../charts/BarChartComponent";
import IndiaMapComponent from "../charts/IndiaMapComponent";
import InsightCard from "../InsightCard";

interface OverviewTabProps {
  selectedMetric: string;
  selectedCities: string[];
  timeRange: number[];
}

const OverviewTab = ({ selectedMetric, selectedCities, timeRange }: OverviewTabProps) => {
  const insights = [
    {
      title: "Top Performing City",
      value: "Mumbai",
      change: "+15.2%",
      icon: TrendingUp,
      trend: "up" as const,
    },
    {
      title: "Fastest Growing",
      value: "Pune",
      change: "+23.1%",
      icon: TrendingUp,
      trend: "up" as const,
    },
    {
      title: "Total Cities",
      value: selectedCities.length.toString(),
      change: "Selected",
      icon: Building,
      trend: "neutral" as const,
    },
    {
      title: "National Average",
      value: "67.3",
      change: "+2.4%",
      icon: Users,
      trend: "up" as const,
    },
  ];

  return (
    <div className="space-y-6">
      {/* Key Insights */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {insights.map((insight, index) => (
          <InsightCard key={index} {...insight} />
        ))}
      </div>

      {/* Main Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Trend Analysis</CardTitle>
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
            <CardTitle>City Comparison</CardTitle>
          </CardHeader>
          <CardContent>
            <BarChartComponent 
              selectedCities={selectedCities}
              metric={selectedMetric}
            />
          </CardContent>
        </Card>
      </div>

      {/* India Map */}
      <Card>
        <CardHeader>
          <CardTitle>Geographic Distribution</CardTitle>
        </CardHeader>
        <CardContent>
          <IndiaMapComponent 
            selectedMetric={selectedMetric}
            selectedCities={selectedCities}
          />
        </CardContent>
      </Card>
    </div>
  );
};

export default OverviewTab;
