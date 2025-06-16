
import { useState } from "react";
import { Eye, EyeOff, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import ThemeToggle from "@/components/ThemeToggle";

const SignIn = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement actual authentication with Supabase
    console.log("Sign in attempt:", formData);
    // For now, just navigate to dashboard
    navigate("/dashboard");
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300 flex items-center justify-center p-4">
      {/* Navigation */}
      <div className="absolute top-4 left-4 right-4 flex justify-between items-center">
        <Button variant="ghost" onClick={() => navigate("/")} className="group">
          <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Button>
        <ThemeToggle />
      </div>

      <div className="w-full max-w-md">
        <Card className="shadow-2xl border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md">
          <CardHeader className="text-center pb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-600 via-purple-600 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
              <span className="text-white font-bold text-2xl">DD</span>
            </div>
            <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white">
              Welcome Back
            </CardTitle>
            <p className="text-gray-600 dark:text-gray-300 mt-2">
              Sign in to access your analytics dashboard
            </p>
          </CardHeader>

          <CardContent className="space-y-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-gray-700 dark:text-gray-300">
                  Email Address
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="h-12 bg-gray-50/50 dark:bg-gray-700/50 border-gray-200 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-400 transition-colors"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="text-gray-700 dark:text-gray-300">
                  Password
                </Label>
                <div className="relative">
                  <Input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                    className="h-12 pr-12 bg-gray-50/50 dark:bg-gray-700/50 border-gray-200 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-400 transition-colors"
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-0 top-0 h-12 px-3 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </Button>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <Button variant="link" className="text-sm text-blue-600 dark:text-blue-400 p-0">
                  Forgot password?
                </Button>
              </div>

              <Button
                type="submit"
                className="w-full h-12 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Sign In
              </Button>
            </form>

            <div className="text-center pt-4 border-t border-gray-200/50 dark:border-gray-700/50">
              <p className="text-gray-600 dark:text-gray-300">
                Don't have an account?{" "}
                <Button
                  variant="link"
                  onClick={() => navigate("/signup")}
                  className="text-blue-600 dark:text-blue-400 p-0 font-medium"
                >
                  Sign up
                </Button>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SignIn;
