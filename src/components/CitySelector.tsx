
import { useState } from "react";
import { Check, ChevronDown, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Input } from "@/components/ui/input";

const cities = [
  // Tier 1 Cities
  "Mumbai", "Delhi", "Bangalore", "Hyderabad", "Chennai", "Kolkata", "Pune", "Ahmedabad",
  
  // Tier 2 Cities
  "Jaipur", "Surat", "Lucknow", "Kanpur", "Nagpur", "Patna", "Indore", "Thane", 
  "Bhopal", "Visakhapatnam", "Vadodara", "Firozabad", "Ludhiana", "Rajkot", 
  "Agra", "Siliguri", "Nashik", "Faridabad", "Patiala", "Ghaziabad", "Ludhiana",
  
  // Tier 3 Cities & Important Centers
  "Kochi", "Coimbatore", "Kozhikode", "Thrissur", "Thiruvananthapuram",
  "Madurai", "Tiruchirappalli", "Salem", "Tirunelveli", "Erode",
  "Mysore", "Mangalore", "Hubli", "Belgaum", "Gulbarga",
  "Vijayawada", "Guntur", "Nellore", "Tirupati", "Kakinada",
  "Warangal", "Nizamabad", "Karimnagar", "Ramagundam",
  "Bhubaneswar", "Cuttack", "Rourkela", "Sambalpur",
  "Ranchi", "Jamshedpur", "Dhanbad", "Bokaro",
  "Guwahati", "Dibrugarh", "Silchar", "Tezpur",
  "Dehradun", "Haridwar", "Roorkee", "Haldwani",
  "Shimla", "Solan", "Mandi", "Kullu",
  "Jammu", "Srinagar", "Anantnag", "Baramulla",
  "Chandigarh", "Mohali", "Panchkula", "Ambala",
  "Amritsar", "Jalandhar", "Bathinda", "Pathankot",
  "Jodhpur", "Udaipur", "Kota", "Ajmer", "Bikaner", "Alwar",
  "Raipur", "Bilaspur", "Korba", "Durg",
  "Gwalior", "Jabalpur", "Ujjain", "Sagar", "Dewas"
];

interface CitySelectorProps {
  selectedCities: string[];
  setSelectedCities: (cities: string[]) => void;
}

const CitySelector = ({ selectedCities, setSelectedCities }: CitySelectorProps) => {
  const [open, setOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCities = cities.filter(city =>
    city.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleCity = (city: string) => {
    if (selectedCities.includes(city)) {
      setSelectedCities(selectedCities.filter(c => c !== city));
    } else {
      setSelectedCities([...selectedCities, city]);
    }
  };

  const removeCity = (city: string) => {
    setSelectedCities(selectedCities.filter(c => c !== city));
  };

  const selectAll = () => {
    setSelectedCities([...cities]);
  };

  const clearAll = () => {
    setSelectedCities([]);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full sm:w-80 justify-between bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-gray-200/50 dark:border-gray-700/50 hover:bg-gray-50 dark:hover:bg-gray-700/80"
        >
          <div className="flex flex-wrap gap-1 max-w-full">
            {selectedCities.length === 0 && (
              <span className="text-gray-500 dark:text-gray-400">Select cities...</span>
            )}
            {selectedCities.slice(0, 3).map((city) => (
              <span
                key={city}
                className="inline-flex items-center gap-1 bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-300 text-xs px-2 py-1 rounded-full"
              >
                {city}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    removeCity(city);
                  }}
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200"
                >
                  <X className="w-3 h-3" />
                </button>
              </span>
            ))}
            {selectedCities.length > 3 && (
              <span className="text-xs text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-full">
                +{selectedCities.length - 3} more
              </span>
            )}
          </div>
          <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80 p-0 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm border-gray-200/50 dark:border-gray-700/50">
        <div className="p-3 border-b border-gray-200 dark:border-gray-700">
          <Input
            placeholder="Search cities..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="h-8 mb-2"
          />
          <div className="flex gap-2">
            <Button 
              variant="outline" 
              size="sm" 
              onClick={selectAll}
              className="text-xs flex-1"
            >
              Select All
            </Button>
            <Button 
              variant="outline" 
              size="sm" 
              onClick={clearAll}
              className="text-xs flex-1"
            >
              Clear All
            </Button>
          </div>
        </div>
        <div className="max-h-64 overflow-y-auto">
          {filteredCities.length === 0 ? (
            <div className="p-4 text-center text-gray-500 dark:text-gray-400 text-sm">
              No cities found
            </div>
          ) : (
            filteredCities.map((city) => (
              <div
                key={city}
                className="flex items-center space-x-3 px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-700/50 cursor-pointer transition-colors"
                onClick={() => toggleCity(city)}
              >
                <div className={`w-4 h-4 border-2 rounded flex items-center justify-center transition-colors ${
                  selectedCities.includes(city) 
                    ? 'bg-blue-600 border-blue-600' 
                    : 'border-gray-300 dark:border-gray-600'
                }`}>
                  {selectedCities.includes(city) && (
                    <Check className="w-3 h-3 text-white" />
                  )}
                </div>
                <span className="text-sm flex-1">{city}</span>
                {selectedCities.includes(city) && (
                  <span className="text-xs text-blue-600 dark:text-blue-400 font-medium">
                    Selected
                  </span>
                )}
              </div>
            ))
          )}
        </div>
        {selectedCities.length > 0 && (
          <div className="p-3 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50">
            <div className="text-xs text-gray-600 dark:text-gray-400">
              {selectedCities.length} cities selected
            </div>
          </div>
        )}
      </PopoverContent>
    </Popover>
  );
};

export default CitySelector;
