
import {
  BarChart,
  TrendingUp,
  Heart,
  Leaf,
  Users,
  Scale,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

const metrics = [
  {
    title: "Economic",
    icon: TrendingUp,
    items: ["GDP Growth", "Per Capita Income", "Employment Rate", "Industrial Output"],
    color: "text-blue-600"
  },
  {
    title: "Social",
    icon: Users,
    items: ["Literacy Rate", "Education Index", "Urban Population", "Internet Penetration"],
    color: "text-purple-600"
  },
  {
    title: "Health",
    icon: Heart,
    items: ["Life Expectancy", "Infant Mortality", "Healthcare Access", "Nutrition Index"],
    color: "text-red-600"
  },
  {
    title: "Environment",
    icon: Leaf,
    items: ["Air Quality", "Water Quality", "Green Coverage", "Renewable Energy"],
    color: "text-green-600"
  },
  {
    title: "Governance",
    icon: Scale,
    items: ["Digital India Index", "Transparency Score", "Ease of Business", "Corruption Index"],
    color: "text-amber-600"
  },
  {
    title: "Equality",
    icon: BarChart,
    items: ["Gini Coefficient", "Gender Parity", "Income Distribution", "Social Mobility"],
    color: "text-indigo-600"
  },
];

interface AppSidebarProps {
  selectedMetric: string;
  setSelectedMetric: (metric: string) => void;
}

const AppSidebar = ({ selectedMetric, setSelectedMetric }: AppSidebarProps) => {
  return (
    <Sidebar className="border-r border-gray-200">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-lg font-semibold mb-4">
            Metric Categories
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {metrics.map((category) => (
                <SidebarMenuItem key={category.title}>
                  <SidebarMenuButton className="w-full">
                    <div className="w-full">
                      <div className="flex items-center space-x-3 mb-2">
                        <category.icon className={`w-5 h-5 ${category.color}`} />
                        <span className="font-medium">{category.title}</span>
                      </div>
                      <div className="ml-8 space-y-1">
                        {category.items.map((item) => (
                          <button
                            key={item}
                            onClick={() => setSelectedMetric(item.toLowerCase().replace(/\s+/g, '-'))}
                            className={`block text-left text-sm text-gray-600 hover:text-gray-900 transition-colors ${
                              selectedMetric === item.toLowerCase().replace(/\s+/g, '-') 
                                ? 'text-blue-600 font-medium' 
                                : ''
                            }`}
                          >
                            {item}
                          </button>
                        ))}
                      </div>
                    </div>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};

export default AppSidebar;
