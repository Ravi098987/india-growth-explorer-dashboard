
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import OverviewTab from "./tabs/OverviewTab";
import CompareCitiesTab from "./tabs/CompareCitiesTab";
import TrendsTab from "./tabs/TrendsTab";
import InsightsTab from "./tabs/InsightsTab";

interface MainContentProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  selectedMetric: string;
  selectedCities: string[];
  timeRange: number[];
}

const MainContent = ({
  activeTab,
  setActiveTab,
  selectedMetric,
  selectedCities,
  timeRange,
}: MainContentProps) => {
  return (
    <main className="flex-1 overflow-auto p-6">
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-4 mb-6">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="compare">Compare Cities</TabsTrigger>
          <TabsTrigger value="trends">Trends</TabsTrigger>
          <TabsTrigger value="insights">Insights</TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <OverviewTab
            selectedMetric={selectedMetric}
            selectedCities={selectedCities}
            timeRange={timeRange}
          />
        </TabsContent>

        <TabsContent value="compare">
          <CompareCitiesTab
            selectedMetric={selectedMetric}
            selectedCities={selectedCities}
            timeRange={timeRange}
          />
        </TabsContent>

        <TabsContent value="trends">
          <TrendsTab
            selectedMetric={selectedMetric}
            selectedCities={selectedCities}
            timeRange={timeRange}
          />
        </TabsContent>

        <TabsContent value="insights">
          <InsightsTab
            selectedMetric={selectedMetric}
            selectedCities={selectedCities}
            timeRange={timeRange}
          />
        </TabsContent>
      </Tabs>
    </main>
  );
};

export default MainContent;
