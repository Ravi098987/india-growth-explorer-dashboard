
import { useState } from "react";
import { ArrowRight, BarChart3, Globe, TrendingUp, Users, Shield, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import ThemeToggle from "@/components/ThemeToggle";

const Landing = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const features = [
    {
      icon: BarChart3,
      title: "Real-time Analytics",
      description: "Access live data and insights from across India's development metrics"
    },
    {
      icon: Globe,
      title: "Comprehensive Coverage",
      description: "Economic, social, health, environment, governance, and equality metrics"
    },
    {
      icon: TrendingUp,
      title: "Trend Analysis",
      description: "Identify patterns and trends across cities and time periods"
    },
    {
      icon: Users,
      title: "City Comparisons",
      description: "Compare multiple cities side-by-side with interactive visualizations"
    },
    {
      icon: Shield,
      title: "Data Integrity",
      description: "Verified data sources ensuring accuracy and reliability"
    },
    {
      icon: Zap,
      title: "Fast & Responsive",
      description: "Lightning-fast performance with mobile-optimized design"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200/50 dark:border-gray-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 via-purple-600 to-green-600 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">DD</span>
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Decoding Development
                </h1>
              </div>
            </div>
            
            <div className="hidden md:flex items-center space-x-6">
              <Button variant="ghost" onClick={() => navigate('/signin')}>
                Sign In
              </Button>
              <Button onClick={() => navigate('/signup')} className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                Get Started
              </Button>
              <ThemeToggle />
            </div>

            <div className="md:hidden flex items-center space-x-2">
              <ThemeToggle />
              <Button variant="ghost" size="sm" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <span className="sr-only">Open menu</span>
                ☰
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200/50 dark:border-gray-700/50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md">
            <div className="px-4 py-4 space-y-2">
              <Button variant="ghost" className="w-full justify-start" onClick={() => navigate('/signin')}>
                Sign In
              </Button>
              <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600" onClick={() => navigate('/signup')}>
                Get Started
              </Button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <Badge variant="secondary" className="mb-6 bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300">
            Data-Driven Insights for India's Growth
          </Badge>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            Decode India's
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent block">
              Development Story
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Explore comprehensive growth metrics across Indian cities with interactive visualizations, 
            real-time data, and powerful analytics tools.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
              onClick={() => navigate('/signup')}
            >
              Start Exploring
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="text-lg px-8 py-6 rounded-xl border-2 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300"
              onClick={() => navigate('/dashboard')}
            >
              View Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50 dark:bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Powerful Features for Data Analysis
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Everything you need to understand India's development patterns and make informed decisions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:scale-105 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border-gray-200/50 dark:border-gray-700/50">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-gray-900 dark:text-white">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Start Your Analysis?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join thousands of researchers, policymakers, and analysts using our platform
            </p>
            <Button 
              size="lg" 
              variant="secondary"
              className="text-lg px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group bg-white text-blue-600 hover:bg-gray-50"
              onClick={() => navigate('/signup')}
            >
              Get Started Now
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900 border-t border-gray-200/50 dark:border-gray-700/50">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 via-purple-600 to-green-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">DD</span>
            </div>
            <span className="text-lg font-semibold text-gray-900 dark:text-white">Decoding Development</span>
          </div>
          <p className="text-gray-600 dark:text-gray-300">
            © 2024 Decoding Development. Empowering data-driven decisions for India's growth.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
