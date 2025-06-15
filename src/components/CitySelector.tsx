
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
  "Mumbai", "Delhi", "Bangalore", "Hyderabad", "Chennai", "Kolkata", 
  "Pune", "Ahmedabad", "Jaipur", "Surat", "Lucknow", "Kanpur", 
  "Nagpur", "Patna", "Indore", "Thane", "Bhopal", "Visakhapatnam"
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

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-64 justify-between"
        >
          <div className="flex flex-wrap gap-1">
            {selectedCities.length === 0 && "Select cities..."}
            {selectedCities.slice(0, 2).map((city) => (
              <span
                key={city}
                className="inline-flex items-center gap-1 bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded"
              >
                {city}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    removeCity(city);
                  }}
                  className="text-blue-600 hover:text-blue-800"
                >
                  <X className="w-3 h-3" />
                </button>
              </span>
            ))}
            {selectedCities.length > 2 && (
              <span className="text-xs text-gray-500">
                +{selectedCities.length - 2} more
              </span>
            )}
          </div>
          <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-64 p-0">
        <div className="p-2">
          <Input
            placeholder="Search cities..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="h-8"
          />
        </div>
        <div className="max-h-48 overflow-y-auto">
          {filteredCities.map((city) => (
            <div
              key={city}
              className="flex items-center space-x-2 px-2 py-1.5 hover:bg-gray-100 cursor-pointer"
              onClick={() => toggleCity(city)}
            >
              <div className="w-4 h-4 border border-gray-300 rounded flex items-center justify-center">
                {selectedCities.includes(city) && (
                  <Check className="w-3 h-3 text-blue-600" />
                )}
              </div>
              <span className="text-sm">{city}</span>
            </div>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default CitySelector;
