
import { useState } from "react";
import { Download, FileText, FileSpreadsheet, Image, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { toast } from "sonner";

const ExportMenu = () => {
  const [isExporting, setIsExporting] = useState(false);

  const handleExport = async (format: string) => {
    setIsExporting(true);
    
    // Simulate export process
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Create a sample export based on format
      const timestamp = new Date().toISOString().split('T')[0];
      const filename = `india-growth-metrics-${timestamp}`;
      
      if (format === 'pdf') {
        toast.success("PDF report generated successfully!", {
          description: `${filename}.pdf downloaded`
        });
      } else if (format === 'csv') {
        // Create sample CSV data
        const csvData = `City,GDP Growth,Population,HDI,Year\nMumbai,7.2,20410000,0.78,2024\nDelhi,6.8,32900000,0.75,2024\nBangalore,8.1,13200000,0.82,2024`;
        const blob = new Blob([csvData], { type: 'text/csv' });
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `${filename}.csv`;
        link.click();
        window.URL.revokeObjectURL(url);
        
        toast.success("CSV data exported successfully!", {
          description: `${filename}.csv downloaded`
        });
      } else if (format === 'png') {
        toast.success("Dashboard screenshot captured!", {
          description: `${filename}.png downloaded`
        });
      }
    } catch (error) {
      toast.error("Export failed", {
        description: "Please try again later"
      });
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="outline" 
          size="sm" 
          className="bg-blue-50 border-blue-200 text-blue-700 hover:bg-blue-100 shadow-sm"
          disabled={isExporting}
        >
          {isExporting ? (
            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
          ) : (
            <Download className="w-4 h-4 mr-2" />
          )}
          Export
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48 bg-white shadow-lg border border-gray-200">
        <DropdownMenuItem 
          onClick={() => handleExport('pdf')}
          className="cursor-pointer hover:bg-gray-50"
        >
          <FileText className="w-4 h-4 mr-2 text-red-500" />
          Export as PDF
        </DropdownMenuItem>
        <DropdownMenuItem 
          onClick={() => handleExport('csv')}
          className="cursor-pointer hover:bg-gray-50"
        >
          <FileSpreadsheet className="w-4 h-4 mr-2 text-green-500" />
          Export as CSV
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem 
          onClick={() => handleExport('png')}
          className="cursor-pointer hover:bg-gray-50"
        >
          <Image className="w-4 h-4 mr-2 text-blue-500" />
          Screenshot (PNG)
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ExportMenu;
