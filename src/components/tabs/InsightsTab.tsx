
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Lightbulb, Award, AlertTriangle, Target } from "lucide-react";
import CorrelationMatrix from "../charts/CorrelationMatrix";

interface InsightsTabProps {
  selectedMetric: string;
  selectedCities: string[];
  timeRange: number[];
}

const InsightsTab = ({ selectedMetric, selectedCities, timeRange }: InsightsTabProps) => {
  const insights = [
    {
      type: "key-finding",
      icon: Lightbulb,
      title: "Key Finding",
      description: "Cities with higher digital infrastructure show 23% better economic growth",
      impact: "High",
      color: "blue"
    },
    {
      type: "achievement",
      icon: Award,
      title: "Achievement",
      description: "Mumbai leads in sustainable development with 85% green energy adoption",
      impact: "Medium",
      color: "green"
    },
    {
      type: "concern",
      icon: AlertTriangle,
      title: "Area of Concern",
      description: "Air quality deterioration in 3 major metropolitan areas",
      impact: "High",
      color: "red"
    },
    {
      type: "opportunity",
      icon: Target,
      title: "Opportunity",
      description: "Potential for 40% improvement in healthcare accessibility",
      impact: "Medium",
      color: "amber"
    }
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">AI-Generated Insights</h3>
          {insights.map((insight, index) => (
            <Card key={index} className="border-l-4" style={{
              borderLeftColor: insight.color === 'blue' ? '#3b82f6' :
                              insight.color === 'green' ? '#10b981' :
                              insight.color === 'red' ? '#ef4444' : '#f59e0b'
            }}>
              <CardContent className="pt-4">
                <div className="flex items-start space-x-3">
                  <insight.icon className={`w-5 h-5 mt-1 ${
                    insight.color === 'blue' ? 'text-blue-600' :
                    insight.color === 'green' ? 'text-green-600' :
                    insight.color === 'red' ? 'text-red-600' : 'text-amber-600'
                  }`} />
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium">{insight.title}</h4>
                      <Badge variant={insight.impact === 'High' ? 'destructive' : 'secondary'}>
                        {insight.impact} Impact
                      </Badge>
                    </div>
                    <p className="text-sm text-gray-600">{insight.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Metric Correlation Matrix</CardTitle>
          </CardHeader>
          <CardContent>
            <CorrelationMatrix selectedCities={selectedCities} />
          </CardContent>
        </Card>
      </div>

      {/* Key Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">HDI Score</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-blue-600">0.745</div>
            <p className="text-sm text-gray-600">National average</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Gini Coefficient</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-orange-600">0.472</div>
            <p className="text-sm text-gray-600">Income inequality</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Digital Index</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-green-600">73.2</div>
            <p className="text-sm text-gray-600">Out of 100</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Sustainability</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-teal-600">68.5</div>
            <p className="text-sm text-gray-600">ESG Score</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default InsightsTab;
