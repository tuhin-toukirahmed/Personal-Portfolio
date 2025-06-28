import React from 'react';
import Container from '../Components/Container';
import ProfileImg from '../Components/ProfileImg';

const Banner = () => {
  const skills = [ 'JavaScript','React', 'Node.js', 'MongoDB'];

  return (
    <section id="home" className="min-h-screen flex items-center py-20 bg-gray-900 relative overflow-hidden">
      {/* Background Vector Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Code Pattern Background */}
        <div className="absolute top-10 left-4 md:left-10 text-blue-500/10">
          <svg className="w-16 h-16 md:w-24 lg:w-32 md:h-24 lg:h-32" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8.5 7.5L11 10l-2.5 2.5M13 10h3M6 4h12c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H6c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
          </svg>
        </div>
        
        {/* React Atom */}
        <div className="absolute top-16 right-8 md:top-20 md:right-16 text-blue-400/8 animate-spin-slow">
          <svg className="w-20 h-20 md:w-32 lg:w-40 md:h-32 lg:h-40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <ellipse cx="12" cy="12" rx="10" ry="4" strokeWidth="1"/>
            <ellipse cx="12" cy="12" rx="10" ry="4" strokeWidth="1" transform="rotate(60 12 12)"/>
            <ellipse cx="12" cy="12" rx="10" ry="4" strokeWidth="1" transform="rotate(120 12 12)"/>
            <circle cx="12" cy="12" r="2" fill="currentColor"/>
          </svg>
        </div>
        
        {/* Geometric Shapes */}
        <div className="absolute bottom-32 left-8 md:left-20 w-8 h-8 md:w-12 lg:w-16 md:h-12 lg:h-16 border-2 border-blue-500/10 rounded-lg rotate-45"></div>
        <div className="absolute top-1/3 right-4 md:right-10 w-6 h-6 md:w-10 lg:w-12 md:h-10 lg:h-12 bg-blue-400/5 rounded-full"></div>
        <div className="absolute bottom-20 right-16 md:right-32 w-4 h-4 md:w-6 lg:w-8 md:h-6 lg:h-8 bg-blue-300/8 transform rotate-45"></div>
        
        {/* HTML Tags */}
        <div className="absolute bottom-40 left-16 md:left-32 text-blue-500/8">
          <svg className="w-12 h-12 md:w-18 lg:w-24 md:h-18 lg:h-24" fill="currentColor" viewBox="0 0 24 24">
            <path d="M4 3h16l-1.5 15L12 21l-6.5-3L4 3zm2.5 4l.5 5h6.5l-.25 2.5L12 15l-1.25-.5H9.5l.25 2.5L12 18l2.25-1h1.25l-.5-5H8.5L8 7h8l-.25-2H6.75L7.5 7H6.5z"/>
          </svg>
        </div>
        
        {/* JavaScript Symbol */}
        <div className="absolute top-1/2 left-2 md:left-8 text-blue-400/6">
          <svg className="w-16 h-16 md:w-20 lg:w-28 md:h-20 lg:h-28" fill="currentColor" viewBox="0 0 24 24">
            <path d="M3 3h18v18H3V3zm16.525 13.707c-.131-.821-.666-1.511-2.252-2.155-.552-.259-1.165-.438-1.349-.854-.068-.248-.078-.382-.034-.529.114-.484.397-.635.981-.635.577 0 .951.24 1.241.847l1.197-.744c-.508-.847-1.206-1.239-2.413-1.239-1.939 0-3.126 1.036-3.126 2.466 0 1.563 1.239 2.257 2.809 2.681.557.172 1.176.342 1.176.808 0 .441-.302.735-.78.735-.577 0-.972-.24-1.3-.847L9.374 18c.577 1.239 1.563 1.847 3.126 1.847 1.939 0 3.299-1.036 3.299-2.673zm-8.616-.086c0-1.563-.823-2.257-2.466-2.681-.557-.172-1.176-.342-1.176-.808 0-.441.302-.735.78-.735.577 0 .972.24 1.3.847l1.197-.744c-.577-1.239-1.563-1.847-3.126-1.847-1.939 0-3.299 1.036-3.299 2.673 0 1.563 1.176 2.257 2.746 2.681.557.172 1.176.342 1.176.808 0 .441-.302.735-.78.735-.577 0-.972-.24-1.3-.847l-1.197.744c.577 1.239 1.563 1.847 3.126 1.847 1.939 0 3.299-1.036 3.299-2.673z"/>
          </svg>
        </div>
        
        {/* Floating Dots Pattern */}
        <div className="absolute top-16 right-1/3 grid grid-cols-3 gap-2 md:gap-4 opacity-30">
          <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-blue-400/20 rounded-full"></div>
          <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-blue-500/20 rounded-full"></div>
          <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-blue-400/20 rounded-full"></div>
          <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-blue-500/20 rounded-full"></div>
          <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-blue-400/20 rounded-full"></div>
          <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-blue-500/20 rounded-full"></div>
        </div>
        
        {/* Connection Lines */}
        <div className="absolute top-1/4 left-1/4 w-16 md:w-24 lg:w-32 h-px bg-gradient-to-r from-blue-500/20 to-transparent"></div>
        <div className="absolute bottom-1/3 right-1/4 w-12 md:w-18 lg:w-24 h-px bg-gradient-to-l from-blue-400/20 to-transparent"></div>
        
        {/* Binary Code Pattern */}
        <div className="absolute bottom-10 right-4 md:right-10 text-blue-500/5 font-mono text-xs">
          <div>1010101010</div>
          <div>0101010101</div>
          <div>1010101010</div>
        </div>
      </div>

      <Container>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mt-5">
          
          {/* Right Side - Visual Element (First on Mobile/Tablet) */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <ProfileImg />
          </div>

          {/* Left Side - Content (Second on Mobile/Tablet) */}
          <div className="space-y-6 lg:space-y-8 order-2 lg:order-1">
            
            {/* Greeting */}
            <div className="">
              <p className="text-lg sm:text-xl text-blue-400 font-medium">
                Hello, I'm
              </p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight tracking-tight text-white">
                Toukir Tuhin
              </h1>
            </div>

            {/* Professional Title */}
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight text-gray-300">
                Frontend Developer
              </h2>
              
              {/* Value Proposition */}
              <p className="text-base sm:text-lg md:text-xl font-normal leading-relaxed text-gray-400 max-w-2xl">
                Experienced frontend developer specializing in scalable web applications and seamless user interfaces. 
                I deliver high-performance solutions that drive business growth and exceed client expectations.
              </p>
            </div>

            {/* Skills Tags */}
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-3 py-1 sm:px-4 sm:py-2 bg-gray-800 text-blue-400 rounded-full text-sm sm:text-base font-medium border border-gray-700 hover:border-blue-500 transition-colors duration-200"
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a 
                href="#projects"
                className="px-6 py-3 sm:px-8 sm:py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl cursor-pointer text-center"
              >
                View My Projects
              </a>
              <a 
                href="#contact"
                className="px-6 py-3 sm:px-8 sm:py-4 border-2 border-gray-600 hover:border-blue-500 text-gray-300 hover:text-white font-semibold rounded-lg transition-all duration-200 cursor-pointer text-center"
              >
                Get In Touch
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              <a
                href="https://github.com/tuhin-toukirahmed"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 text-gray-400 hover:text-blue-400 transition-colors duration-200 cursor-pointer"
                aria-label="GitHub"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/toukir-tuhin-the-developer/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 text-gray-400 hover:text-blue-400 transition-colors duration-200 cursor-pointer"
                aria-label="LinkedIn"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a
                href="https://www.facebook.com/tuhin.toukirahmed/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 text-gray-400 hover:text-blue-400 transition-colors duration-200 cursor-pointer"
                aria-label="Facebook"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </Container>
    </section>
  );
};

export default Banner;