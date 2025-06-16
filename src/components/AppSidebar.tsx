
import {
  BarChart,
  TrendingUp,
  Heart,
  Leaf,
  Users,
  Scale,
  Building2,
  DollarSign,
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
    color: "text-blue-600"
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
    color: "text-purple-600"
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
    color: "text-red-600"
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
    color: "text-green-600"
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
    color: "text-amber-600"
  },
  {
    title: "Economic Equality",
    icon: DollarSign,
    items: [
      "Gini Coefficient (Income Inequality)",
      "Poverty Rate",
      "Social Protection Coverage"
    ],
    color: "text-indigo-600"
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
    <Sidebar className="border-r border-gray-200 dark:border-gray-700 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
      <SidebarContent className="scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-600">
        <SidebarGroup>
          <SidebarGroupLabel className="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-100">
            Development Metrics
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-2">
              {metrics.map((category) => (
                <SidebarMenuItem key={category.title}>
                  <SidebarMenuButton className="w-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                    <div className="w-full">
                      <div className="flex items-center space-x-3 mb-3 p-2 rounded-lg bg-gray-50 dark:bg-gray-800/50">
                        <category.icon className={`w-5 h-5 ${category.color}`} />
                        <span className="font-semibold text-gray-900 dark:text-gray-100">{category.title}</span>
                      </div>
                      <div className="ml-2 space-y-1">
                        {category.items.map((item) => {
                          const itemKey = convertToKey(item);
                          const isSelected = selectedMetric === itemKey;
                          return (
                            <button
                              key={item}
                              onClick={() => setSelectedMetric(itemKey)}
                              className={`block text-left text-sm w-full p-2 rounded transition-all duration-200 ${
                                isSelected
                                  ? `${category.color} bg-blue-50 dark:bg-blue-900/30 font-medium border-l-3 border-blue-500`
                                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800/50'
                              }`}
                            >
                              {item}
                            </button>
                          );
                        })}
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
