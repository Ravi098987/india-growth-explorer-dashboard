
import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface InsightCardProps {
  title: string;
  value: string;
  change: string;
  icon: LucideIcon;
  trend: "up" | "down" | "neutral";
}

const InsightCard = ({ title, value, change, icon: Icon, trend }: InsightCardProps) => {
  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-600">{title}</p>
            <p className="text-2xl font-bold text-gray-900">{value}</p>
            <p className={`text-sm ${
              trend === "up" ? "text-green-600" : 
              trend === "down" ? "text-red-600" : 
              "text-gray-500"
            }`}>
              {change}
            </p>
          </div>
          <div className={`p-3 rounded-lg ${
            trend === "up" ? "bg-green-100" : 
            trend === "down" ? "bg-red-100" : 
            "bg-gray-100"
          }`}>
            <Icon className={`w-6 h-6 ${
              trend === "up" ? "text-green-600" : 
              trend === "down" ? "text-red-600" : 
              "text-gray-600"
            }`} />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default InsightCard;
