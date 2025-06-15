
import { useState } from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import Navbar from "./Navbar";
import AppSidebar from "./AppSidebar";
import MainContent from "./MainContent";

const Dashboard = () => {
  const [selectedMetric, setSelectedMetric] = useState("gdp");
  const [selectedCities, setSelectedCities] = useState(["Mumbai", "Delhi"]);
  const [activeTab, setActiveTab] = useState("overview");
  const [timeRange, setTimeRange] = useState([2019, 2024]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/20">
      <SidebarProvider>
        <div className="min-h-screen flex w-full">
          <AppSidebar 
            selectedMetric={selectedMetric}
            setSelectedMetric={setSelectedMetric}
          />
          <div className="flex-1 flex flex-col overflow-hidden">
            <Navbar 
              selectedCities={selectedCities}
              setSelectedCities={setSelectedCities}
              timeRange={timeRange}
              setTimeRange={setTimeRange}
            />
            <MainContent 
              activeTab={activeTab}
              setActiveTab={setActiveTab}
              selectedMetric={selectedMetric}
              selectedCities={selectedCities}
              timeRange={timeRange}
            />
          </div>
        </div>
      </SidebarProvider>
    </div>
  );
};

export default Dashboard;
