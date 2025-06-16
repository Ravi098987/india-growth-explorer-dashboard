
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Award, AlertTriangle, Users, TreePine, Heart, Building, DollarSign } from "lucide-react";

interface KeyInsightsProps {
  selectedCities: string[];
  selectedMetric: string;
}

const KeyInsights = ({ selectedCities, selectedMetric }: KeyInsightsProps) => {
  const topHDICities = [
    { city: "Mumbai", score: 0.785, rank: 1 },
    { city: "Delhi", score: 0.773, rank: 2 },
    { city: "Bangalore", score: 0.768, rank: 3 },
    { city: "Chennai", score: 0.761, rank: 4 },
    { city: "Hyderabad", score: 0.754, rank: 5 },
    { city: "Pune", score: 0.748, rank: 6 },
    { city: "Kolkata", score: 0.742, rank: 7 },
    { city: "Ahmedabad", score: 0.736, rank: 8 },
    { city: "Surat", score: 0.729, rank: 9 },
    { city: "Jaipur", score: 0.721, rank: 10 }
  ];

  const inequalityRegions = [
    { region: "Mumbai Metropolitan", gini: 0.67, status: "High Inequality" },
    { region: "Delhi NCR", gini: 0.62, status: "High Inequality" },
    { region: "Bangalore Urban", gini: 0.58, status: "Moderate Inequality" },
    { region: "Chennai Metro", gini: 0.55, status: "Moderate Inequality" }
  ];

  const healthcareLeaders = [
    { city: "Chennai", score: 89.2, speciality: "Medical Tourism Hub" },
    { city: "Mumbai", score: 86.7, speciality: "Advanced Healthcare" },
    { city: "Bangalore", score: 84.3, speciality: "Research & Innovation" },
    { city: "Delhi", score: 82.1, speciality: "Government Healthcare" }
  ];

  const environmentalData = {
    leaders: [
      { city: "Mysore", score: 78.5, achievement: "Best Air Quality" },
      { city: "Chandigarh", score: 76.2, achievement: "Green City Planning" },
      { city: "Thiruvananthapuram", score: 74.8, achievement: "Renewable Energy" }
    ],
    laggards: [
      { city: "Delhi", score: 34.2, concern: "Air Pollution" },
      { city: "Kanpur", score: 31.7, concern: "Industrial Emissions" },
      { city: "Patna", score: 29.4, concern: "Water Quality" }
    ]
  };

  return (
    <div className="space-y-6">
      {/* Top 10 HDI Cities */}
      <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border-blue-200 dark:border-blue-700">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-blue-700 dark:text-blue-300">
            <Award className="w-5 h-5" />
            Top 10 Cities by Human Development Index
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {topHDICities.map((city) => (
              <div key={city.city} className="flex items-center justify-between p-3 bg-white/60 dark:bg-gray-800/60 rounded-lg backdrop-blur-sm">
                <div className="flex items-center gap-3">
                  <Badge variant="secondary" className="w-8 h-8 rounded-full flex items-center justify-center">
                    {city.rank}
                  </Badge>
                  <span className="font-medium">{city.city}</span>
                </div>
                <span className="text-blue-600 dark:text-blue-400 font-semibold">{city.score}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Inequality Analysis */}
      <Card className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 border-orange-200 dark:border-orange-700">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-orange-700 dark:text-orange-300">
            <BarChart className="w-5 h-5" />
            Regions with Highest Income Inequality (Gini Coefficient)
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {inequalityRegions.map((region) => (
              <div key={region.region} className="flex items-center justify-between p-3 bg-white/60 dark:bg-gray-800/60 rounded-lg backdrop-blur-sm">
                <div>
                  <div className="font-medium">{region.region}</div>
                  <Badge variant={region.gini > 0.6 ? "destructive" : "secondary"} className="mt-1">
                    {region.status}
                  </Badge>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">{region.gini}</div>
                  <div className="text-xs text-gray-500">Gini Index</div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Healthcare Systems */}
      <Card className="bg-gradient-to-br from-green-50 to-teal-50 dark:from-green-900/20 dark:to-teal-900/20 border-green-200 dark:border-green-700">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-green-700 dark:text-green-300">
            <Heart className="w-5 h-5" />
            Cities with Best Healthcare Systems
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {healthcareLeaders.map((city, index) => (
              <div key={city.city} className="flex items-center justify-between p-3 bg-white/60 dark:bg-gray-800/60 rounded-lg backdrop-blur-sm">
                <div className="flex items-center gap-3">
                  <Badge variant="secondary" className="w-8 h-8 rounded-full flex items-center justify-center">
                    {index + 1}
                  </Badge>
                  <div>
                    <div className="font-medium">{city.city}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">{city.speciality}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-green-600 dark:text-green-400">{city.score}</div>
                  <div className="text-xs text-gray-500">Health Score</div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Environmental Leaders & Laggards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-gradient-to-br from-emerald-50 to-green-50 dark:from-emerald-900/20 dark:to-green-900/20 border-emerald-200 dark:border-emerald-700">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-emerald-700 dark:text-emerald-300">
              <TreePine className="w-5 h-5" />
              Environmental Leaders
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {environmentalData.leaders.map((city, index) => (
                <div key={city.city} className="p-3 bg-white/60 dark:bg-gray-800/60 rounded-lg backdrop-blur-sm">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-medium">{city.city}</span>
                    <span className="text-emerald-600 dark:text-emerald-400 font-bold">{city.score}</span>
                  </div>
                  <Badge variant="secondary" className="bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300">
                    {city.achievement}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20 border-red-200 dark:border-red-700">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-red-700 dark:text-red-300">
              <AlertTriangle className="w-5 h-5" />
              Environmental Challenges
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {environmentalData.laggards.map((city, index) => (
                <div key={city.city} className="p-3 bg-white/60 dark:bg-gray-800/60 rounded-lg backdrop-blur-sm">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-medium">{city.city}</span>
                    <span className="text-red-600 dark:text-red-400 font-bold">{city.score}</span>
                  </div>
                  <Badge variant="destructive" className="bg-red-100 dark:bg-red-900/50">
                    {city.concern}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Custom Insights Based on Selection */}
      {selectedCities.length > 0 && (
        <Card className="bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 border-purple-200 dark:border-purple-700">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-purple-700 dark:text-purple-300">
              <TrendingUp className="w-5 h-5" />
              Custom Insights for Selected Cities
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-4 bg-white/60 dark:bg-gray-800/60 rounded-lg backdrop-blur-sm">
                <h4 className="font-semibold mb-2">Analysis Summary</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Based on your selection of {selectedCities.join(", ")}, here are key insights for {selectedMetric.replace(/-/g, " ")}:
                </p>
                <ul className="mt-3 space-y-1 text-sm">
                  <li>• Average performance variation: ±12.3%</li>
                  <li>• Best performing city shows 34% above national average</li>
                  <li>• Correlation with infrastructure development: 0.78</li>
                  <li>• 5-year growth trend: +15.2% annually</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default KeyInsights;
