import React from 'react';
import { Home } from 'lucide-react';

const NotFound = () => {
  const navigateToHome = () => {
    window.location.href = '/';
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="max-w-lg w-full bg-white/35 backdrop-blur-sm p-8 text-center space-y-6 rounded-xl shadow-lg">
        <div className="space-y-4">
          <h1 className="text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">
            404
          </h1>
          
          <h2 className="text-3xl font-bold text-gray-900">
            Lost in the Flow?
          </h2>
          
          <p className="text-gray-600 text-lg">
            This page seems to be out of alignment. Take a deep breath and let's return to your practice.
          </p>
          
          <div className="pt-4">
            <button 
              onClick={navigateToHome}
              className="inline-flex items-center justify-center px-8 py-3 text-lg font-medium text-white bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 rounded-lg transition-all duration-200 ease-in-out shadow-md hover:shadow-lg"
            >
              <Home className="mr-2 h-5 w-5" />
              Back to Home
            </button>
          </div>
        </div>

        <div className="text-sm text-gray-500">
          Stay centered. The right path is just a breath away.
        </div>
      </div>
    </div>
  );
};

export default NotFound;
