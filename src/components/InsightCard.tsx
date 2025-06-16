
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, TrendingDown, Minus } from "lucide-react";

interface InsightCardProps {
  title: string;
  value: string;
  change: string;
  trend: "up" | "down" | "neutral";
  description?: string;
}

const InsightCard = ({ title, value, change, trend, description }: InsightCardProps) => {
  const getTrendIcon = () => {
    switch (trend) {
      case "up":
        return <TrendingUp className="w-4 h-4 text-green-600 dark:text-green-400" />;
      case "down":
        return <TrendingDown className="w-4 h-4 text-red-600 dark:text-red-400" />;
      default:
        return <Minus className="w-4 h-4 text-gray-600 dark:text-gray-400" />;
    }
  };

  const getTrendColor = () => {
    switch (trend) {
      case "up":
        return "bg-green-100 text-green-800 border-green-200 dark:bg-green-900/30 dark:text-green-300 dark:border-green-700";
      case "down":
        return "bg-red-100 text-red-800 border-red-200 dark:bg-red-900/30 dark:text-red-300 dark:border-red-700";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200 dark:bg-gray-800/50 dark:text-gray-300 dark:border-gray-600";
    }
  };

  return (
    <Card className="relative overflow-hidden bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border-gray-200/50 dark:border-gray-700/50 hover:shadow-lg transition-all duration-300 hover:scale-105">
      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-100/50 to-purple-100/50 dark:from-blue-900/30 dark:to-purple-900/30 rounded-full -translate-y-8 translate-x-8" />
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-sm font-medium text-gray-600 dark:text-gray-300">{title}</CardTitle>
          {getTrendIcon()}
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="space-y-2">
          <div className="text-2xl font-bold text-gray-900 dark:text-white">{value}</div>
          <div className="flex items-center space-x-2">
            <Badge variant="secondary" className={`text-xs ${getTrendColor()}`}>
              {change}
            </Badge>
            {description && (
              <span className="text-xs text-gray-500 dark:text-gray-400">{description}</span>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default InsightCard;
