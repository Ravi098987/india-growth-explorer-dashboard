
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/contexts/ThemeContext";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleTheme}
      className="relative overflow-hidden transition-all duration-300 hover:scale-105"
    >
      <div className={`transition-all duration-300 ${theme === 'dark' ? 'rotate-0 scale-100' : 'rotate-90 scale-0'}`}>
        <Sun className="h-5 w-5" />
      </div>
      <div className={`absolute transition-all duration-300 ${theme === 'dark' ? 'rotate-90 scale-0' : 'rotate-0 scale-100'}`}>
        <Moon className="h-5 w-5" />
      </div>
    </Button>
  );
};

export default ThemeToggle;
