import React from 'react';

const Logo = ({ className = "" }) => {
  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      {/* Logo Icon */}
      <div className="relative">
        {/* Main Logo Circle */}
        <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center shadow-lg">
          {/* Initials */}
          <span className="text-white font-bold text-lg">TT</span>
        </div>
        
        {/* Developer Accent Dot */}
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-400 rounded-full border-2 border-gray-900 animate-pulse"></div>
      </div>
      
      {/* Logo Text */}
      <div className="hidden sm:block">
        <div className="flex flex-col">
          <span className="text-white font-bold text-lg leading-none">Toukir</span>
          <span className="text-blue-400 text-xs font-medium leading-none">Developer</span>
        </div>
      </div>
    </div>
  );
};

export default Logo;
