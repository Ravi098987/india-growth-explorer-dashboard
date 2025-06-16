
import { useState } from "react";
import { Eye, EyeOff, ArrowLeft, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { useNavigate } from "react-router-dom";
import ThemeToggle from "@/components/ThemeToggle";

const SignUp = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords don't match!");
      return;
    }
    
    if (!formData.agreeToTerms) {
      alert("Please agree to the terms and conditions");
      return;
    }

    // TODO: Implement actual authentication with Supabase
    console.log("Sign up attempt:", formData);
    // For now, just navigate to dashboard
    navigate("/dashboard");
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const passwordRequirements = [
    { text: "At least 8 characters", met: formData.password.length >= 8 },
    { text: "Contains uppercase letter", met: /[A-Z]/.test(formData.password) },
    { text: "Contains lowercase letter", met: /[a-z]/.test(formData.password) },
    { text: "Contains number", met: /\d/.test(formData.password) }
  ];

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
              Create Account
            </CardTitle>
            <p className="text-gray-600 dark:text-gray-300 mt-2">
              Join thousands of users analyzing India's development
            </p>
          </CardHeader>

          <CardContent className="space-y-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="fullName" className="text-gray-700 dark:text-gray-300">
                  Full Name
                </Label>
                <Input
                  id="fullName"
                  name="fullName"
                  type="text"
                  placeholder="Enter your full name"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  required
                  className="h-12 bg-gray-50/50 dark:bg-gray-700/50 border-gray-200 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-400 transition-colors"
                />
              </div>

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
                    placeholder="Create a password"
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
                
                {formData.password && (
                  <div className="space-y-1 mt-2">
                    {passwordRequirements.map((req, index) => (
                      <div key={index} className={`flex items-center text-xs ${req.met ? 'text-green-600 dark:text-green-400' : 'text-gray-400'}`}>
                        <Check className={`h-3 w-3 mr-1 ${req.met ? 'opacity-100' : 'opacity-30'}`} />
                        {req.text}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="confirmPassword" className="text-gray-700 dark:text-gray-300">
                  Confirm Password
                </Label>
                <div className="relative">
                  <Input
                    id="confirmPassword"
                    name="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Confirm your password"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    required
                    className="h-12 pr-12 bg-gray-50/50 dark:bg-gray-700/50 border-gray-200 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-400 transition-colors"
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-0 top-0 h-12 px-3 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </Button>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="terms"
                  checked={formData.agreeToTerms}
                  onCheckedChange={(checked) => 
                    setFormData(prev => ({ ...prev, agreeToTerms: checked as boolean }))
                  }
                  className="border-gray-300 dark:border-gray-600"
                />
                <Label htmlFor="terms" className="text-sm text-gray-600 dark:text-gray-300">
                  I agree to the{" "}
                  <Button variant="link" className="text-blue-600 dark:text-blue-400 p-0 h-auto text-sm">
                    Terms of Service
                  </Button>{" "}
                  and{" "}
                  <Button variant="link" className="text-blue-600 dark:text-blue-400 p-0 h-auto text-sm">
                    Privacy Policy
                  </Button>
                </Label>
              </div>

              <Button
                type="submit"
                className="w-full h-12 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Create Account
              </Button>
            </form>

            <div className="text-center pt-4 border-t border-gray-200/50 dark:border-gray-700/50">
              <p className="text-gray-600 dark:text-gray-300">
                Already have an account?{" "}
                <Button
                  variant="link"
                  onClick={() => navigate("/signin")}
                  className="text-blue-600 dark:text-blue-400 p-0 font-medium"
                >
                  Sign in
                </Button>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SignUp;
