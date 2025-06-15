
import { useState } from "react";
import { Search, Download, Settings, Bell, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Badge } from "@/components/ui/badge";
import CitySelector from "./CitySelector";
import TimeRangeSlider from "./TimeRangeSlider";
import ExportMenu from "./ExportMenu";

interface NavbarProps {
  selectedCities: string[];
  setSelectedCities: (cities: string[]) => void;
  timeRange: number[];
  setTimeRange: (range: number[]) => void;
}

const Navbar = ({ selectedCities, setSelectedCities, timeRange, setTimeRange }: NavbarProps) => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200/50 px-6 py-4 sticky top-0 z-50 shadow-sm">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-6">
          <SidebarTrigger className="hover:bg-gray-100 p-2 rounded-lg transition-colors" />
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 via-purple-600 to-green-600 rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-lg">DD</span>
            </div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Decoding Development
              </h1>
              <p className="text-sm text-gray-500 font-medium">India Growth Metrics Dashboard</p>
            </div>
            <Badge variant="secondary" className="ml-2 bg-green-100 text-green-700">
              Live Data
            </Badge>
          </div>
        </div>

        <div className="hidden lg:flex items-center space-x-4 flex-1 max-w-2xl mx-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              placeholder="Search metrics, cities, or insights..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 bg-gray-50/50 border-gray-200 focus:bg-white transition-colors"
            />
          </div>
          <CitySelector 
            selectedCities={selectedCities}
            setSelectedCities={setSelectedCities}
          />
        </div>

        <div className="flex items-center space-x-3">
          <TimeRangeSlider 
            timeRange={timeRange}
            setTimeRange={setTimeRange}
          />
          <ExportMenu />
          <Button variant="ghost" size="sm" className="relative">
            <Bell className="w-5 h-5" />
            <Badge className="absolute -top-1 -right-1 w-5 h-5 p-0 flex items-center justify-center bg-red-500 text-white text-xs">
              3
            </Badge>
          </Button>
          <Button variant="ghost" size="sm" className="bg-gray-100 hover:bg-gray-200">
            <User className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
