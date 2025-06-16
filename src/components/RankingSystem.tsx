
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search, ArrowUpDown, TrendingUp, TrendingDown } from "lucide-react";

interface RankingSystemProps {
  selectedMetric: string;
  selectedCities: string[];
}

const RankingSystem = ({ selectedMetric, selectedCities }: RankingSystemProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortMetric, setSortMetric] = useState("hdi");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");

  // Comprehensive city data with all metrics
  const cityData = [
    {
      city: "Mumbai",
      state: "Maharashtra",
      hdi: 0.785,
      gdp: 310000,
      gdpPerCapita: 25000,
      unemployment: 3.2,
      inflation: 4.1,
      lifeExpectancy: 72.8,
      literacy: 89.2,
      gini: 0.67,
      co2Emissions: 2.3,
      renewableEnergy: 23.5,
      internetPenetration: 78.9,
      healthcareExpenditure: 1250,
      airQuality: 45.2
    },
    {
      city: "Delhi",
      state: "Delhi",
      hdi: 0.773,
      gdp: 285000,
      gdpPerCapita: 24500,
      unemployment: 4.1,
      inflation: 4.3,
      lifeExpectancy: 71.2,
      literacy: 86.3,
      gini: 0.62,
      co2Emissions: 3.1,
      renewableEnergy: 18.7,
      internetPenetration: 82.4,
      healthcareExpenditure: 1180,
      airQuality: 32.1
    },
    {
      city: "Bangalore",
      state: "Karnataka",
      hdi: 0.768,
      gdp: 195000,
      gdpPerCapita: 22800,
      unemployment: 2.8,
      inflation: 3.9,
      lifeExpectancy: 74.1,
      literacy: 91.7,
      gini: 0.58,
      co2Emissions: 1.9,
      renewableEnergy: 31.2,
      internetPenetration: 85.6,
      healthcareExpenditure: 1320,
      airQuality: 52.8
    },
    {
      city: "Chennai",
      state: "Tamil Nadu",
      hdi: 0.761,
      gdp: 178000,
      gdpPerCapita: 21600,
      unemployment: 3.5,
      inflation: 4.0,
      lifeExpectancy: 73.5,
      literacy: 88.4,
      gini: 0.55,
      co2Emissions: 2.1,
      renewableEnergy: 35.8,
      internetPenetration: 79.3,
      healthcareExpenditure: 1420,
      airQuality: 48.6
    },
    {
      city: "Hyderabad",
      state: "Telangana",
      hdi: 0.754,
      gdp: 142000,
      gdpPerCapita: 20900,
      unemployment: 3.1,
      inflation: 3.8,
      lifeExpectancy: 72.9,
      literacy: 87.6,
      gini: 0.51,
      co2Emissions: 1.8,
      renewableEnergy: 42.3,
      internetPenetration: 81.7,
      healthcareExpenditure: 1160,
      airQuality: 54.2
    },
    {
      city: "Pune",
      state: "Maharashtra",
      hdi: 0.748,
      gdp: 89000,
      gdpPerCapita: 19800,
      unemployment: 2.9,
      inflation: 3.7,
      lifeExpectancy: 73.8,
      literacy: 90.1,
      gini: 0.49,
      co2Emissions: 1.6,
      renewableEnergy: 28.9,
      internetPenetration: 83.2,
      healthcareExpenditure: 1080,
      airQuality: 58.3
    },
    {
      city: "Kolkata",
      state: "West Bengal",
      hdi: 0.742,
      gdp: 156000,
      gdpPerCapita: 18900,
      unemployment: 4.7,
      inflation: 4.2,
      lifeExpectancy: 70.8,
      literacy: 85.2,
      gini: 0.54,
      co2Emissions: 2.4,
      renewableEnergy: 22.1,
      internetPenetration: 74.8,
      healthcareExpenditure: 950,
      airQuality: 41.7
    },
    {
      city: "Ahmedabad",
      state: "Gujarat",
      hdi: 0.736,
      gdp: 78000,
      gdpPerCapita: 18200,
      unemployment: 3.8,
      inflation: 3.9,
      lifeExpectancy: 71.9,
      literacy: 83.7,
      gini: 0.52,
      co2Emissions: 2.0,
      renewableEnergy: 38.4,
      internetPenetration: 76.5,
      healthcareExpenditure: 890,
      airQuality: 46.9
    }
  ];

  const metricInfo = {
    hdi: { label: "HDI Score", format: (val: number) => val.toFixed(3), color: "text-blue-600" },
    gdp: { label: "GDP (Cr)", format: (val: number) => `₹${(val/1000).toFixed(0)}K`, color: "text-green-600" },
    gdpPerCapita: { label: "GDP per Capita", format: (val: number) => `₹${val.toLocaleString()}`, color: "text-green-600" },
    unemployment: { label: "Unemployment %", format: (val: number) => `${val}%`, color: "text-red-600" },
    lifeExpectancy: { label: "Life Expectancy", format: (val: number) => `${val} years`, color: "text-purple-600" },
    literacy: { label: "Literacy Rate", format: (val: number) => `${val}%`, color: "text-indigo-600" },
    gini: { label: "Gini Coefficient", format: (val: number) => val.toFixed(2), color: "text-orange-600" },
    internetPenetration: { label: "Internet %", format: (val: number) => `${val}%`, color: "text-cyan-600" },
    airQuality: { label: "Air Quality", format: (val: number) => val.toFixed(1), color: "text-emerald-600" }
  };

  const filteredData = cityData.filter(city =>
    city.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
    city.state.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const sortedData = [...filteredData].sort((a, b) => {
    const aVal = a[sortMetric as keyof typeof a] as number;
    const bVal = b[sortMetric as keyof typeof b] as number;
    return sortOrder === "desc" ? bVal - aVal : aVal - bVal;
  });

  const toggleSort = () => {
    setSortOrder(sortOrder === "desc" ? "asc" : "desc");
  };

  const getRankBadgeColor = (rank: number) => {
    if (rank === 1) return "bg-yellow-500 text-white";
    if (rank === 2) return "bg-gray-400 text-white";
    if (rank === 3) return "bg-amber-600 text-white";
    return "bg-gray-200 text-gray-700";
  };

  const getTrendIcon = (value: number, metric: string) => {
    const threshold = metric === "unemployment" || metric === "gini" || metric === "co2Emissions" ? 
      value < 3 : value > 70;
    return threshold ? 
      <TrendingUp className="w-4 h-4 text-green-500" /> : 
      <TrendingDown className="w-4 h-4 text-red-500" />;
  };

  return (
    <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-gray-200/50 dark:border-gray-700/50">
      <CardHeader>
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
          <CardTitle className="text-gray-900 dark:text-gray-100">City Rankings & Performance</CardTitle>
          <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Search cities..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 w-full sm:w-64"
              />
            </div>
            <Select value={sortMetric} onValueChange={setSortMetric}>
              <SelectTrigger className="w-full sm:w-48">
                <SelectValue placeholder="Sort by metric" />
              </SelectTrigger>
              <SelectContent>
                {Object.entries(metricInfo).map(([key, info]) => (
                  <SelectItem key={key} value={key}>
                    {info.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Button variant="outline" onClick={toggleSort} className="flex items-center gap-2">
              <ArrowUpDown className="w-4 h-4" />
              {sortOrder === "desc" ? "Desc" : "Asc"}
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-16">Rank</TableHead>
                <TableHead>City</TableHead>
                <TableHead>State</TableHead>
                <TableHead className="text-right">HDI</TableHead>
                <TableHead className="text-right">GDP per Capita</TableHead>
                <TableHead className="text-right">Literacy %</TableHead>
                <TableHead className="text-right">Air Quality</TableHead>
                <TableHead className="text-right">Selected Metric</TableHead>
                <TableHead className="w-16">Trend</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {sortedData.map((city, index) => {
                const rank = index + 1;
                const selectedMetricInfo = metricInfo[sortMetric as keyof typeof metricInfo];
                const selectedMetricValue = city[sortMetric as keyof typeof city] as number;
                
                return (
                  <TableRow key={city.city} className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                    <TableCell>
                      <Badge className={getRankBadgeColor(rank)}>
                        #{rank}
                      </Badge>
                    </TableCell>
                    <TableCell className="font-medium">{city.city}</TableCell>
                    <TableCell className="text-gray-600 dark:text-gray-400">{city.state}</TableCell>
                    <TableCell className="text-right font-semibold text-blue-600 dark:text-blue-400">
                      {city.hdi.toFixed(3)}
                    </TableCell>
                    <TableCell className="text-right text-green-600 dark:text-green-400">
                      ₹{city.gdpPerCapita.toLocaleString()}
                    </TableCell>
                    <TableCell className="text-right text-indigo-600 dark:text-indigo-400">
                      {city.literacy}%
                    </TableCell>
                    <TableCell className="text-right text-emerald-600 dark:text-emerald-400">
                      {city.airQuality.toFixed(1)}
                    </TableCell>
                    <TableCell className={`text-right font-semibold ${selectedMetricInfo.color}`}>
                      {selectedMetricInfo.format(selectedMetricValue)}
                    </TableCell>
                    <TableCell>
                      {getTrendIcon(selectedMetricValue, sortMetric)}
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </div>
        
        {/* Summary Statistics */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
            <div className="text-sm text-blue-600 dark:text-blue-400">Average HDI</div>
            <div className="text-2xl font-bold text-blue-700 dark:text-blue-300">
              {(sortedData.reduce((acc, city) => acc + city.hdi, 0) / sortedData.length).toFixed(3)}
            </div>
          </div>
          <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
            <div className="text-sm text-green-600 dark:text-green-400">Highest GDP per Capita</div>
            <div className="text-2xl font-bold text-green-700 dark:text-green-300">
              ₹{Math.max(...sortedData.map(city => city.gdpPerCapita)).toLocaleString()}
            </div>
          </div>
          <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
            <div className="text-sm text-purple-600 dark:text-purple-400">Best Life Expectancy</div>
            <div className="text-2xl font-bold text-purple-700 dark:text-purple-300">
              {Math.max(...sortedData.map(city => city.lifeExpectancy)).toFixed(1)} years
            </div>
          </div>
          <div className="p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
            <div className="text-sm text-orange-600 dark:text-orange-400">Lowest Inequality</div>
            <div className="text-2xl font-bold text-orange-700 dark:text-orange-300">
              {Math.min(...sortedData.map(city => city.gini)).toFixed(2)}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default RankingSystem;
