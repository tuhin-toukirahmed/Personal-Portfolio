import React from 'react';

const ProfileImg = ({ className = "" }) => {
 return (
  <div className={`relative ${className}`}>
    {/* Main Profile Image Container */}
    <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[350px] lg:h-[350px] xl:w-[400px] xl:h-[400px] mx-auto">
      
      {/* Background Gradient Circle */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 rounded-full"></div>
      
      {/* Profile Image */}
      <div className="absolute inset-2 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl">
        <img 
          src="https://i.postimg.cc/Zq8HxPCK/photo-2025-06-28-23-05-20-removebg-preview.png"
          alt="Toukir Tuhin - Frontend Developer"
          className="w-full h-full object-cover object-center"
        />
      </div>
      
      {/* Animated Ring */}
      <div className="absolute inset-0 rounded-full border-2 border-blue-400/30 animate-pulse"></div>
      
      {/* Professional Badge */}
      <div className="absolute -bottom-4 -right-4 bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg border-4 border-gray-900">
        <span className="flex items-center space-x-1">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
          </svg>
          <span>Pro</span>
        </span>
      </div>
    </div>

    {/* Decorative Vector Elements */}
    {/* Floating Geometric Shapes */}
    <div className="absolute -top-6 -left-6 w-12 h-12 bg-blue-500/20 rounded-lg rotate-45 animate-pulse"></div>
    <div className="absolute -top-4 -right-8 w-8 h-8 bg-blue-400/30 rounded-full animate-bounce"></div>
    <div className="absolute -bottom-6 -left-8 w-6 h-6 bg-blue-300/25 rounded-full"></div>
    
    {/* Code Brackets Vector */}
    <div className="absolute top-8 -left-12 text-blue-400/40">
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3" />
      </svg>
    </div>
    
    {/* React Icon Vector */}
    <div className="absolute bottom-12 -right-12 text-blue-400/40">
      <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="1"/>
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
      </svg>
    </div>
    
    {/* Glowing Orbs */}
    <div className="absolute -top-8 right-16 w-4 h-4 bg-blue-500/30 rounded-full blur-sm animate-pulse"></div>
    <div className="absolute bottom-16 -left-6 w-3 h-3 bg-blue-400/40 rounded-full blur-sm"></div>
    
    {/* Connecting Lines */}
    <div className="absolute top-1/2 -left-8 w-16 h-px bg-gradient-to-r from-transparent to-blue-400/30"></div>
    <div className="absolute top-1/3 -right-8 w-12 h-px bg-gradient-to-l from-transparent to-blue-400/30"></div>
  </div>
 );
};

export default ProfileImg;