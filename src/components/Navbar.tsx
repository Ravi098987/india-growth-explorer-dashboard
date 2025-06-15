
import { useState } from "react";
import { Search, Download, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SidebarTrigger } from "@/components/ui/sidebar";
import CitySelector from "./CitySelector";
import TimeRangeSlider from "./TimeRangeSlider";

interface NavbarProps {
  selectedCities: string[];
  setSelectedCities: (cities: string[]) => void;
  timeRange: number[];
  setTimeRange: (range: number[]) => void;
}

const Navbar = ({ selectedCities, setSelectedCities, timeRange, setTimeRange }: NavbarProps) => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <nav className="bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <SidebarTrigger />
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-green-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">DD</span>
          </div>
          <div>
            <h1 className="text-lg font-semibold text-gray-900">Decoding Development</h1>
            <p className="text-xs text-gray-500">India Growth Metrics Dashboard</p>
          </div>
        </div>
      </div>

      <div className="hidden md:flex items-center space-x-4 flex-1 max-w-2xl mx-8">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <Input
            placeholder="Search metrics, cities, or insights..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
        <CitySelector 
          selectedCities={selectedCities}
          setSelectedCities={setSelectedCities}
        />
      </div>

      <div className="flex items-center space-x-2">
        <TimeRangeSlider 
          timeRange={timeRange}
          setTimeRange={setTimeRange}
        />
        <Button variant="outline" size="sm">
          <Download className="w-4 h-4 mr-2" />
          Export
        </Button>
        <Button variant="ghost" size="sm">
          <Settings className="w-4 h-4" />
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
