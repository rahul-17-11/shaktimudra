import React, { useState, useEffect } from 'react';
import { Award, Calendar, TrendingUp, Star, Activity, Users, User } from 'lucide-react';

const YogaDashboard = () => {
  // Sample user data (would be fetched from Firebase)
  const [userData, setUserData] = useState({
    name: "Sarah Johnson",
    level: "Intermediate",
    totalPoints: 1250,
    dailyStreak: 12,
    badges: [
      { name: "Morning Warrior", description: "Completed yoga for 7 consecutive mornings" },
      { name: "Flexibility Master", description: "Mastered 10 flexibility poses" },
      { name: "Balance Pro", description: "Maintained difficult balance poses for over 2 minutes" }
    ],
    recentActivity: [
      { date: "March 02", poses: 8, points: 65 },
      { date: "March 01", poses: 5, points: 40 },
      { date: "Feb 28", poses: 10, points: 75 },
    ]
  });

  // Sample leaderboard data (would be fetched from Firebase)
  const [leaderboard, setLeaderboard] = useState([
    { name: "Michael T.", points: 1876, level: "Advanced" },
    { name: "Sarah J.", points: 1250, level: "Intermediate" },
    { name: "Priya K.", points: 1125, level: "Intermediate" },
    { name: "David L.", points: 985, level: "Beginner" },
    { name: "Sophia R.", points: 872, level: "Beginner" }
  ]);

  // Sample asana data (the one provided in the prompt)
  const [currentAsana, setCurrentAsana] = useState({
    englishName: "Wild Thing Pose",
    sanskritName: "Camatkarasana",
    description: "A dynamic backbend that opens the chest, stretches the hip flexors, and strengthens the shoulders.",
    benefit: "Opens the chest, stretches the hip flexors and psoas, and strengthens the shoulders and upper back muscles.",
    mainFocus: ["Chest Opening", "Hip Flexor Stretch", "Shoulder Strength", "Upper Back Activation"],
    keys: [
      "Bottom arm's wrist and shoulder aligned",
      "Feet pressing firmly",
      "Engage buttock muscles",
      "Hips pushing up",
      "Extended arm reaching back toward the floor",
      "Gaze toward the thumb"
    ],
    howToDo: [
      "Start in Side Plank Pose with your weight on one hand.",
      "Step your top foot back and lower your toes to the floor behind you.",
      "Press into your supporting hand and lift your hips toward the ceiling.",
      "Extend your free arm back and let your chest open."
    ],
    tip: "Keep your supporting arm strong and engaged to avoid strain on the wrist and shoulder.",
    cautions: [
      "Mind the lower back compression.",
      "Avoid if you have ankle, wrist, elbow, shoulder, or neck injuries.",
      "Not recommended for individuals with high or low blood pressure."
    ],
    level: "Intermediate",
    type: "Back-Bend",
    quality: "Energizing",
    userRating: 4,
  });

  // Sample asanas for the library (would be fetched from Firebase)
  const [asanaLibrary, setAsanaLibrary] = useState([
    { englishName: "Wild Thing Pose", sanskritName: "Camatkarasana", level: "Intermediate", type: "Back-Bend" },
    { englishName: "Downward-Facing Dog", sanskritName: "Adho Mukha Svanasana", level: "Beginner", type: "Forward-Bend" },
    { englishName: "Warrior I", sanskritName: "Virabhadrasana I", level: "Beginner", type: "Standing" },
    { englishName: "Crow Pose", sanskritName: "Bakasana", level: "Advanced", type: "Arm Balance" },
    { englishName: "Tree Pose", sanskritName: "Vrikshasana", level: "Beginner", type: "Balance" }
  ]);

  // Function to handle asana difficulty rating
  const handleRatingChange = (rating) => {
    setCurrentAsana({...currentAsana, userRating: rating});
    // In a real app, this would update Firebase
  };

  return (
    <div className="min-h-screen p-6 font-sans text-black flex items-center justify-center">
      <div className="container max-w-6xl mx-auto">
        
        {/* Main Dashboard Area with Glassmorphism Effect */}
        <div className="rounded-2xl shadow-xl p-6 border border-white/30">
          
          {/* Header with User Profile */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="flex items-center mb-4 md:mb-0">
              <div className="h-16 w-16 rounded-full bg-gradient-to-r from-purple-500 to-indigo-600 flex items-center justify-center text-black text-xl font-bold">
                {userData.name.split(' ').map(n => n[0]).join('')}
              </div>
              <div className="ml-4">
                <h1 className="text-2xl font-bold">{userData.name}</h1>
                <div className="flex items-center">
                  <span className="bg-indigo-600/50 px-2 py-1 rounded-md text-xs font-medium">{userData.level}</span>
                  <span className="ml-2 flex items-center"><TrendingUp size={16} className="mr-1" /> {userData.totalPoints} points</span>
                  <span className="ml-2 flex items-center"><Calendar size={16} className="mr-1" /> {userData.dailyStreak} day streak</span>
                </div>
              </div>
            </div>
            <div className="flex space-x-2">
              <button className="bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-lg shadow-md transition-all">Today's Practice</button>
              <button className="bg-white/30 hover:bg-white/40 px-4 py-2 rounded-lg shadow-md transition-all">View Progress</button>
            </div>
          </div>
          
          {/* Dashboard Widgets Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Left Column */}
            <div className="space-y-6">
              {/* Daily Progress Card */}
              <div className="backdrop-blur-md bg-white/10 rounded-xl p-4 border border-white/20 shadow-lg">
                <h2 className="text-lg font-semibold mb-3 flex items-center"><Activity size={18} className="mr-2" /> Daily Progress</h2>
                <div className="space-y-3">
                  {userData.recentActivity.map((day, i) => (
                    <div key={i} className="flex justify-between items-center bg-white/10 p-2 rounded-lg">
                      <span>{day.date}</span>
                      <div className="flex items-center">
                        <span className="mr-3">{day.poses} poses</span>
                        <span className="bg-indigo-600/50 px-2 py-1 rounded-md text-xs">{day.points} pts</span>
                      </div>
                    </div>
                  ))}
                  <button className="w-full mt-2 bg-white/20 hover:bg-white/30 px-3 py-2 rounded-lg text-sm transition-all">
                    View Full History
                  </button>
                </div>
              </div>
              
              {/* Badges Earned */}
              <div className="backdrop-blur-md bg-white/10 rounded-xl p-4 border border-white/20 shadow-lg">
                <h2 className="text-lg font-semibold mb-3 flex items-center"><Award size={18} className="mr-2" /> Badges Earned</h2>
                <div className="space-y-3">
                  {userData.badges.map((badge, i) => (
                    <div key={i} className="bg-white/10 p-3 rounded-lg">
                      <div className="flex items-center">
                        <div className="h-10 w-10 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 flex items-center justify-center">
                          <Award size={20} />
                        </div>
                        <div className="ml-3">
                          <p className="font-medium">{badge.name}</p>
                          <p className="text-xs opacity-80">{badge.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                  <button className="w-full mt-2 bg-white/20 hover:bg-white/30 px-3 py-2 rounded-lg text-sm transition-all">
                    View All Badges
                  </button>
                </div>
              </div>
            </div>
            
            {/* Middle Column */}
            <div className="space-y-6">
              {/* Current Asana Details */}
              <div className="backdrop-blur-md bg-white/10 rounded-xl p-4 border border-white/20 shadow-lg">
                <h2 className="text-lg font-semibold mb-2 flex items-center">Featured Asana</h2>
                
                <div className="bg-white/10 p-4 rounded-lg">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-bold text-xl">{currentAsana.englishName}</h3>
                      <p className="text-sm italic">{currentAsana.sanskritName}</p>
                    </div>
                    <div className="flex items-center">
                      <span className="bg-indigo-600/50 px-2 py-1 rounded-md text-xs mr-2">{currentAsana.level}</span>
                      <span className="bg-purple-600/50 px-2 py-1 rounded-md text-xs">{currentAsana.type}</span>
                    </div>
                  </div>
                  
                  <p className="text-sm mb-3">{currentAsana.description}</p>
                  
                  {/* Main Focus Areas */}
                  <div className="mb-3">
                    <h4 className="text-sm font-semibold mb-1">Main Focus:</h4>
                    <div className="flex flex-wrap gap-1">
                      {currentAsana.mainFocus.map((focus, i) => (
                        <span key={i} className="bg-white/20 px-2 py-1 rounded-md text-xs">{focus}</span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Rate Difficulty */}
                  <div className="mb-3">
                    <h4 className="text-sm font-semibold mb-1">Rate Difficulty:</h4>
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star 
                          key={star}
                          size={20} 
                          className={`cursor-pointer ${star <= currentAsana.userRating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
                          onClick={() => handleRatingChange(star)}
                        />
                      ))}
                    </div>
                  </div>
                  
                  <button className="w-full mt-2 bg-indigo-600 hover:bg-indigo-700 px-3 py-2 rounded-lg text-sm transition-all">
                    View Full Details
                  </button>
                </div>
              </div>
              
              {/* Asana Library Quick Access */}
              <div className="backdrop-blur-md bg-white/10 rounded-xl p-4 border border-white/20 shadow-lg">
                <h2 className="text-lg font-semibold mb-3 flex items-center">Asana Library</h2>
                <div className="space-y-2">
                  {asanaLibrary.map((asana, i) => (
                    <div key={i} className="flex justify-between items-center bg-white/10 p-2 rounded-lg hover:bg-white/20 cursor-pointer transition-all">
                      <div>
                        <p className="font-medium">{asana.englishName}</p>
                        <p className="text-xs italic">{asana.sanskritName}</p>
                      </div>
                      <div className="flex space-x-1">
                        <span className="bg-indigo-600/50 px-2 py-1 rounded-md text-xs">{asana.level}</span>
                      </div>
                    </div>
                  ))}
                  <button className="w-full mt-2 bg-white/20 hover:bg-white/30 px-3 py-2 rounded-lg text-sm transition-all">
                    Browse All Asanas
                  </button>
                </div>
              </div>
            </div>
            
            {/* Right Column */}
            <div className="space-y-6">
              {/* Leaderboard */}
              <div className="backdrop-blur-md bg-white/10 rounded-xl p-4 border border-white/20 shadow-lg">
                <h2 className="text-lg font-semibold mb-3 flex items-center"><Users size={18} className="mr-2" /> Community Leaderboard</h2>
                <div className="space-y-2">
                  {leaderboard.map((user, i) => (
                    <div key={i} className={`flex justify-between items-center p-3 rounded-lg ${i === 1 ? 'bg-indigo-600/40 border border-white/30' : 'bg-white/10'}`}>
                      <div className="flex items-center">
                        <div className="flex items-center justify-center h-8 w-8 rounded-full bg-white/20 mr-2">
                          <span className="font-bold">{i+1}</span>
                        </div>
                        <div>
                          <p className="font-medium">{user.name}</p>
                          <p className="text-xs">{user.level}</p>
                        </div>
                      </div>
                      <div className="font-bold">{user.points} pts</div>
                    </div>
                  ))}
                  <button className="w-full mt-2 bg-white/20 hover:bg-white/30 px-3 py-2 rounded-lg text-sm transition-all">
                    View Full Leaderboard
                  </button>
                </div>
              </div>
              
              {/* Weekly Challenge */}
              <div className="backdrop-blur-md bg-white/10 rounded-xl p-4 border border-white/20 shadow-lg">
                <h2 className="text-lg font-semibold mb-3 flex items-center"><Star size={18} className="mr-2" /> Weekly Challenge</h2>
                <div className="bg-gradient-to-r from-purple-600/30 to-indigo-600/30 p-4 rounded-lg">
                  <h3 className="font-bold text-lg mb-1">Balance Master</h3>
                  <p className="text-sm mb-3">Complete 5 balance poses each day for 5 consecutive days</p>
                  <div className="w-full bg-white/20 h-3 rounded-full mt-2">
                    <div className="bg-gradient-to-r from-green-400 to-emerald-500 h-3 rounded-full" style={{width: '60%'}}></div>
                  </div>
                  <p className="text-xs mt-1 text-right">3/5 days completed</p>
                  <button className="w-full mt-3 bg-white/20 hover:bg-white/30 px-3 py-2 rounded-lg text-sm transition-all">
                    View Today's Poses
                  </button>
                </div>
              </div>
              
              {/* Quick Stats */}
              <div className="backdrop-blur-md bg-white/10 rounded-xl p-4 border border-white/20 shadow-lg">
                <h2 className="text-lg font-semibold mb-3">Quick Stats</h2>
                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-white/10 p-3 rounded-lg text-center">
                    <p className="text-xs opacity-80">Total Asanas</p>
                    <p className="text-2xl font-bold">124</p>
                  </div>
                  <div className="bg-white/10 p-3 rounded-lg text-center">
                    <p className="text-xs opacity-80">Today's Points</p>
                    <p className="text-2xl font-bold">65</p>
                  </div>
                  <div className="bg-white/10 p-3 rounded-lg text-center">
                    <p className="text-xs opacity-80">This Week</p>
                    <p className="text-2xl font-bold">285</p>
                  </div>
                  <div className="bg-white/10 p-3 rounded-lg text-center">
                    <p className="text-xs opacity-80">Rank</p>
                    <p className="text-2xl font-bold">#2</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YogaDashboard;