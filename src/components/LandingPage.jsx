import React, { useEffect, useState } from 'react';
import { ArrowRight, Award, Users, Calendar, Flame, Star } from 'lucide-react';
import { GiMeditation, GiLotusFlower } from "react-icons/gi";
import { useNavigate } from 'react-router-dom';

// Floating Leaf Component
const FloatingLeaf = ({ style }) => {
  return (
    <div 
      className="absolute pointer-events-none" 
      style={style}
    >
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 16c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z" fill="#4ADE80" fillOpacity="0.6" />
      </svg>
    </div>
  );
};

const LandingPage = () => {
  const navigate = useNavigate();
  const [leaves, setLeaves] = useState([]);

  // Generate random floating leaves
  useEffect(() => {
    const leafCount = 15;
    const newLeaves = [];
    
    for (let i = 0; i < leafCount; i++) {
      newLeaves.push({
        id: i,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        size: Math.random() * 0.5 + 0.5,
        duration: Math.random() * 20 + 10,
        delay: Math.random() * 5,
      });
    }
    
    setLeaves(newLeaves);
  }, []);

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
    <div className="relative min-h-screen overflow-hidden text-black">
      {/* Floating Leaves */}
      {leaves.map((leaf) => (
        <FloatingLeaf
          key={leaf.id}
          style={{
            left: leaf.left,
            top: leaf.top,
            transform: `scale(${leaf.size})`,
            animation: `float ${leaf.duration}s ease-in-out ${leaf.delay}s infinite alternate`,
          }}
        />
      ))}

      {/* Fixed Blurred Circles for additional effect */}
      <div className="fixed top-1/4 left-1/4 w-64 h-64 rounded-full bg-green-300 opacity-20 blur-3xl"></div>
      <div className="fixed top-3/4 right-1/4 w-80 h-80 rounded-full bg-purple-300 opacity-20 blur-3xl"></div>
      <div className="fixed bottom-1/4 left-1/3 w-48 h-48 rounded-full bg-blue-200 opacity-20 blur-3xl"></div>

      {/* Navigation */}
      <nav className="relative z-10 flex justify-between items-center py-6 px-8 md:px-16 backdrop-blur-sm bg-white/10 border border-white/20 rounded-b-2xl">
        <div className="flex items-center space-x-2">
          <div className="h-10 w-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30">
            <GiMeditation className="h-6 w-6 text-green-900" />
          </div>
          <span className="text-xl font-bold text-black drop-shadow-md">ShaktiMudra</span>
        </div>
        
        <div className="hidden md:flex space-x-8 font-medium">
          <a href="#features" className="text-black/90 hover:text-black transition-colors">Features</a>
          <a href="#community" className="text-black/90 hover:text-black transition-colors">Community</a>
          <a href="#challenges" className="text-black/90 hover:text-black transition-colors">Challenges</a>
          <a href="#pricing" className="text-black/90 hover:text-black transition-colors">Pricing</a>
        </div>
        
        <div className="flex space-x-4">
          <button 
            onClick={handleLogin}
            className="px-4 py-2 rounded-full border border-white/50 text-black backdrop-blur-sm bg-white/10 hover:bg-white/20 transition-colors"
          >
            Log in
          </button>
          <button 
            onClick={handleRegister}
            className="px-4 py-2 rounded-full backdrop-blur-sm bg-white/20 text-black border border-white/50 hover:bg-white/30 transition-colors"
          >
            Sign up
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative z-10 py-16 px-8 md:px-16 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-12 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-black drop-shadow-lg">
            Transform Your <span className="text-amber-400">Yoga Practice</span> Through Community Challenges
          </h1>
          <p className="text-lg mb-8 text-black/80">
            Join thousands of yogis tracking their progress, competing with friends, and achieving wellness milestones together.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <button 
              onClick={handleGetStarted}
              className="px-8 py-4 rounded-full backdrop-blur-sm bg-white/20 border border-white/30 text-black hover:bg-white/30 transition-colors flex items-center justify-center space-x-2 shadow-lg"
            >
              <span>Get Started</span>
              <ArrowRight className="h-4 w-4" />
            </button>
            <button 
              onClick={() => navigate('/tour')}
              className="px-8 py-4 rounded-full backdrop-blur-sm bg-white/10 border border-white/20 hover:bg-white/20 transition-colors shadow-lg"
            >
              Take a Tour
            </button>
          </div>
        </div>
        <div className="md:w-1/2">
          <div className="relative">
            <div className="absolute -top-6 -left-6 backdrop-blur-md bg-white/20 rounded-lg p-4 shadow-lg border border-white/30">
              <div className="flex items-center space-x-2">
                <Flame className="h-5 w-5 text-orange-300" />
                <span className="font-semibold text-black">7 Day Streak!</span>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 backdrop-blur-md bg-white/20 rounded-lg p-4 shadow-lg border border-white/30">
              <div className="flex items-center space-x-2">
                <Award className="h-5 w-5 text-green-800" />
                <span className="font-semibold text-black">Level 5 Achieved</span>
              </div>
            </div>
            <div className="w-full h-full max-w-lg mx-auto overflow-hidden backdrop-blur-sm bg-white/10 p-2 rounded-2xl border border-white/30 shadow-2xl">
              <img 
                src="yogamudra2.webp" 
                alt="Woman in yoga pose with app overlay showing progress"
                className="rounded-xl w-full h-auto object-cover" 
              />
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div id="features" className="relative z-10 py-16 px-8 md:px-16 backdrop-blur-mdborder-y border-white/20">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-black drop-shadow-md">Gamify Your Wellness Journey</h2>
          <p className="text-black/80 max-w-2xl mx-auto">
            Our platform turns your daily yoga practice into an engaging experience with friends and community.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="backdrop-blur-md bg-white/10 p-8 rounded-2xl border border-white/30 hover:bg-white/20 transition-all hover:shadow-xl">
            <div className="h-12 w-12 backdrop-blur-sm bg-white/20 rounded-xl flex items-center justify-center mb-6 border border-white/30">
              <Award className="h-6 w-6 text-green-800" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-black">Achievement System</h3>
            <p className="text-black/80">Earn badges and points as you master new poses and maintain your practice streak.</p>
          </div>
          
          <div className="backdrop-blur-md bg-white/10 p-8 rounded-2xl border border-white/30 hover:bg-white/20 transition-all hover:shadow-xl">
            <div className="h-12 w-12 backdrop-blur-sm bg-white/20 rounded-xl flex items-center justify-center mb-6 border border-white/30">
              <Users className="h-6 w-6 text-green-800" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-black">Community Challenges</h3>
            <p className="text-black/80">Join group challenges or create your own to motivate friends and track collective progress.</p>
          </div>
          
          <div className="backdrop-blur-md bg-white/10 p-8 rounded-2xl border border-white/30 hover:bg-white/20 transition-all hover:shadow-xl">
            <div className="h-12 w-12 backdrop-blur-sm bg-white/20 rounded-xl flex items-center justify-center mb-6 border border-white/30">
              <Star className="h-6 w-6 text-green-800" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-black">Difficulty Ratings</h3>
            <p className="text-black/80">Rate and review poses based on difficulty, helping others choose the right challenge level.</p>
          </div>
        </div>
      </div>

      {/* Social Proof */}
      <div id="community" className="relative z-10 py-16 px-8 md:px-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-black drop-shadow-md">Join Our Thriving Community</h2>
          <p className="text-black/80 max-w-2xl mx-auto">
            Over 50,000 yogis are already transforming their practice through friendly competition.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="backdrop-blur-md bg-white/10 p-6 rounded-2xl shadow-sm border border-white/30 hover:bg-white/20 transition-all">
            <div className="flex items-center mb-4">
              <div className="h-12 w-12 bg-purple-500/30 backdrop-blur-sm rounded-full flex items-center justify-center mr-4 border border-white/30">
                <span className="font-bold text-black">MJ</span>
              </div>
              <div>
                <h4 className="font-semibold text-black">Maya Johnson</h4>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-green-800" fill="#4ADE80" />
                  ))}
                </div>
              </div>
            </div>
            <p className="text-black/80">
              "The challenges keep me motivated! I've completed 30 days straight and can now do poses I never thought possible."
            </p>
          </div>
          
          <div className="backdrop-blur-md bg-white/10 p-6 rounded-2xl shadow-sm border border-white/30 hover:bg-white/20 transition-all">
            <div className="flex items-center mb-4">
              <div className="h-12 w-12 bg-blue-500/30 backdrop-blur-sm rounded-full flex items-center justify-center mr-4 border border-white/30">
                <span className="font-bold text-black">RK</span>
              </div>
              <div>
                <h4 className="font-semibold text-black">Raj Kumar</h4>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-green-800" fill="#4ADE80" />
                  ))}
                </div>
              </div>
            </div>
            <p className="text-black/80">
              "Competing with friends has transformed my yoga practice from occasional to daily. Love the difficulty ratings!"
            </p>
          </div>
          
          <div className="backdrop-blur-md bg-white/10 p-6 rounded-2xl shadow-sm border border-white/30 hover:bg-white/20 transition-all">
            <div className="flex items-center mb-4">
              <div className="h-12 w-12 bg-green-500/30 backdrop-blur-sm rounded-full flex items-center justify-center mr-4 border border-white/30">
                <span className="font-bold text-black">SL</span>
              </div>
              <div>
                <h4 className="font-semibold text-black">Sarah Lee</h4>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-green-800" fill="#4ADE80" />
                  ))}
                </div>
              </div>
            </div>
            <p className="text-black/80">
              "I created a challenge for my yoga studio and we've seen attendance double! The leaderboard creates such excitement."
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="relative z-10 py-16 px-8 md:px-16 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black drop-shadow-md">Ready to Transform Your Yoga Practice?</h2>
          <p className="text-lg text-black/80 mb-8">
            Join our community today and start your first challenge. Your wellness journey is about to level up!
          </p>
          <button 
            onClick={handleRegister}
            className="px-8 py-4 rounded-full backdrop-blur-sm bg-white/20 border border-white/30 text-black hover:bg-white/30 transition-colors font-medium text-lg shadow-lg"
          >
            Create Your Account
          </button>
          <p className="mt-4 text-black/70">Join over 50,000 yogis in our community</p>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative z-10 backdrop-blur-md bg-black/15 text-black py-12 px-8 md:px-16 border-t border-white/10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h4 className="font-bold mb-4">ShaktiMudra</h4>
            <p className="text-black/70 text-sm">
              Making yoga practice fun, social, and consistent through gamification.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Features</h4>
            <ul className="space-y-2 text-black/70 text-sm">
              <li>Pose Tracking</li>
              <li>Community Challenges</li>
              <li>Achievement System</li>
              <li>Difficulty Ratings</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Resources</h4>
            <ul className="space-y-2 text-black/70 text-sm">
              <li>Blog</li>
              <li>Tutorials</li>
              <li>Pose Library</li>
              <li>API Documentation</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-black/70 text-sm">
              <li>About Us</li>
              <li>Careers</li>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-white/10 text-center text-black/50 text-sm">
          <p>© 2025 ShaktiMudra. All rights reserved.</p>
        </div>
      </footer>

      {/* CSS for the floating animation */}
      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(10deg);
          }
          100% {
            transform: translateY(0) rotate(0deg);
          }
        }
      `}</style>
    </div>
  );
};

export default LandingPage;