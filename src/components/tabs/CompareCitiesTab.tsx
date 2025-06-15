
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
import BarChartComponent from "../charts/BarChartComponent";
import ScatterPlotComponent from "../charts/ScatterPlotComponent";

interface CompareCitiesTabProps {
  selectedMetric: string;
  selectedCities: string[];
  timeRange: number[];
}

const CompareCitiesTab = ({ selectedMetric, selectedCities, timeRange }: CompareCitiesTabProps) => {
  // Sample data for city rankings
  const cityRankings = [
    { rank: 1, city: "Mumbai", score: 85.2, change: "+2.1", status: "up" },
    { rank: 2, city: "Delhi", score: 82.7, change: "+1.5", status: "up" },
    { rank: 3, city: "Bangalore", score: 79.3, change: "-0.3", status: "down" },
    { rank: 4, city: "Chennai", score: 76.8, change: "+3.2", status: "up" },
    { rank: 5, city: "Hyderabad", score: 74.5, change: "+4.1", status: "up" },
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>City Performance Comparison</CardTitle>
          </CardHeader>
          <CardContent>
            <BarChartComponent 
              selectedCities={selectedCities}
              metric={selectedMetric}
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Correlation Analysis</CardTitle>
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

      <Card>
        <CardHeader>
          <CardTitle>City Rankings</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Rank</TableHead>
                <TableHead>City</TableHead>
                <TableHead>Score</TableHead>
                <TableHead>Change</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {cityRankings.map((city) => (
                <TableRow key={city.rank}>
                  <TableCell className="font-medium">#{city.rank}</TableCell>
                  <TableCell>{city.city}</TableCell>
                  <TableCell>{city.score}</TableCell>
                  <TableCell>
                    <span className={`${
                      city.status === "up" ? "text-green-600" : "text-red-600"
                    }`}>
                      {city.change}
                    </span>
                  </TableCell>
                  <TableCell>
                    <Badge 
                      variant={city.status === "up" ? "default" : "destructive"}
                    >
                      {city.status === "up" ? "Rising" : "Falling"}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default CompareCitiesTab;
