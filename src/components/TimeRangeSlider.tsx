
import { useState } from "react";
import { Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface TimeRangeSliderProps {
  timeRange: number[];
  setTimeRange: (range: number[]) => void;
}

const TimeRangeSlider = ({ timeRange, setTimeRange }: TimeRangeSliderProps) => {
  const [open, setOpen] = useState(false);
  const minYear = 2015;
  const maxYear = 2024;

  const handleSliderChange = (values: number[]) => {
    if (values.length === 2 && values[1] - values[0] >= 4) {
      setTimeRange(values);
    }
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="outline" size="sm">
          <Calendar className="w-4 h-4 mr-2" />
          {timeRange[0]} - {timeRange[1]}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="space-y-4">
          <div>
            <h4 className="font-medium mb-2">Time Range</h4>
            <p className="text-sm text-gray-600">
              Select a range of at least 5 years
            </p>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-600">
              <span>{minYear}</span>
              <span>{maxYear}</span>
            </div>
            <Slider
              value={timeRange}
              onValueChange={handleSliderChange}
              min={minYear}
              max={maxYear}
              step={1}
              className="w-full"
            />
            <div className="flex justify-between text-sm font-medium">
              <span>{timeRange[0]}</span>
              <span>{timeRange[1]}</span>
            </div>
          </div>
          <div className="text-xs text-gray-500">
            Selected range: {timeRange[1] - timeRange[0] + 1} years
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default TimeRangeSlider;
