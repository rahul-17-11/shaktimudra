import React from 'react';
import { ArrowRight, Award, Users, Calendar, Flame, Star } from 'lucide-react';
import { GiMeditation } from "react-icons/gi";
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/login');
  };

  const handleRegister = () => {
    navigate('/register');
  };

  const handleGetStarted = () => {
    navigate('/register');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-indigo-100 text-gray-800">
      {/* Navigation */}
      <nav className="flex justify-between items-center py-6 px-8 md:px-16">
        <div className="flex items-center space-x-2">
          <div className="h-10 w-10 bg-indigo-600 rounded-full flex items-center justify-center">
            <GiMeditation className="h-6 w-6 text-white" />
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">ShaktiMudra</span>
        </div>
        
        <div className="hidden md:flex space-x-8 font-medium">
          <a href="#features" className="hover:text-indigo-600 transition-colors">Features</a>
          <a href="#community" className="hover:text-indigo-600 transition-colors">Community</a>
          <a href="#challenges" className="hover:text-indigo-600 transition-colors">Challenges</a>
          <a href="#pricing" className="hover:text-indigo-600 transition-colors">Pricing</a>
        </div>
        
        <div className="flex space-x-4">
          <button 
            onClick={handleLogin}
            className="px-4 py-2 rounded-full border border-indigo-600 text-indigo-600 hover:bg-indigo-50 transition-colors"
          >
            Log in
          </button>
          <button 
            onClick={handleRegister}
            className="px-4 py-2 rounded-full bg-indigo-600 text-white hover:bg-indigo-700 transition-colors"
          >
            Sign up
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="py-16 px-8 md:px-16 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-12 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Transform Your <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Yoga Practice</span> Through Community Challenges
          </h1>
          <p className="text-lg mb-8 text-gray-600">
            Join thousands of yogis tracking their progress, competing with friends, and achieving wellness milestones together.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <button 
              onClick={handleGetStarted}
              className="px-8 py-4 rounded-full bg-indigo-600 text-white hover:bg-indigo-700 transition-colors flex items-center justify-center space-x-2"
            >
              <span>Get Started</span>
              <ArrowRight className="h-4 w-4" />
            </button>
            <button 
              onClick={() => navigate('/tour')}
              className="px-8 py-4 rounded-full bg-white border border-indigo-200 hover:bg-indigo-50 transition-colors"
            >
              Take a Tour
            </button>
          </div>
        </div>
        <div className="md:w-1/2">
          <div className="relative">
            <div className="absolute -top-6 -left-6 bg-indigo-100 rounded-lg p-4 shadow-lg">
              <div className="flex items-center space-x-2">
                <Flame className="h-5 w-5 text-orange-500" />
                <span className="font-semibold text-gray-800">7 Day Streak!</span>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-indigo-100 rounded-lg p-4 shadow-lg">
              <div className="flex items-center space-x-2">
                <Award className="h-5 w-5 text-indigo-600" />
                <span className="font-semibold text-gray-800">Level 5 Achieved</span>
              </div>
            </div>
            <div className="w-full h-full max-w-lg mx-auto overflow-hidden">
              <img 
                src="yogamudra2.webp" 
                alt="Woman in yoga pose with app overlay showing progress"
                className="rounded-2xl shadow-2xl w-full h-auto object-cover" 
              />
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div id="features" className="py-16 px-8 md:px-16 bg-white">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Gamify Your Wellness Journey</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our platform turns your daily yoga practice into an engaging experience with friends and community.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-indigo-50 p-8 rounded-2xl">
            <div className="h-12 w-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-6">
              <Award className="h-6 w-6 text-indigo-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Achievement System</h3>
            <p className="text-gray-600">Earn badges and points as you master new poses and maintain your practice streak.</p>
          </div>
          
          <div className="bg-indigo-50 p-8 rounded-2xl">
            <div className="h-12 w-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-6">
              <Users className="h-6 w-6 text-indigo-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Community Challenges</h3>
            <p className="text-gray-600">Join group challenges or create your own to motivate friends and track collective progress.</p>
          </div>
          
          <div className="bg-indigo-50 p-8 rounded-2xl">
            <div className="h-12 w-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-6">
              <Star className="h-6 w-6 text-indigo-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Difficulty Ratings</h3>
            <p className="text-gray-600">Rate and review poses based on difficulty, helping others choose the right challenge level.</p>
          </div>
        </div>
      </div>

      {/* Social Proof */}
      <div id="community" className="py-16 px-8 md:px-16 bg-indigo-50">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Join Our Thriving Community</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Over 50,000 yogis are already transforming their practice through friendly competition.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow-sm">
            <div className="flex items-center mb-4">
              <div className="h-12 w-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                <span className="font-bold text-purple-600">MJ</span>
              </div>
              <div>
                <h4 className="font-semibold">Maya Johnson</h4>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400" fill="#FBBF24" />
                  ))}
                </div>
              </div>
            </div>
            <p className="text-gray-600">
              "The challenges keep me motivated! I've completed 30 days straight and can now do poses I never thought possible."
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-2xl shadow-sm">
            <div className="flex items-center mb-4">
              <div className="h-12 w-12 bg-indigo-100 rounded-full flex items-center justify-center mr-4">
                <span className="font-bold text-indigo-600">RK</span>
              </div>
              <div>
                <h4 className="font-semibold">Raj Kumar</h4>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400" fill="#FBBF24" />
                  ))}
                </div>
              </div>
            </div>
            <p className="text-gray-600">
              "Competing with friends has transformed my yoga practice from occasional to daily. Love the difficulty ratings!"
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-2xl shadow-sm">
            <div className="flex items-center mb-4">
              <div className="h-12 w-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                <span className="font-bold text-green-600">SL</span>
              </div>
              <div>
                <h4 className="font-semibold">Sarah Lee</h4>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400" fill="#FBBF24" />
                  ))}
                </div>
              </div>
            </div>
            <p className="text-gray-600">
              "I created a challenge for my yoga studio and we've seen attendance double! The leaderboard creates such excitement."
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-16 px-8 md:px-16 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Yoga Practice?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Join our community today and start your first challenge. Your wellness journey is about to level up!
          </p>
          <button 
            onClick={handleRegister}
            className="px-8 py-4 rounded-full bg-indigo-600 text-white hover:bg-indigo-700 transition-colors font-medium text-lg"
          >
            Create Your Account
          </button>
          <p className="mt-4 text-gray-500">Join over 50,000 yogis in our community</p>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-8 md:px-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h4 className="font-bold mb-4">ShaktiMudra</h4>
            <p className="text-gray-400 text-sm">
              Making yoga practice fun, social, and consistent through gamification.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Features</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>Pose Tracking</li>
              <li>Community Challenges</li>
              <li>Achievement System</li>
              <li>Difficulty Ratings</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Resources</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>Blog</li>
              <li>Tutorials</li>
              <li>Pose Library</li>
              <li>API Documentation</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>About Us</li>
              <li>Careers</li>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
          <p>© 2025 YogaQuest. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;