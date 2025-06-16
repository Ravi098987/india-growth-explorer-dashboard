
import {
  BarChart,
  TrendingUp,
  Heart,
  Leaf,
  Users,
  Scale,
  Building2,
  DollarSign,
  Globe,
  Activity,
  Shield,
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
    title: "Economic Indicators",
    icon: TrendingUp,
    items: [
      "GDP (Gross Domestic Product)",
      "GNI (Gross National Income)", 
      "GDP per Capita",
      "Unemployment Rate",
      "Inflation Rate",
      "Foreign Direct Investment",
      "Export/Import Ratios",
      "Public Debt as % of GDP"
    ],
    color: "text-blue-600",
    bgColor: "bg-blue-50 dark:bg-blue-900/20"
  },
  {
    title: "Social Development",
    icon: Users,
    items: [
      "Human Development Index (HDI)",
      "Life Expectancy",
      "Infant Mortality Rate",
      "Literacy Rate",
      "Education Index",
      "Gender Inequality Index",
      "Population Growth Rate",
      "Urban Population %"
    ],
    color: "text-purple-600",
    bgColor: "bg-purple-50 dark:bg-purple-900/20"
  },
  {
    title: "Health & Well-being",
    icon: Heart,
    items: [
      "Healthcare Expenditure per Capita",
      "Physicians per 1000 people",
      "Hospital Beds per 1000 people",
      "Access to Clean Water %",
      "Vaccination Coverage %"
    ],
    color: "text-red-600",
    bgColor: "bg-red-50 dark:bg-red-900/20"
  },
  {
    title: "Environment & Sustainability",
    icon: Leaf,
    items: [
      "CO2 Emissions per Capita",
      "Renewable Energy %",
      "Forest Area %",
      "Air Quality Index",
      "Environmental Performance Index"
    ],
    color: "text-green-600",
    bgColor: "bg-green-50 dark:bg-green-900/20"
  },
  {
    title: "Governance & Infrastructure",
    icon: Building2,
    items: [
      "Corruption Perceptions Index",
      "Internet Penetration %",
      "Mobile Phone Subscriptions",
      "Infrastructure Quality Index",
      "Political Stability Index"
    ],
    color: "text-amber-600",
    bgColor: "bg-amber-50 dark:bg-amber-900/20"
  },
  {
    title: "Economic Equality",
    icon: Scale,
    items: [
      "Gini Coefficient (Income Inequality)",
      "Poverty Rate",
      "Social Protection Coverage"
    ],
    color: "text-indigo-600",
    bgColor: "bg-indigo-50 dark:bg-indigo-900/20"
  },
];

interface AppSidebarProps {
  selectedMetric: string;
  setSelectedMetric: (metric: string) => void;
}

const AppSidebar = ({ selectedMetric, setSelectedMetric }: AppSidebarProps) => {
  const convertToKey = (item: string) => {
    return item.toLowerCase()
      .replace(/[()%&]/g, '')
      .replace(/\s+/g, '-')
      .replace(/--+/g, '-')
      .replace(/^-|-$/g, '');
  };

  return (
    <Sidebar className="border-r border-gray-200 dark:border-gray-700 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm">
      <SidebarContent className="scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-600">
        <SidebarGroup>
          <SidebarGroupLabel className="text-xl font-bold mb-6 text-gray-900 dark:text-gray-100 px-4">
            Development Metrics
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-4">
              {metrics.map((category) => (
                <SidebarMenuItem key={category.title}>
                  <div className="w-full">
                    <div className={`flex items-center space-x-3 mb-3 p-3 rounded-lg ${category.bgColor} border border-gray-200/50 dark:border-gray-700/50`}>
                      <category.icon className={`w-5 h-5 ${category.color}`} />
                      <span className="font-bold text-gray-900 dark:text-gray-100 text-sm">{category.title}</span>
                      <div className={`ml-auto w-2 h-2 rounded-full ${category.color.replace('text-', 'bg-')}`}></div>
                    </div>
                    <div className="ml-3 space-y-1">
                      {category.items.map((item) => {
                        const itemKey = convertToKey(item);
                        const isSelected = selectedMetric === itemKey;
                        return (
                          <SidebarMenuButton
                            key={item}
                            onClick={() => setSelectedMetric(itemKey)}
                            className={`w-full text-left text-xs p-3 rounded-md transition-all duration-200 border ${
                              isSelected
                                ? `${category.color} ${category.bgColor} font-semibold border-l-4 ${category.color.replace('text-', 'border-')} shadow-sm`
                                : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800/50 border-transparent'
                            }`}
                          >
                            <div className="flex items-center space-x-2">
                              <div className={`w-1.5 h-1.5 rounded-full ${isSelected ? category.color.replace('text-', 'bg-') : 'bg-gray-300 dark:bg-gray-600'}`}></div>
                              <span className="leading-tight">{item}</span>
                            </div>
                          </SidebarMenuButton>
                        );
                      })}
                    </div>
                  </div>
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
